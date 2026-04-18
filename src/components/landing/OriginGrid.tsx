import { ORIGIN_COUNTRIES } from "@/i18n/translations";
import { SectionHeader } from "./LiveOffers";
import { track } from "@/lib/analytics";

export const OriginGrid = () => {
  return (
    <section id="origin" className="bg-background py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Suppliers by origin"
          title="Curated origin coverage"
          sub="A selected subset of key origin countries on the homepage. Full origin directory is rolling out."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ORIGIN_COUNTRIES.map((c) => (
            <a
              key={c.code}
              href={`#origin-${c.code.toLowerCase()}`}
              onClick={() => track("origin_country_click", { country: c.code })}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <span className="text-2xl leading-none">{c.flag}</span>
              <div className="min-w-0">
                <div className="truncate font-display text-base font-semibold">{c.name}</div>
                <div className="text-[11px] text-muted-foreground">
                  {c.producers} verified · {c.species.join(" · ")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
