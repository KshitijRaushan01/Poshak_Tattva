/**
 * Utility: cn (classNames)
 * Merges class name strings, filtering falsy values.
 * This is a lightweight shim for the shadcn `@/lib/utils` `cn` helper,
 * compatible with projects that do NOT use Tailwind or tailwind-merge.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
