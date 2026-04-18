import { useEffect } from "react";
import { TopBar } from "@/components/home/TopBar";
import { StickyNav } from "@/components/home/StickyNav";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { LiveOffers } from "@/components/home/LiveOffers";
import { HowAccessWorks } from "@/components/home/HowAccessWorks";
import { Categories } from "@/components/home/Categories";
import { Verification } from "@/components/home/Verification";
import { OriginGrid } from "@/components/home/OriginGrid";
import { UnlockGrid } from "@/components/home/UnlockGrid";
import { WhyControlledAccess } from "@/components/home/WhyControlledAccess";
import { Compliance } from "@/components/home/Compliance";
import { BuyerOutcomes } from "@/components/home/BuyerOutcomes";
import { FAQSection } from "@/components/home/FAQSection";
import { SupplierStrip } from "@/components/home/SupplierStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";
import { MobileStickyCTA } from "@/components/home/MobileStickyCTA";
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
