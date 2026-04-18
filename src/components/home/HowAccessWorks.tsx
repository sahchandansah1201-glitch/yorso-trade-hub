import { HOW_ACCESS_STEPS } from "@/content/home";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./LiveOffers";
import { track } from "@/lib/analytics";

export const HowAccessWorks = () => {
  return (
    <section id="how-access" className="bg-secondary/40 py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="How access works"
          title="From anonymous browsing to supplier-approved commerce"
          sub="A predictable path from public visibility to a real price — controlled by the supplier, not by a broker."
        />
        <ol className="mt-12 grid gap-5 lg:grid-cols-4">
          {HOW_ACCESS_STEPS.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {s.n}
                </span>
                {s.future && (
                  <span className="rounded bg-warn-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warn-fg">
                    future workflow
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            onClick={() => track("hero_cta_register_click", { source_section: "how-access" })}
          >
            <a href="#register">Create buyer account</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#verification">See verification methodology</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
