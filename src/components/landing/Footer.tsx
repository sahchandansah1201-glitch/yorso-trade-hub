export const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-yorso grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-semibold">YORSO</div>
          <p className="mt-2 max-w-xs text-sm text-primary-foreground/70">
            B2B seafood trade operating system. Supplier-controlled access. Identity protected at all
            stages.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#offers" className="hover:text-primary-foreground">Live offers</a></li>
            <li><a href="#categories" className="hover:text-primary-foreground">Categories</a></li>
            <li><a href="#verification" className="hover:text-primary-foreground">Verification</a></li>
            <li><a href="#how-access" className="hover:text-primary-foreground">How access works</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">For suppliers</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#suppliers" className="hover:text-primary-foreground">Why YORSO</a></li>
            <li><a href="/suppliers/apply" className="hover:text-primary-foreground">Apply as supplier</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#faq" className="hover:text-primary-foreground">FAQ</a></li>
            <li><a href="/terms" className="hover:text-primary-foreground">Terms</a></li>
            <li><a href="/privacy" className="hover:text-primary-foreground">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-yorso flex flex-col items-start justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} YORSO. All rights reserved.</span>
          <span>No hidden broker commission · Supplier-approved commercial access</span>
        </div>
      </div>
    </footer>
  );
};
