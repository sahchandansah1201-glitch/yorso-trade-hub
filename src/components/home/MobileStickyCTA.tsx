import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

export const MobileStickyCTA = () => {
  const [show, setShow] = useState(false);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ratio =
        window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const visible = ratio > 0.6;
      setShow(visible);
      if (visible && !tracked) {
        track("mobile_sticky_cta_view");
        setTracked(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tracked]);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur lg:hidden">
      <Button
        size="lg"
        className="h-12 w-full text-base"
        asChild
        onClick={() => track("mobile_sticky_cta_click")}
      >
        <a href="#register">Create buyer account</a>
      </Button>
    </div>
  );
};
