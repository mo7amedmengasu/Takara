import { BriefcaseMedical, HeartPulse, ShieldCheck } from "lucide-react";
import { Card } from "../components/common/Card";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { criticalFacilities } from "../data/content";

export function CriticalFacilitiesPage() {
  return (
    <>
      <PageHero title="Critical Facilities Medical Support" subtitle={criticalFacilities.pageSubheading} />
      <section className="section section-warm">
        <div className="container editorial-grid">
          <div className="statement-block">
            <p className="eyebrow">Medical Support for Critical Facilities</p>
            <h2>Healthcare-related support for onsite readiness.</h2>
          </div>
          <div className="editorial-copy">
            <p>{criticalFacilities.support}</p>
            <div className="critical-visual" aria-hidden="true">
              <BriefcaseMedical />
              <HeartPulse />
              <ShieldCheck />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container dual-list-grid critical-list-grid">
          <div className="critical-list-panel">
            <SectionHeader eyebrow="Solutions Provided" title="Medical products and healthcare consumables only." />
            <ul className="check-list">
              {criticalFacilities.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="critical-list-panel">
            <SectionHeader eyebrow="Target Facilities" title="Facilities with onsite medical needs." />
            <ul className="check-list">
              {criticalFacilities.targets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <div className="card-grid three">
            <Card title="Onsite Clinics" icon={BriefcaseMedical}>
              <p>Focused on onsite clinic needs and facility healthcare teams.</p>
            </Card>
            <Card title="Staff Health" icon={HeartPulse}>
              <p>Focused on staff health, hygiene, first-aid products, and medical readiness.</p>
            </Card>
            <Card title="Hygiene and PPE" icon={ShieldCheck}>
              <p>Focused on hygiene, infection control, PPE, and emergency medical readiness supplies.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
