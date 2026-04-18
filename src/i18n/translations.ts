/**
 * YORSO homepage content & i18n layer.
 *
 * English copy is the source of truth. The structure is i18n-ready:
 * to add a locale, wrap exported objects in a `{ en: {...}, xx: {...} }` map.
 *
 * Numbers are verified current-state facts (see locked plan v3). Do not inflate.
 * Items marked `[future]` / `[future workflow]` are not live yet — never present them as live.
 *
 * Live offer mock data lives in `@/data/mockOffers` and is re-exported below
 * so component imports stay single-sourced.
 */

export { LIVE_OFFERS, type AnonymousOffer } from "@/data/mockOffers";

/** Hero KPI block — verified current-state numbers. */
export const KPI = {
  verifiedProducers: 380,
  countries: 48,
  liveOffers: 1247,
  activeBuyers: 2100,
};

/** Eight current categories shown on the homepage. */
export const CATEGORIES = [
  { slug: "salmon", name: "Salmon", offers: 184 },
  { slug: "shrimp", name: "Shrimp", offers: 226 },
  { slug: "whitefish", name: "Whitefish", offers: 198 },
  { slug: "tuna", name: "Tuna", offers: 142 },
  { slug: "crab", name: "Crab", offers: 96 },
  { slug: "squid-octopus", name: "Squid & Octopus", offers: 118 },
  { slug: "shellfish", name: "Shellfish", offers: 154 },
  { slug: "surimi", name: "Surimi", offers: 129 },
] as const;

/** Curated origin subset shown on the homepage (locked, exactly 11). */
export const ORIGIN_COUNTRIES = [
  { code: "NO", flag: "🇳🇴", name: "Norway", producers: 42, species: ["Salmon", "Mackerel"] },
  { code: "EC", flag: "🇪🇨", name: "Ecuador", producers: 38, species: ["Shrimp", "Tuna"] },
  { code: "IS", flag: "🇮🇸", name: "Iceland", producers: 21, species: ["Cod", "Haddock"] },
  { code: "PH", flag: "🇵🇭", name: "Philippines", producers: 24, species: ["Tuna", "Squid"] },
  { code: "RU", flag: "🇷🇺", name: "Russia", producers: 33, species: ["Pollock", "Crab"] },
  { code: "AR", flag: "🇦🇷", name: "Argentina", producers: 19, species: ["Hake", "Squid"] },
  { code: "PE", flag: "🇵🇪", name: "Peru", producers: 22, species: ["Squid", "Mahi"] },
  { code: "VN", flag: "🇻🇳", name: "Vietnam", producers: 47, species: ["Pangasius", "Shrimp"] },
  { code: "TR", flag: "🇹🇷", name: "Turkey", producers: 18, species: ["Sea bass", "Sea bream"] },
  { code: "MA", flag: "🇲🇦", name: "Morocco", producers: 16, species: ["Sardine", "Octopus"] },
  { code: "BD", flag: "🇧🇩", name: "Bangladesh", producers: 14, species: ["Shrimp", "Hilsa"] },
] as const;

export const TRUST_AUTHORITIES = [
  "HACCP",
  "BRC Global Standard",
  "ASC",
  "MSC",
  "IFS Food",
  "BAP",
  "Friend of the Sea",
];

export const HOW_ACCESS_STEPS = [
  {
    n: 1,
    title: "Browse anonymous verified offers",
    body: "Public market visibility — indicative price ranges, neutral volumes, certifications, origin and verification status. Supplier company names are protected.",
    future: false,
  },
  {
    n: 2,
    title: "Create a buyer account",
    body: "Free registration. Save and compare offers, set alerts on categories and origins, see extended verification details — without revealing supplier identity.",
    future: false,
  },
  {
    n: 3,
    title: "Request price access",
    body: "Send a price-access request on a specific offer. Today this captures your intent through registration. The full supplier-review and approval loop is the next workflow we are rolling out.",
    future: false,
  },
  {
    n: 4,
    title: "Supplier approves commercial access",
    body: "On approval you see the real price, get supplier-approved communication and document access for that offer. Company name remains protected.",
    future: true,
  },
] as const;

export const VERIFICATION_STEPS = [
  {
    n: 1,
    title: "Legal entity check",
    body: "Company registration, ownership, export licence and operational status are checked against official registries.",
  },
  {
    n: 2,
    title: "Certification check",
    body: "HACCP, BRC, ASC, MSC, IFS, BAP and equivalent certificates are verified directly against issuing bodies.",
  },
  {
    n: 3,
    title: "Product & export check",
    body: "Declared species, formats and export markets are cross-checked with shipping records and product documentation.",
  },
  {
    n: 4,
    title: "Ongoing review",
    body: "Verified status is reviewed at least every 12 months and immediately on any certification change.",
  },
] as const;

export const UNLOCK_ITEMS = {
  immediate: [
    {
      title: "Save & compare offers",
      body: "Build short-lists by species, origin, certifications and indicative price range.",
    },
    {
      title: "Alerts on offers and price ranges",
      body: "Be notified when new verified offers appear or indicative ranges shift in your categories.",
    },
    {
      title: "Submit price-access requests",
      body: "Send requests on specific offers. Supplier-approval workflow is rolling out.",
      futureWorkflow: true,
    },
    {
      title: "Extended verification details",
      body: "See deeper verification, certification scope and export-market history — without supplier company name.",
    },
  ],
  requiresApproval: [
    {
      title: "Real price for the specific offer",
      body: "Once the supplier approves your request, the exact price for that offer becomes visible to you.",
    },
    {
      title: "Supplier-approved communication",
      body: "A controlled communication channel for negotiating terms — opened by the supplier.",
    },
    {
      title: "Document access",
      body: "HACCP plan, BRC certificate, health certificate, certificate of origin and product specifications.",
    },
  ],
  future: [
    { title: "RFQ to verified pool", body: "One request to the relevant verified producers." },
    { title: "Sample & inspection coordination", body: "Coordinated sampling and third-party inspection." },
    { title: "Weekly market digest", body: "Indicative range movements across your watched species." },
  ],
} as const;

export const COMPLIANCE_DOCS = [
  { name: "HACCP plan", body: "Hazard analysis and critical control point documentation." },
  { name: "BRC certificate", body: "Current BRCGS Food Safety certificate with grade and scope." },
  { name: "Health certificate", body: "Issued by competent veterinary authority for the destination market." },
  { name: "Certificate of origin", body: "Country of origin documentation for customs and tariff handling." },
  { name: "Product specification", body: "Detailed product spec sheet, sizing, glaze, packaging." },
  { name: "Lab analysis", body: "Microbiological and chemical results from accredited laboratories." },
] as const;

export const FAQ = [
  {
    q: "Why does the supplier company name stay hidden — even after registration?",
    a: "YORSO is a supplier-controlled access platform. Suppliers join because their identity is protected against scraping, broker poaching and low-intent inquiries. Identity protection is permanent — registration and supplier approval open price, communication and documents, not company name.",
  },
  {
    q: "What does ‘Request price access’ do today?",
    a: "Today the button routes you to registration. The full supplier-approval workflow — where the supplier reviews your buyer profile and opens the real price, communication and documents on a specific offer — is rolling out.",
  },
  {
    q: "How are price ranges built?",
    a: "Each indicative range is bound to a specific product, specification, incoterm, currency, unit and update date. Ranges reflect recent supplier-confirmed offers, not aspirational prices.",
  },
  {
    q: "Why no exact MOQ on public cards?",
    a: "Exact MOQ is commercial information. We use industry-standard neutral language — container-scale, industrial volumes, LCL on request — and the supplier shares specifics inside an approved exchange.",
  },
  {
    q: "Does YORSO take a hidden commission on contact?",
    a: "No. YORSO does not sit between you and the supplier after approval and does not take a hidden cut on direct commercial communication.",
  },
  {
    q: "How are producers verified?",
    a: "Legal entity, certification, product and export checks at onboarding, plus an ongoing review at least every 12 months and on any certification change.",
  },
] as const;

export const SUPPLIER_VALUE = [
  {
    title: "Fewer low-intent inquiries",
    body: "Buyers register before they can request price access. No scrapers, no anonymous agents.",
  },
  {
    title: "You control commercial access",
    body: "Real price, documents and communication open only to buyers you approve. Your company name stays protected by the platform.",
  },
  {
    title: "No hidden broker cut",
    body: "YORSO does not take a commission on contact and does not sit between you and the buyer after approval.",
  },
] as const;
