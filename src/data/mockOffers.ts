/**
 * Anonymous live offers shown publicly on the homepage.
 *
 * Access model rules (locked plan v3):
 * - Supplier company name is NEVER stored or rendered. Only an anonymous label.
 * - Public view shows indicative price ranges and neutral volume language.
 * - Exact MOQ and exact price are never public.
 */

export type AnonymousOffer = {
  id: string;
  flag: string;
  country: string;
  /** Anonymous public label, e.g. "Verified Vietnamese pangasius producer". */
  anonymousLabel: string;
  /** Month + year of the most recent verification review. */
  verifiedSince: string;
  /** Year the supplier joined YORSO. */
  onPlatformSince: number;
  certifications: string[];
  exportMarkets: string[];
  product: string;
  spec: string;
  incoterm: string;
  /** Indicative price range, never an exact price. */
  priceRange: string;
  unit: string;
  /** Neutral volume language: container-scale, industrial volumes, LCL on request. */
  volume: string;
  updated: string;
};

export const LIVE_OFFERS: AnonymousOffer[] = [
  {
    id: "off-vn-pang-001",
    flag: "🇻🇳",
    country: "Vietnam",
    anonymousLabel: "Verified Vietnamese pangasius producer",
    verifiedSince: "Mar 2025",
    onPlatformSince: 2022,
    certifications: ["HACCP", "BRC AA", "ASC", "IFS"],
    exportMarkets: ["EU", "US", "JP", "KR"],
    product: "Pangasius fillets",
    spec: "IQF · 120–220 g",
    incoterm: "CFR",
    priceRange: "$2.10 – $2.40",
    unit: "/ kg",
    volume: "Container-scale · industrial volumes",
    updated: "12 Apr 2025",
  },
  {
    id: "off-no-sal-002",
    flag: "🇳🇴",
    country: "Norway",
    anonymousLabel: "Verified Norwegian Atlantic salmon producer",
    verifiedSince: "Feb 2025",
    onPlatformSince: 2021,
    certifications: ["HACCP", "BRC AA", "ASC", "MSC"],
    exportMarkets: ["EU", "US", "CN", "JP"],
    product: "Atlantic salmon HOG",
    spec: "Fresh · 4–5 kg · superior",
    incoterm: "FCA Oslo",
    priceRange: "€7.80 – €8.60",
    unit: "/ kg",
    volume: "Container-scale · weekly programs",
    updated: "15 Apr 2025",
  },
  {
    id: "off-ec-shr-003",
    flag: "🇪🇨",
    country: "Ecuador",
    anonymousLabel: "Verified Ecuadorian whiteleg shrimp producer",
    verifiedSince: "Jan 2025",
    onPlatformSince: 2020,
    certifications: ["HACCP", "BAP 4★", "ASC", "BRC A"],
    exportMarkets: ["EU", "US", "CN"],
    product: "Vannamei HLSO",
    spec: "Block frozen · 30/40 · 40/50",
    incoterm: "CFR",
    priceRange: "$5.20 – $6.10",
    unit: "/ kg",
    volume: "Container-scale · LCL on request",
    updated: "10 Apr 2025",
  },
  {
    id: "off-is-cod-004",
    flag: "🇮🇸",
    country: "Iceland",
    anonymousLabel: "Verified Icelandic cod producer",
    verifiedSince: "Mar 2025",
    onPlatformSince: 2019,
    certifications: ["HACCP", "MSC", "IFS"],
    exportMarkets: ["EU", "UK", "US"],
    product: "Atlantic cod loins",
    spec: "IQF · skinless boneless · 6–8 oz",
    incoterm: "CFR",
    priceRange: "€11.40 – €12.80",
    unit: "/ kg",
    volume: "Industrial volumes · year-round",
    updated: "14 Apr 2025",
  },
  {
    id: "off-pe-squ-005",
    flag: "🇵🇪",
    country: "Peru",
    anonymousLabel: "Verified Peruvian giant squid producer",
    verifiedSince: "Feb 2025",
    onPlatformSince: 2022,
    certifications: ["HACCP", "BRC A", "Friend of the Sea"],
    exportMarkets: ["EU", "CN", "KR"],
    product: "Giant squid tubes",
    spec: "IQF · U5 · U7 · cleaned",
    incoterm: "FOB Callao",
    priceRange: "$3.40 – $3.90",
    unit: "/ kg",
    volume: "Container-scale",
    updated: "11 Apr 2025",
  },
  {
    id: "off-ru-cra-006",
    flag: "🇷🇺",
    country: "Russia",
    anonymousLabel: "Verified Russian king crab producer",
    verifiedSince: "Jan 2025",
    onPlatformSince: 2021,
    certifications: ["HACCP", "MSC"],
    exportMarkets: ["CN", "KR", "JP"],
    product: "King crab clusters",
    spec: "Cooked · frozen · 1.4–1.8 kg",
    incoterm: "CFR",
    priceRange: "$28.50 – $32.00",
    unit: "/ kg",
    volume: "Industrial volumes · seasonal",
    updated: "09 Apr 2025",
  },
];
