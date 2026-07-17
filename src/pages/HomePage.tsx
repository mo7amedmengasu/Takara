import {
  ArrowRight,
  Building2,
  Factory,
  Globe2,
  Hospital,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { SectionHeader } from "../components/common/SectionHeader";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import {
  companyIntroduction,
  featuredSolutions,
  homeHero,
  leadershipProfiles,
  services,
  supportedAudiences,
} from "../data/content";

const audienceIcons = [Hospital, Building2, Stethoscope, Pill, Users, Hospital, Factory, ShieldCheck, Users];

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-arc" aria-hidden="true" />
        <div className="hero-waves" aria-hidden="true" />
        <div className="hero-blossoms" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Abu Dhabi, United Arab Emirates</p>
            <h1>{homeHero.heading}</h1>
            <p>{homeHero.subheading}</p>
            <div className="hero-actions">
              <Button href="/medical-solutions">Explore Medical Solutions</Button>
              <Button href="/partners" variant="secondary">
                Partner With Us
              </Button>
              <Button href="/contact" variant="dark">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hero-brand-composition" aria-hidden="true">
            <div className="hero-seal">
              <img src="/brand/takara-haya-logo-circle.png" alt="" width="920" height="920" />
            </div>
          </div>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-grid">
          <ScrollReveal className="statement-block">
            <p className="eyebrow">UAE / GCC positioning</p>
            <h2>Connecting global medical innovation with dependable local healthcare support.</h2>
          </ScrollReveal>
          <ScrollReveal className="editorial-copy" delay={0.1}>
            <p>{companyIntroduction}</p>
            <div className="abstract-visual" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Representation, distribution, zoning, and market development." />
          <div className="card-grid four">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.04}>
                <Card icon={service.icon} title={service.title}>
                  <p>{service.description}</p>
                  {service.href ? (
                    <Link className="text-link" to={service.href}>
                      Learn more <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : null}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="container">
          <SectionHeader
            eyebrow="Who We Support"
            title="A connected healthcare ecosystem across the UAE and GCC."
            align="center"
          />
          <div className="ecosystem">
            <div className="ecosystem-core">
              <Globe2 size={32} aria-hidden="true" />
              <span>Takara Haya Medical</span>
            </div>
            {supportedAudiences.map((item, index) => {
              const Icon = audienceIcons[index] ?? Users;
              return (
                <article key={item} className={`ecosystem-node node-${index + 1}`}>
                  <Icon size={19} aria-hidden="true" />
                  <span>{item}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Featured Medical Solutions" title="Product categories for clinical readiness." />
          <div className="solution-grid">
            {featuredSolutions.map((solution, index) => (
              <ScrollReveal key={solution} delay={index * 0.03}>
                <article className="solution-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{solution}</h3>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section global-section">
        <div className="container global-grid">
          <ScrollReveal className="global-copy-panel">
            <SectionHeader
              eyebrow="International Partners Preview"
              title="Introducing selected international manufacturers to UAE and GCC healthcare markets."
              lead="Takara Haya Medical L.L.C. works with selected international manufacturers from Japan, Europe, and the United States to introduce high-quality medical and healthcare products to the UAE and GCC markets."
            />
            <Button href="/partners">Become a Partner</Button>
          </ScrollReveal>
          <div className="global-map" aria-label="Partnership regions: Japan, Europe, United States, UAE and GCC">
            <img className="earth-visual" src="/global_scale.jpeg" alt="" width="900" height="640" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <SectionHeader eyebrow="Leadership Preview" title="Experienced leadership for responsible market development." />
          <div className="leader-preview-scroll" aria-label="Leadership preview list">
            <div className="card-grid three">
              {leadershipProfiles.map((profile) => (
                <article className="leader-preview" key={profile.name}>
                  <img
                    className="profile-photo"
                    src={profile.image}
                    alt={`${profile.name}, ${profile.role}`}
                    width="184"
                    height="184"
                  />
                  <h3>{profile.name}</h3>
                  <p>{profile.role}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="center-action">
            <Button href="/leadership" variant="secondary">
              View Leadership
            </Button>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-inner">
          <h2>Looking for a trusted medical partner in the UAE?</h2>
          <p>
            Takara Haya Medical L.L.C. welcomes inquiries from healthcare providers, pharmacies, procurement teams, and
            international manufacturers seeking representation or distribution in the UAE and GCC.
          </p>
          <Button href="/contact" variant="dark">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
