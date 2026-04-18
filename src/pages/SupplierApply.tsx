import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";

const SupplierApply = () => {
  useEffect(() => {
    document.title = "Apply as supplier — YORSO";
    track("supplier_apply_view");
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("supplier_apply_submit");
  };

  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="container-yorso flex min-h-screen flex-col py-8">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-10 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h1 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Apply as a supplier
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Verification is a structured process. You stay in control of who sees your commercial
              terms — your company name is never exposed publicly.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="company">Company legal name</Label>
                <Input id="company" name="company" required className="mt-1.5" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="species">Main species</Label>
                  <Input id="species" name="species" required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <Label htmlFor="notes">Verification context (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="mt-1.5"
                  placeholder="Certifications, export markets, production capacity"
                />
              </div>
              <Button type="submit" className="h-11 w-full text-base">
                Submit verification request
              </Button>
            </form>
          </section>

          <aside className="space-y-4 self-start rounded-2xl border border-border bg-background p-8">
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              What you control
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--verified))]" />
                <span>Your company name stays protected on public listings.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--verified))]" />
                <span>You decide which buyer gets the real price and approved communication.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--verified))]" />
                <span>Verification is reviewed at least every 12 months.</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default SupplierApply;
