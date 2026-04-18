import { TRUST_AUTHORITIES } from "@/i18n/translations";

export const TrustStrip = () => {
  return (
    <section aria-label="Recognised certification standards" className="border-y border-border bg-card">
      <div className="container-yorso flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Verified against recognised standards
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {TRUST_AUTHORITIES.map((t) => (
            <li
              key={t}
              className="text-sm font-semibold tracking-wide text-foreground/80"
              title={t}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
