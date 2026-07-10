import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "../components/common/Button";
import { PageHero } from "../components/common/PageHero";
import { ContactForm } from "../components/forms/ContactForm";
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
            <a href={`mailto:${company.email}`}>
              <Mail size={18} aria-hidden="true" />
              {company.email}
            </a>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {company.location}
            </p>
            <div className="quick-actions">
              {contact.actions.map((action) => (
                <Button key={action} href="/contact" variant="secondary">
                  {action}
                </Button>
              ))}
            </div>
          </aside>
          <div>
            <div className="dev-warning">
              <Send size={18} aria-hidden="true" />
              <p>
                The form is ready for a live endpoint through VITE_CONTACT_ENDPOINT and provides a mailto fallback when
                no endpoint is configured.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
