/**
 * YORSO analytics shim. Replace with GA4/Segment/PostHog later.
 * Events spec: see homepage plan §12.
 */
export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

export function track(event: string, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line no-console
  console.debug("[analytics]", event, props);
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...props });
}
