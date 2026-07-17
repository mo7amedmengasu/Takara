import { ArrowUp, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { company, footer } from "../../data/site";
import { navigationItems } from "../../data/navigation";

export function SiteFooter() {
  const solutionLinks = navigationItems.filter((item) => item.group === "solutions");
  const scrollPartnersToTop = () => {
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <footer className="site-footer">
      <div className="footer-arc" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/brand/takara-haya-logo-circle.png"
            alt="Takara Haya Medical L.L.C."
            width="150"
            height="150"
            loading="lazy"
          />
          <p>{footer.description}</p>
          <a href={`mailto:${company.email}`}>
            <Mail size={18} aria-hidden="true" />
            {company.email}
          </a>
        </div>
        <div>
          <h2>Quick Links</h2>
          <nav aria-label="Footer quick links">
            {footer.quickLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Medical Solutions</h2>
          <nav aria-label="Footer solution links">
            {solutionLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-cta">
          <h2>Become a Partner</h2>
          <p>Build long-term opportunities in hospitals, clinics, pharmacies, and healthcare organizations.</p>
          <Link className="btn btn-dark" to="/partners" onClick={scrollPartnersToTop}>
            Partner With Takara Haya
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{footer.copyright}</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={18} aria-hidden="true" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
