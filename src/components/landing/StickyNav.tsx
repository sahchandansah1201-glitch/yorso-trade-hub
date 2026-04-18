import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

const NAV = [
  { href: "#categories", label: "Categories" },
  { href: "#offers", label: "Offers" },
  { href: "#verification", label: "Verification" },
  { href: "#how-access", label: "How access works" },
  { href: "#suppliers", label: "For suppliers" },
];

export const StickyNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-yorso flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M3 13c4-6 14-6 18 0-4 6-14 6-18 0Zm9-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">YORSO</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/80 hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#signin">Sign in</a>
          </Button>
          <Button
            size="sm"
            asChild
            onClick={() => track("hero_cta_register_click", { source_section: "stickynav" })}
          >
            <a href="#register">Create buyer account</a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-yorso flex flex-col py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="#signin">Sign in</a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <a href="#register">Register</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
