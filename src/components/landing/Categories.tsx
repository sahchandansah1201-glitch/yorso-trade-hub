import { CATEGORIES } from "@/content/home";
import { SectionHeader } from "./LiveOffers";
import { track } from "@/lib/analytics";
import { ArrowUpRight } from "lucide-react";

export const Categories = () => {
  return (
    <section id="categories" className="bg-background py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Categories"
          title="Verified supply across the core species"
          sub="Browse offers within each category. Indicative ranges, neutral volumes, identity protected."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#category-${c.slug}`}
              onClick={() => track("category_card_click", { category: c.slug })}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <div className="font-display text-lg font-semibold">{c.name}</div>
              <div className="mt-6 flex items-end justify-between">
                <div className="text-xs text-muted-foreground">
                  <span className="text-foreground font-semibold">{c.offers}</span> live offers
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
