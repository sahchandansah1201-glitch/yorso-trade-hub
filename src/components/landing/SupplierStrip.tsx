import { SUPPLIER_VALUE } from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

export const SupplierStrip = () => {
  return (
    <section id="suppliers" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="container-yorso grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            For suppliers
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Better-qualified buyers. Cleaner pipeline. Your identity protected.
          </h2>
          <p className="mt-4 text-base text-primary-foreground/80">
            YORSO is built around your control. You decide which buyer gets the real price,
            documents and approved communication. Your company name stays protected — at every stage.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-6"
            asChild
            onClick={() => track("supplier_apply_click")}
          >
            <a href="/suppliers/apply">Apply as supplier</a>
          </Button>
        </div>
        <ul className="grid gap-4 lg:col-span-7 lg:grid-cols-3">
          {SUPPLIER_VALUE.map((v) => (
            <li
              key={v.title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
            >
              <div className="font-display text-lg font-semibold">{v.title}</div>
              <p className="mt-2 text-sm text-primary-foreground/80">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
