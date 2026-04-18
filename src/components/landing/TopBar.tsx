import { Globe } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="hidden border-b border-border bg-primary text-primary-foreground md:block">
      <div className="container-yorso flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-4 opacity-90">
          <span className="flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" /> EN · USD
          </span>
          <span className="opacity-70">Verified producers · Identity protected at all stages</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/auth?intent=signin" className="hover:opacity-80">
            Sign in
          </a>
          <a
            href="/auth?intent=register"
            className="rounded-sm bg-accent px-2 py-0.5 font-medium text-accent-foreground hover:opacity-90"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
