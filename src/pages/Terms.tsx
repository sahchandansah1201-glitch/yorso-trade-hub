import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms — YORSO";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container-yorso py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="mt-8 font-display text-3xl font-semibold sm:text-4xl">Terms of service</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Final terms are being drafted with counsel. This page is a placeholder so the legal route
          is real, not a dead anchor. Reach out if you need an early copy for procurement review.
        </p>
      </div>
    </main>
  );
};

export default Terms;
