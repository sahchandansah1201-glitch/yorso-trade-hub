import { CATEGORIES } from "@/i18n/translations";
import { SectionHeader } from "./LiveOffers";

export const Categories = () => {
  return (
    <section id="categories" className="bg-background py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Categories"
          title="Verified supply across the core species"
          sub="Browse offers within each category. Indicative ranges, neutral volumes, identity protected. Category-level browsing pages are rolling out."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.slug}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5"
            >
              <div className="font-display text-lg font-semibold">{c.name}</div>
              <div className="mt-6 text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">{c.offers}</span> live offers
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

