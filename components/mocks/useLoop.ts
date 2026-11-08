"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a looping product mock: returns a `tick` that counts 0..length-1
 * every `ms`, then wraps.
 *
 * - Only runs while the mock is on screen, so offscreen mocks cost nothing.
 * - Under `prefers-reduced-motion` it parks on the last tick (the "finished"
 *   state) and never advances.
 */
export function useLoop(length: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(length - 1);
      return;
    }

    let timer: number | undefined;
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };

    const io = new IntersectionObserver(([entry]) => {
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
  }, [length, ms]);

  return { ref, tick };
}
