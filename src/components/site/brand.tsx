import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Asihwebe Foundation home">
      <span className="grid size-10 place-items-center rounded-sm bg-brand-gold font-display text-lg font-extrabold text-brand-navy transition-transform group-hover:-rotate-2">A</span>
      <span className={inverse ? "text-primary-foreground" : "text-brand-navy"}>
        <span className="block font-display text-base font-bold leading-none">Asihwebe</span>
        <span className="mt-1 block text-[0.63rem] font-semibold uppercase tracking-[0.16em] opacity-70">Foundation</span>
      </span>
    </Link>
  );
}
