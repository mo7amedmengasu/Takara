import { Button } from "../components/common/Button";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { diagnosticImagingCategories } from "../data/content";

export function NuclearMedicineImagingPage() {
  return (
    <>
      <PageHero
        title="Nuclear Medicine & Advanced Diagnostic Imaging Equipment"
        subtitle="Advanced diagnostic imaging, nuclear medicine, molecular imaging, and related technical support solutions for healthcare providers."
      />
      <section className="section">
        <div className="container narrow translucent-text-panel">
          <SectionHeader
            eyebrow="Advanced Imaging Solutions"
            title="Supporting clinical diagnosis through trusted imaging and nuclear medicine technologies."
          />
          <p className="lead-text">
            Takara Haya supports healthcare providers with selected diagnostic imaging equipment, nuclear medicine
            technologies, accessories, consumables, installation coordination, training, and technical support.
          </p>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container">
          <div className="medical-solution-grid">
            {diagnosticImagingCategories.map((category) => {
              const Icon = category.icon;
              return (
                <article className="medical-solution-card" key={category.title}>
                  <img src={category.image} alt={`${category.title} illustration`} loading="lazy" />
                  <div className="medical-solution-body">
                    <div className="category-title">
                      <span className="card-icon" aria-hidden="true">
                        <Icon size={22} />
                      </span>
                      <h2>{category.title}</h2>
                    </div>
                    <ul className="check-list">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="closing-cta light">
        <div className="container closing-inner">
          <h2>Need imaging equipment details?</h2>
          <p>
            Contact Takara Haya Medical L.L.C. to discuss diagnostic imaging equipment, nuclear medicine solutions,
            accessories, consumables, installation, training, or technical support.
          </p>
          <div className="hero-actions">
            <Button href="/contact">Request Equipment Details</Button>
            <Button href="/contact" variant="secondary">
              Ask for a Quotation
            </Button>
            <Button href="/contact" variant="dark">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
