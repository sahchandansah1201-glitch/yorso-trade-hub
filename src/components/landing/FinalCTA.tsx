import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

// Trade desk secondary CTA is hidden until a confirmed live channel exists.
const TRADE_DESK_LIVE = false;

export const FinalCTA = () => {
  return (
    <section className="bg-background py-20">
      <div className="container-yorso">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Start sourcing from verified producers today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Free to register. Identity protected at all stages. Supplier-approved commercial access —
            no hidden broker commission.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              asChild
              onClick={() => track("final_cta_register_click")}
            >
              <a href="/auth?intent=register">Create buyer account</a>
            </Button>
            {TRADE_DESK_LIVE && (
              <Button size="lg" variant="outline" className="h-12 px-7 text-base" asChild>
                <a href="/contact/trade-desk">Talk to trade desk</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
