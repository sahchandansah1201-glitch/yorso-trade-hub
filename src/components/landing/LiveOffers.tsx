import { LIVE_OFFERS } from "@/content/home";
import { OfferCard } from "./OfferCard";

export const LiveOffers = () => {
  return (
    <section id="offers" className="bg-background py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Live offers"
          title="Indicative market visibility, anonymously"
          sub="Real offers from verified producers. Public view shows indicative price ranges and neutral volumes — exact terms open after supplier approval. Company names are never revealed."
        />

        {/* Mobile snap-carousel */}
        <div className="-mx-4 mt-10 flex snap-x-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:hidden">
          {LIVE_OFFERS.map((o) => (
            <div key={o.id} className="snap-start-card w-[88%] shrink-0">
              <OfferCard offer={o} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">
          {LIVE_OFFERS.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) => (
  <div className="max-w-3xl">
    <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
    <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
    {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
  </div>
);
