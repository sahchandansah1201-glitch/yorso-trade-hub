import { SectionHeader } from "./LiveOffers";
import { Lock, ShieldCheck, Filter } from "lucide-react";

export const WhyControlledAccess = () => {
  const items = [
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Identity protection is structural, not temporary",
      body: "Producers join YORSO because their company name is protected from scraping, broker poaching and low-intent agents — at every stage, including after approval.",
    },
    {
      icon: <Filter className="h-5 w-5" />,
      title: "Controlled access protects deal quality",
      body: "Suppliers see a registered, qualified buyer profile before they open price and documents. Less noise upstream means more serious responses downstream.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "No hidden broker commission",
      body: "YORSO does not sit between you and the supplier after approval, and does not take a hidden cut on direct commercial communication.",
    },
  ];
  return (
    <section id="why-controlled-access" className="bg-background py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Why controlled access"
          title="A platform built around supplier control — that benefits buyers"
          sub="The reason names stay hidden is the same reason serious buyers get serious replies."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
