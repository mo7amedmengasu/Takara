import { Button } from "../components/common/Button";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import { partnerRegions, partners } from "../data/content";

export function PartnersPage() {
  return (
    <>
      <PageHero title="Our International Partners" subtitle={partners.pageSubheading} />
      <section className="section">
        <div className="container narrow translucent-text-panel">
          <SectionHeader eyebrow="Partnership Overview" title="A UAE platform for selected international manufacturers." />
          <p className="lead-text">{partners.overview}</p>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="Our Role With Partners" title="A polished journey from representation to long-term development." />
          <ol className="journey-list">
            {partners.roles.map((role, index) => (
              <li key={role}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {role}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Partner Regions" title="Regional manufacturer pathways." />
          <div className="card-grid three region-grid">
            {partnerRegions.map((region, index) => (
              <ScrollReveal key={region.title} delay={index * 0.05}>
                <article className="region-card">
                  <span>{region.title.split(" ")[0]}</span>
                  <h3>{region.title}</h3>
                  <p>{region.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Message to International Manufacturers</p>
            <h2>Partner with Takara Haya</h2>
          </div>
          <div>
            {partners.manufacturerMessage.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Button href="/contact" variant="dark">
              Partner With Takara Haya
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
