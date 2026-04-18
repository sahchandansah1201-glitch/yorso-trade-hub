import { FAQ } from "@/content/home";
import { SectionHeader } from "./LiveOffers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { track } from "@/lib/analytics";

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="container-yorso max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions about access, identity and pricing"
        />
        <Accordion type="single" collapsible className="mt-8 w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`q-${i}`}>
              <AccordionTrigger
                onClick={() => track("faq_open", { question_id: i })}
                className="text-left font-display text-base"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
