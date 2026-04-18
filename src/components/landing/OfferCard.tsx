import { useEffect, useRef } from "react";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AnonymousOffer } from "@/i18n/translations";
import { track } from "@/lib/analytics";

interface Props {
  offer: AnonymousOffer;
}

export const OfferCard = ({ offer }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !seen.current) {
            seen.current = true;
            track("live_offer_card_view", {
              offer_id: offer.id,
              category: offer.product,
              country: offer.country,
            });
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [offer]);

  return (
    <article
      ref={ref}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <header className="border-b border-border p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <span className="text-base leading-none">{offer.flag}</span>
              <span>{offer.country}</span>
            </div>
            <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug">
              {offer.anonymousLabel}
            </h3>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 gap-1 bg-verified-soft text-[hsl(var(--verified))] hover:bg-verified-soft"
          >
            <ShieldCheck className="h-3 w-3" />
            Verified
          </Badge>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3" />
          Identity protected · Verified {offer.verifiedSince} · On YORSO since {offer.onPlatformSince}
        </div>
      </header>

      <div className="flex-1 space-y-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {offer.certifications.map((c) => (
            <span
              key={c}
              className="rounded border border-border bg-secondary px-1.5 py-0.5 text-[11px] font-medium"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="text-[11px] text-muted-foreground">
          Export markets: {offer.exportMarkets.join(" · ")}
        </div>

        <div className="rounded-lg bg-secondary/60 p-3">
          <div className="text-sm font-semibold">{offer.product}</div>
          <div className="text-xs text-muted-foreground">
            {offer.spec} · {offer.incoterm}
          </div>
          <div className="mt-3 flex items-end justify-between gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Indicative price range
              </div>
              <div className="font-display text-xl font-semibold">
                {offer.priceRange}
                <span className="ml-1 text-xs font-medium text-muted-foreground">{offer.unit}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Volume</div>
              <div className="text-xs font-medium">{offer.volume}</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground">Updated {offer.updated}</div>
        </div>
      </div>

      <footer className="space-y-2 border-t border-border bg-background/50 p-4">
        <Button
          className="w-full"
          asChild
          onClick={() =>
            track("live_offer_request_price_click", { offer_id: offer.id })
          }
        >
          <a href={`/auth?intent=register&from=offer&id=${encodeURIComponent(offer.id)}`}>
            Request price access
          </a>
        </Button>
        <p className="text-[11px] leading-snug text-muted-foreground">
          Today this opens registration. Full supplier-approval flow is rolling out
          <span className="ml-1 rounded bg-warn-soft px-1 py-px text-[10px] font-medium text-warn-fg">
            future workflow
          </span>
        </p>
        <a
          href="#why-controlled-access"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-accent hover:underline"
        >
          Why supplier identity stays protected <ArrowRight className="h-3 w-3" />
        </a>
      </footer>
    </article>
  );
};
