import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy — YORSO";
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
        <h1 className="mt-8 font-display text-3xl font-semibold sm:text-4xl">Privacy</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Final privacy notice is being drafted with counsel. Identity protection on both sides is
          a core platform commitment, not a marketing claim.
        </p>
      </div>
    </main>
  );
};

export default Privacy;
