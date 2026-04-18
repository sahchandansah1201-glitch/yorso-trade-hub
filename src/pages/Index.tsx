import { useEffect } from "react";
import { TopBar } from "@/components/landing/TopBar";
import { StickyNav } from "@/components/landing/StickyNav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { LiveOffers } from "@/components/landing/LiveOffers";
import { HowAccessWorks } from "@/components/landing/HowAccessWorks";
import { Categories } from "@/components/landing/Categories";
import { Verification } from "@/components/landing/Verification";
import { OriginGrid } from "@/components/landing/OriginGrid";
import { UnlockGrid } from "@/components/landing/UnlockGrid";
import { WhyControlledAccess } from "@/components/landing/WhyControlledAccess";
import { Compliance } from "@/components/landing/Compliance";
import { BuyerOutcomes } from "@/components/landing/BuyerOutcomes";
import { FAQSection } from "@/components/landing/FAQSection";
import { SupplierStrip } from "@/components/landing/SupplierStrip";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileStickyCTA } from "@/components/landing/MobileStickyCTA";
import { track } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    document.title = "YORSO — B2B seafood trade operating system";
    track("home_view");

    // Scroll-depth analytics
    const marks = [25, 50, 75, 100];
    const fired = new Set<number>();
    const onScroll = () => {
      const max =
        (window.scrollY + window.innerHeight) /
        Math.max(1, document.documentElement.scrollHeight);
      marks.forEach((m) => {
        if (max * 100 >= m && !fired.has(m)) {
          fired.add(m);
          track("scroll_depth", { depth: m });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "YORSO",
            url: "https://yorso.com/",
            description:
              "B2B seafood trade operating system. Supplier-controlled access platform with verified producers and identity protection at all stages.",
          }),
        }}
      />

      <div className="min-h-screen bg-background text-foreground">
        <TopBar />
        <StickyNav />
        <main>
          <Hero />
          <TrustStrip />
          <LiveOffers />
          <HowAccessWorks />
          <Categories />
          <Verification />
          <OriginGrid />
          <UnlockGrid />
          <WhyControlledAccess />
          <Compliance />
          <BuyerOutcomes />
          <FAQSection />
          <SupplierStrip />
          <FinalCTA />
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </>
  );
};

export default Index;
