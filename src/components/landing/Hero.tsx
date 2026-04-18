import { ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KPI } from "@/i18n/translations";
import { track } from "@/lib/analytics";
import heroImage from "@/assets/hero-crab-harvest.jpg";

const formatNum = (n: number) => n.toLocaleString("en-US");

export const Hero = () => {
  return (
    <section id="top" className="bg-hero-deep">
      <div className="container-yorso py-14 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              B2B seafood trade operating system
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Source verified seafood producers.
              <span className="block text-foreground/70">
                On terms suppliers actually accept.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              A supplier-controlled access platform for serious buyers. Browse indicative market
              offers from verified producers, then request price access — the supplier decides when
              to share commercial terms. Supplier company names stay protected.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                asChild
                onClick={() => track("hero_cta_register_click", { source_section: "hero" })}
              >
                <a href="/auth?intent=register">Create buyer account</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base"
                asChild
                onClick={() => track("hero_cta_browse_click")}
              >
                <a href="#offers">Browse live offers</a>
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> Identity protected at all stages
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> No hidden broker commission
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Supplier-approved commercial access
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
            {/* Mobile: KPI stacks below hero, not over the image */}
            <div className="mt-6 lg:hidden">
              <KPIBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroVisual = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
      <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
        <img
          src={heroImage}
          alt="Industrial king crab harvesting on a North Atlantic vessel — verified seafood supply"
          width={1600}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle gradient to deepen contrast for overlays */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40"
          aria-hidden
        />

        {/* Desktop overlays */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* KPI overlay — lower-right calm zone */}
          <div className="pointer-events-auto absolute bottom-4 right-4 w-[58%] max-w-[320px]">
            <KPIBlock compact />
          </div>
          {/* Anonymous proof card — upper-right */}
          <div className="pointer-events-auto absolute right-4 top-4 w-[58%] max-w-[300px]">
            <ProofCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProofCard = () => (
  <div className="rounded-xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur-sm">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        <span className="text-sm leading-none">🇳🇴</span>
        <span>Norway</span>
      </div>
      <span className="inline-flex items-center gap-1 rounded bg-verified-soft px-1.5 py-0.5 text-[10px] font-medium text-[hsl(var(--verified))]">
        <ShieldCheck className="h-3 w-3" /> Verified
      </span>
    </div>
    <div className="mt-1.5 font-display text-sm font-semibold leading-snug">
      Verified Norwegian king crab producer
    </div>
    <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
      <Lock className="h-3 w-3" /> Identity protected
    </div>
    <div className="mt-2 flex flex-wrap gap-1">
      {["HACCP", "BRC AA", "MSC"].map((c) => (
        <span
          key={c}
          className="rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium"
        >
          {c}
        </span>
      ))}
    </div>
    <div className="mt-2 text-[10px] text-muted-foreground">EU · US · JP · KR</div>
    <div className="mt-2 flex items-end justify-between gap-2 border-t border-border pt-2">
      <div>
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Indicative</div>
        <div className="font-display text-sm font-semibold">$28.50–$32.00<span className="ml-1 text-[10px] font-medium text-muted-foreground">/ kg</span></div>
      </div>
      <div className="text-right text-[9px] text-muted-foreground">Supplier-approved access</div>
    </div>
  </div>
);

const KPIBlock = ({ compact = false }: { compact?: boolean } = {}) => {
  const items = [
    { v: formatNum(KPI.verifiedProducers), l: "Verified producers" },
    { v: formatNum(KPI.countries), l: "Countries" },
    { v: formatNum(KPI.liveOffers), l: "Live offers" },
    { v: formatNum(KPI.activeBuyers), l: "Active buyers" },
  ];
  return (
    <div
      className={
        compact
          ? "grid grid-cols-2 gap-2 rounded-xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur-sm"
          : "grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
      }
    >
      {items.map((it) => (
        <div
          key={it.l}
          className={
            compact
              ? "rounded-lg bg-secondary/60 p-2.5"
              : "rounded-xl bg-secondary/60 p-4"
          }
        >
          <div
            className={
              compact
                ? "font-display text-lg font-semibold leading-none"
                : "font-display text-3xl font-semibold leading-none sm:text-4xl"
            }
          >
            {it.v}
          </div>
          <div
            className={
              compact
                ? "mt-1 text-[9px] uppercase tracking-wider text-muted-foreground"
                : "mt-1.5 text-xs uppercase tracking-wider text-muted-foreground"
            }
          >
            {it.l}
          </div>
        </div>
      ))}
      <div
        className={
          compact
            ? "col-span-2 rounded-md bg-verified-soft px-2 py-1 text-[9px] font-medium text-[hsl(var(--verified))]"
            : "col-span-2 mt-1 rounded-lg bg-verified-soft px-3 py-2 text-[11px] font-medium text-[hsl(var(--verified))]"
        }
      >
        Verified status reviewed at least every 12 months
      </div>
    </div>
  );
};
