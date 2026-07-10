import { Card } from "../components/common/Card";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { ZoningExplorer } from "../components/common/ZoningExplorer";
import { zoning, zoningAreas } from "../data/content";
import { Layers3 } from "lucide-react";

export function HealthcareZoningPage() {
  return (
    <>
      <PageHero
        title="Healthcare Zoning Solutions"
        subtitle="A structured approach to placing the right medical, hygiene, PPE, and infection control products in the right healthcare areas."
      />
      <section className="section">
        <div className="container editorial-grid">
          <div className="statement-block">
            <p className="eyebrow">Healthcare Zoning Introduction</p>
            <h2>Takara Haya is a solution provider, not only a product supplier.</h2>
          </div>
          <div className="editorial-copy">
            <p>{zoning.intro}</p>
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container narrow">
          <SectionHeader eyebrow="What Is Healthcare Zoning?" title="A complete product placement concept." />
          <p className="lead-text">{zoning.definition}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Zoning Areas" title="Clinical areas supported by the zoning concept." />
          <div className="card-grid three">
            {zoningAreas.map((area) => (
              <Card key={area.title} title={area.title} icon={Layers3}>
                <p>{area.products.slice(0, 3).join(", ")}.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <ZoningExplorer />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Benefits of Healthcare Zoning" title="A clearer medical product supply plan." />
          <div className="benefit-grid">
            {zoning.benefits.map((benefit) => (
              <article key={benefit}>
                <span aria-hidden="true" />
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
