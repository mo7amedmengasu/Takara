import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../../data/site";
import { getPageMeta } from "../../utils/routes";

export function SEOHead() {
  const { pathname } = useLocation();
  const meta = getPageMeta(pathname);

  useEffect(() => {
    document.title = meta.title;
    upsertMeta("description", meta.description);
    upsertMeta("og:title", meta.title, "property");
    upsertMeta("og:description", meta.description, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:image", "/og.png", "property");
    upsertMeta("twitter:card", "summary_large_image");

    upsertLink("canonical", `${window.location.origin}${pathname}`);
    upsertJsonLd("organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      email: company.email,
      logo: `${window.location.origin}${company.logo}`,
      address: {
        "@type": "PostalAddress",
        addressCountry: "United Arab Emirates",
      },
    });

    if (pathname !== "/") {
      upsertJsonLd("breadcrumb-schema", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
          { "@type": "ListItem", position: 2, name: meta.title.split("|")[0].trim(), item: window.location.href },
        ],
      });
    }
  }, [meta.description, meta.title, pathname]);

  return null;
}

function upsertMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}
