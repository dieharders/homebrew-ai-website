"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a looping product mock: returns a `tick` that counts 0..length-1
 * every `ms`, then wraps.
 *
 * - Only runs while the mock is on screen, so offscreen mocks cost nothing.
 * - Under `prefers-reduced-motion` it parks on `restTick` and never advances.
 *   That defaults to the last tick (the "finished" state); mocks whose last
 *   tick is a reset back to idle should pass the tick that best shows them off.
 */
export function useLoop(length: number, ms: number, restTick = length - 1) {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(restTick);
      return;
    }

    let timer: number | undefined;
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };

    const io = new IntersectionObserver((entries) => {
      // A fast scroll can batch an enter and a leave into one callback; only
      // the newest entry reflects where the mock is now.
      const entry = entries[entries.length - 1];
      if (entry.isIntersecting) {
        if (timer === undefined) {
          timer = window.setInterval(
            () => setTick((t) => (t + 1) % length),
            ms,
          );
        }
      } else {
        stop();
      }
    });

    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      stop();
    };
  }, [length, ms, restTick]);

  return { ref, tick };
}
