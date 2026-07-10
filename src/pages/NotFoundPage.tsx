import { Button } from "../components/common/Button";

export function NotFoundPage() {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow">Page not found</p>
        <h1>This page is not available.</h1>
        <p>Return to Takara Haya Medical L.L.C. home.</p>
        <Button href="/">Go Home</Button>
      </div>
    </section>
  );
}
