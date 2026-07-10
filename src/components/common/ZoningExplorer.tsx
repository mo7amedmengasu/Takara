import { useState } from "react";
import { zoningAreas } from "../../data/content";

export function ZoningExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = zoningAreas[activeIndex];

  return (
    <section className="zoning-explorer" aria-labelledby="zoning-explorer-title">
      <div>
        <h2 id="zoning-explorer-title">Products by Zone</h2>
        <p className="sr-only">
          Select a healthcare zone to review the approved product groups recommended for that area.
        </p>
        <div className="facility-map" role="tablist" aria-label="Healthcare facility zones">
          {zoningAreas.map((area, index) => (
            <button
              key={area.title}
              className={`facility-zone ${area.className} ${activeIndex === index ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="zoning-products"
              onClick={() => setActiveIndex(index)}
            >
              <span>{area.title}</span>
            </button>
          ))}
        </div>
      </div>
      <aside id="zoning-products" className="zone-panel" role="tabpanel">
        <p className="eyebrow">Active zone</p>
        <h3>{active.title}</h3>
        <ul className="check-list">
          {active.products.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
