// Buyer outcomes section — hidden behind a flag until consented anonymized
// content exists in the format `role + region + measurable outcome`.
export const SHOW_BUYER_OUTCOMES = false;

export const BuyerOutcomes = () => {
  if (!SHOW_BUYER_OUTCOMES) return null;
  return (
    <section id="outcomes" className="bg-background py-16">
      <div className="container-yorso">
        {/* Content pending: anonymized role + region + measurable outcome */}
      </div>
    </section>
  );
};
