import { VERIFICATION_STEPS } from "@/content/home";
import { SectionHeader } from "./LiveOffers";
import { ShieldCheck } from "lucide-react";
import { track } from "@/lib/analytics";

export const Verification = () => {
  return (
    <section id="verification" className="bg-secondary/40 py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Verification methodology"
          title="Verified producers — checked, not just listed"
          sub="Onboarding checks plus an ongoing review at least every 12 months and on any certification change."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {VERIFICATION_STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--verified))]" />
                <span className="font-display text-sm font-semibold text-muted-foreground">
                  Step {s.n}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <a
            href="#faq"
            onClick={() => track("verification_methodology_click")}
            className="font-medium text-accent hover:underline"
          >
            Read the full verification methodology →
          </a>{" "}
          <span className="text-muted-foreground">
            (a dedicated methodology page is rolling out)
          </span>
        </p>
      </div>
    </section>
  );
};
