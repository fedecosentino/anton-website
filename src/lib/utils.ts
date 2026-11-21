/** Une clases condicionales (equivalente mínimo al `cn` de shadcn, sin dependencias). */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
