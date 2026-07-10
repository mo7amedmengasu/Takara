import { ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { Card } from "../components/common/Card";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { compliance } from "../data/content";

export function ComplianceQualityPage() {
  return (
    <>
      <PageHero title="Compliance & Quality" subtitle={compliance.pageSubheading} />
      <section className="section">
        <div className="container document-flow">
          <Card title="Quality Commitment" icon={ShieldCheck}>
            <p>{compliance.quality}</p>
          </Card>
          <Card title="Why Documentation Matters" icon={FileCheck2}>
            <p>{compliance.documentation}</p>
          </Card>
          <Card title="Quality Statement" icon={ClipboardCheck}>
            <p>{compliance.statement}</p>
          </Card>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="Documentation Process" title="Manufacturer information, product records, and client review support." />
          <div className="journey-list compact">
            {[
              "Manufacturer documentation",
              "Product information coordination",
              "Technical specifications",
              "Compliance records",
              "Healthcare evaluation support",
            ].map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
