import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigation";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [menuOpen]);

  const visibleLinks = navigationItems.filter((item) => item.group !== "solutions");
  const solutionLinks = navigationItems.filter((item) => item.group === "solutions");

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-solid" : ""}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="container header-inner">
          <Link className="brand-link" to="/" aria-label="Takara Haya Medical home">
            <img src="/brand/takara-haya-logo-circle.png" alt="Takara Haya Medical L.L.C." width="90" height="90" />
            <span>
              <strong>Takara Haya</strong>
              <small>Medical L.L.C.</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {visibleLinks.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {item.label}
              </NavLink>
            ))}
            <div className="nav-dropdown">
              <button type="button">
                Solutions <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div className="nav-dropdown-menu">
                {solutionLinks.map((item) => (
                  <NavLink key={item.path} to={item.path}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={24} />
            <span>Menu</span>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-shell is-open">
          <button className="mobile-scrim" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu" />
          <div className="mobile-panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="mobile-panel-top">
              <span>Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav aria-label="Mobile primary navigation">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
