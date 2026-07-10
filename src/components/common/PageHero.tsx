import { Breadcrumbs } from "./Breadcrumbs";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="ornament ornament-left" aria-hidden="true" />
      <div className="container page-hero-inner">
        <Breadcrumbs current={title} />
        <p className="eyebrow">Takara Haya Medical L.L.C.</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
