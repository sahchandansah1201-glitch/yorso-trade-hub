import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/analytics";

type Intent = "register" | "signin";

const Auth = () => {
  const [params] = useSearchParams();
  const initialIntent: Intent = params.get("intent") === "signin" ? "signin" : "register";
  const [intent, setIntent] = useState<Intent>(initialIntent);
  const fromOffer = params.get("from") === "offer";
  const offerId = params.get("id");

  useEffect(() => {
    document.title =
      intent === "register"
        ? "Create buyer account — YORSO"
        : "Sign in — YORSO";
    track("auth_view", { intent, from_offer: fromOffer, offer_id: offerId ?? undefined });
  }, [intent, fromOffer, offerId]);

  const heading = useMemo(
    () =>
      intent === "register"
        ? "Create your buyer account"
        : "Sign in to YORSO",
    [intent],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    track("auth_submit", { intent });
    // Backend not wired yet — placeholder until Cloud auth is enabled.
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
              {heading}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {intent === "register"
                ? "Free to register. Identity protection on both sides."
                : "Welcome back. Continue to your buyer workspace."}
            </p>

            {fromOffer && (
              <div className="mt-5 rounded-lg border border-border bg-warn-soft px-3 py-2 text-xs text-warn-fg">
                You started a price access request{offerId ? ` for offer ${offerId}` : ""}.
                Registration is the first step. Full supplier-approval flow is rolling out as a
                future workflow.
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {intent === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" name="firstName" required className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" name="lastName" required className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" required className="mt-1.5" />
                  </div>
                </>
              )}
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  className="mt-1.5"
                />
              </div>

              <Button type="submit" className="h-11 w-full text-base">
                {intent === "register" ? "Create buyer account" : "Sign in"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                {intent === "register" ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="font-medium text-accent hover:underline"
                      onClick={() => setIntent("signin")}
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    No account yet?{" "}
                    <button
                      type="button"
                      className="font-medium text-accent hover:underline"
                      onClick={() => setIntent("register")}
                    >
                      Create buyer account
                    </button>
                  </>
                )}
              </p>
            </form>
          </section>

          <aside className="space-y-4 self-start rounded-2xl border border-border bg-background p-8">
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              What registration unlocks
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--verified))]" />
                <span>Browse the verified producer pool with verification context.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--verified))]" />
                <span>
                  Submit price access requests. Suppliers decide when to share commercial terms.
                </span>
              </li>
              <li className="flex gap-3">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span>Identity stays protected on both sides until the supplier approves contact.</span>
              </li>
            </ul>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Heads up: account creation is not wired to a backend yet. This page captures intent
              so the flow is real — full registration and the supplier-approval loop are part of
              an upcoming build block.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Auth;
