/**
 * Icons for the OpenBrew app suite: each app's 3D mark, loaded from
 * public/icons/.
 */

export type AppIconProps = { className?: string; title?: string };

/**
 * An app's 3D mark from public/icons/. Loaded as an image rather than inlined:
 * the SVGs define gradient ids, and inlining one in several places at once
 * (header menu, suite card, spotlight) would duplicate them, and gradients
 * defined inside the hidden header menu can fail to paint. Each mark is its own
 * tile, so it fills the icon box.
 *
 * The marks sit next to their app's name, so by default they're decorative and
 * hidden from assistive tech. A caller that passes a `title` wants it announced
 * instead, as the image's alt text.
 */
function MarkImage({ src, ...p }: AppIconProps & { src: string }) {
  return (
    <img
      src={src}
      alt={p.title ?? ""}
      aria-hidden={p.title ? undefined : true}
      width="100%"
      height="100%"
      className={p.className}
      draggable={false}
    />
  );
}

/** FileBuff's mark: an extruded folder on an amber hexagon. */
export function FileBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/filebuff.svg" {...p} />;
}

/** ScreenBuff's mark: an extruded arrow cursor on a red recording dot. */
export function ScreenBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/screenbuff.svg" {...p} />;
}

/** MotionBuff's mark (the same design source as its favicon). */
export function MotionBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/motionbuff.svg" {...p} />;
}

/** PaperBuff's mark: an extruded, dog-eared page on a sky-blue speech bubble. */
export function PaperBuffIcon(p: AppIconProps) {
  return <MarkImage src="/icons/paperbuff.svg" {...p} />;
}
