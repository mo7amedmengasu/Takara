import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ComplianceQualityPage } from "./pages/ComplianceQualityPage";
import { ContactPage } from "./pages/ContactPage";
import { CriticalFacilitiesPage } from "./pages/CriticalFacilitiesPage";
import { HealthcareZoningPage } from "./pages/HealthcareZoningPage";
import { HomePage } from "./pages/HomePage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { MedicalSolutionsPage } from "./pages/MedicalSolutionsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PartnersPage } from "./pages/PartnersPage";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "leadership", element: <LeadershipPage /> },
      { path: "partners", element: <PartnersPage /> },
      { path: "medical-solutions", element: <MedicalSolutionsPage /> },
      { path: "healthcare-zoning", element: <HealthcareZoningPage /> },
      { path: "critical-facilities", element: <CriticalFacilitiesPage /> },
      { path: "compliance-quality", element: <ComplianceQualityPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
