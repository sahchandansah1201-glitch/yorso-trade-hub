import { COMPLIANCE_DOCS } from "@/i18n/translations";
import { SectionHeader } from "./LiveOffers";
import { FileText } from "lucide-react";
import { track } from "@/lib/analytics";

export const Compliance = () => {
  return (
    <section id="compliance" className="bg-secondary/40 py-16 lg:py-24">
      <div className="container-yorso">
        <SectionHeader
          eyebrow="Compliance & documents"
          title="Document access opens with supplier approval"
          sub="Document types you can expect once a supplier approves your request on a specific offer. Documents are never published on the public homepage."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLIANCE_DOCS.map((d) => (
            <div
              key={d.name}
              onMouseEnter={() => track("compliance_doctype_view", { doc_type: d.name })}
              className="flex gap-3 rounded-xl border border-border bg-card p-4"
            >
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="font-semibold">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
