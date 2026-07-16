import { Card } from "../components/common/Card";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import { about, values } from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageHero title={about.pageHeading} subtitle={about.pageSubheading} />
      <section className="section">
        <div className="container editorial-grid">
          <ScrollReveal className="statement-block">
            <p className="eyebrow">About Takara Haya</p>
            <h2>A newly established UAE medical company with international manufacturer focus.</h2>
          </ScrollReveal>
          <ScrollReveal className="editorial-copy" delay={0.08}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>
      <section className="section section-warm split-statements">
        <div className="container statement-pair">
          <ScrollReveal className="large-statement">
            <span>01</span>
            <h2>Vision</h2>
            <p>{about.vision}</p>
          </ScrollReveal>
          <ScrollReveal className="large-statement" delay={0.08}>
            <span>02</span>
            <h2>Mission</h2>
            <p>{about.mission}</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="section">
        <div className="container narrow translucent-text-panel">
          <SectionHeader eyebrow="Our Purpose" title="Connecting global medical innovation with the UAE healthcare market." />
          <p className="lead-text">{about.purpose}</p>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="Our Values" title="Principles that shape every partnership." />
          <div className="card-grid three">
            {values.map((value) => (
              <Card key={value.title} icon={value.icon} title={value.title}>
                <p>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
