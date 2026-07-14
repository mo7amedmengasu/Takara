import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { PageHero } from "../components/common/PageHero";
import { company } from "../data/site";
import { contact } from "../data/content";

export function ContactPage() {
  return (
    <>
      <PageHero title="Contact Takara Haya" subtitle={contact.pageSubheading} />
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-panel">
            <p className="eyebrow">Contact Details</p>
            <h2>{company.name}</h2>
            <a className="contact-email" href={`mailto:${company.email}`}>
              <Mail size={18} aria-hidden="true" />
              {company.email}
            </a>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {company.location}
            </p>
          </aside>
          <section className="contact-inquiry-panel" aria-labelledby="contact-inquiries-title">
            <p className="eyebrow">Send Us an Email About</p>
            <h2 id="contact-inquiries-title">How we can help</h2>
            <p>
              Please email Takara Haya Medical L.L.C. with a clear subject line and any relevant product, partnership,
              or organization details. The team can review inquiries related to:
            </p>
            <ul className="contact-inquiry-list">
              {contact.inquiryOptions.map((option) => (
                <li key={option}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
