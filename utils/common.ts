import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...className: (string | boolean | undefined)[]): string {
  return className.filter(Boolean).join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
