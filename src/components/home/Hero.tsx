import { Search, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KPI } from "@/content/home";
import { track } from "@/lib/analytics";

const formatNum = (n: number) => n.toLocaleString("en-US");

export const Hero = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    track("hero_search_submit", {
      species: String(data.get("species") || ""),
      origin: "",
      cert: "",
    });
    const q = encodeURIComponent(String(data.get("species") || ""));
    window.location.hash = `#offers${q ? `?q=${q}` : ""}`;
  };

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

            <form
              onSubmit={onSubmit}
              className="mt-7 flex max-w-xl items-center gap-2 rounded-xl border border-border bg-card p-1.5 shadow-sm"
            >
              <Search className="ml-2 h-4 w-4 text-muted-foreground" />
              <Input
                name="species"
                placeholder="Search species, e.g. pangasius, salmon, vannamei…"
                className="h-11 border-0 shadow-none focus-visible:ring-0"
                aria-label="Search species"
              />
              <Button type="submit" className="h-11 px-5">
                Search
              </Button>
            </form>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                asChild
                onClick={() => track("hero_cta_register_click", { source_section: "hero" })}
              >
                <a href="#register">Create buyer account</a>
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
            <KPIBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

const KPIBlock = () => {
  const items = [
    { v: formatNum(KPI.verifiedProducers), l: "Verified producers" },
    { v: formatNum(KPI.countries), l: "Countries" },
    { v: formatNum(KPI.liveOffers), l: "Live offers" },
    { v: formatNum(KPI.activeBuyers), l: "Active buyers" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      {items.map((it) => (
        <div key={it.l} className="rounded-xl bg-secondary/60 p-4">
          <div className="font-display text-3xl font-semibold leading-none sm:text-4xl">{it.v}</div>
          <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">
            {it.l}
          </div>
        </div>
      ))}
      <div className="col-span-2 mt-1 rounded-lg bg-verified-soft px-3 py-2 text-[11px] font-medium text-[hsl(var(--verified))]">
        Verified status reviewed at least every 12 months
      </div>
    </div>
  );
};
