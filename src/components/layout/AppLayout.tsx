import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SiteHeader } from "../navigation/SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SEOHead } from "../common/SEOHead";

export function AppLayout() {
  const location = useLocation();
  const reduced = useReducedMotion();

  return (
    <>
      <SEOHead />
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
