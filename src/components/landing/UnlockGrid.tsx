import { UNLOCK_ITEMS } from "@/i18n/translations";
import { SectionHeader } from "./LiveOffers";
import { Button } from "@/components/ui/button";
import { Check, Lock, Sparkles } from "lucide-react";
import { track } from "@/lib/analytics";

export const UnlockGrid = () => {
  return (
    <section id="register" className="bg-secondary/40 py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="What registration gives you"
          title="Free to register. Identity stays protected."
          sub="Registration unlocks workflow value. Real price, supplier-approved communication and document access open only when the supplier approves your request — for that specific offer. Company name is never revealed."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Column
            tone="immediate"
            label="Live · immediately after registration"
            icon={<Check className="h-4 w-4" />}
            items={UNLOCK_ITEMS.immediate.map((i) => ({
              ...i,
              badge: "futureWorkflow" in i && i.futureWorkflow ? "future workflow" : undefined,
            }))}
          />
          <Column
            tone="approval"
            label="Requires supplier approval"
            icon={<Lock className="h-4 w-4" />}
            items={UNLOCK_ITEMS.requiresApproval.map((i) => ({ ...i }))}
          />
          <Column
            tone="future"
            label="Rolling out · future"
            icon={<Sparkles className="h-4 w-4" />}
            items={UNLOCK_ITEMS.future.map((i) => ({ ...i, badge: "future" }))}
          />
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            asChild
            onClick={() => track("hero_cta_register_click", { source_section: "unlock" })}
          >
            <a href="#register">Create buyer account</a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Free to register · No hidden broker commission · Supplier decides commercial access
          </p>
        </div>
      </div>
    </section>
  );
};

type Item = { title: string; body: string; badge?: string };

const Column = ({
  tone,
  label,
  icon,
  items,
}: {
  tone: "immediate" | "approval" | "future";
  label: string;
  icon: React.ReactNode;
  items: Item[];
}) => {
  const toneClass =
    tone === "immediate"
      ? "bg-verified-soft text-[hsl(var(--verified))]"
      : tone === "approval"
        ? "bg-accent-soft text-accent"
        : "bg-warn-soft text-warn-fg";
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${toneClass}`}
      >
        {icon}
        {label}
      </div>
      <ul className="mt-5 space-y-4">
        {items.map((it) => (
          <li
            key={it.title}
            onMouseEnter={() =>
              track("unlock_card_click", {
                feature: it.title,
                gated: tone === "approval",
                future: tone === "future" || it.badge === "future workflow",
              })
            }
          >
            <div className="flex items-start justify-between gap-2">
              <div className="font-display text-[15px] font-semibold leading-snug">{it.title}</div>
              {it.badge && (
                <span className="shrink-0 rounded bg-warn-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warn-fg">
                  {it.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
