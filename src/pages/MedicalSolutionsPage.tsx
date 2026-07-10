import { useState } from "react";
import { Button } from "../components/common/Button";
import { PageHero } from "../components/common/PageHero";
import { SectionHeader } from "../components/common/SectionHeader";
import { productCategories } from "../data/content";

export function MedicalSolutionsPage() {
  const [active, setActive] = useState(productCategories[0].title);

  return (
    <>
      <PageHero
        title="Medical Solutions"
        subtitle="Healthcare products, medical consumables, PPE, hygiene solutions, and infection control products for healthcare providers in the UAE and GCC."
      />
      <section className="section">
        <div className="container narrow">
          <SectionHeader
            eyebrow="Medical Products & Solutions Introduction"
            title="Focused on quality, reliability, and suitability for healthcare environments."
          />
          <p className="lead-text">
            Takara Haya provides medical products and healthcare solutions through selected international manufacturers,
            focusing on quality, reliability, and suitability for healthcare environments in the UAE and GCC.
          </p>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container product-layout">
          <nav className="category-nav" aria-label="Product categories">
            {productCategories.map((category) => (
              <a
                key={category.title}
                href={`#${slug(category.title)}`}
                className={active === category.title ? "active" : undefined}
                onClick={() => setActive(category.title)}
              >
                {category.title}
              </a>
            ))}
          </nav>
          <div className="product-sections">
            {productCategories.map((category) => {
              const Icon = category.icon;
              return (
                <section id={slug(category.title)} className="product-category" key={category.title}>
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
                </section>
              );
            })}
          </div>
        </div>
      </section>
      <section className="closing-cta light">
        <div className="container closing-inner">
          <h2>Need product details or a quotation?</h2>
          <p>
            Contact Takara Haya Medical L.L.C. to request product catalogues, specifications, certificates, or quotation
            details.
          </p>
          <div className="hero-actions">
            <Button href="/contact">Request Product Catalogue</Button>
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

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
