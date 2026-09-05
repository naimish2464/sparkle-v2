import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const Expertise = lazy(() =>
  import("./components/Expertise").then((m) => ({ default: m.Expertise }))
);
const ColorScaleIntensity = lazy(() =>
  import("./components/ColorScaleIntensity").then((m) => ({
    default: m.ColorScaleIntensity,
  }))
);
const ContractManufacturing = lazy(() =>
  import("./components/ContractManufacturing").then((m) => ({
    default: m.ContractManufacturing,
  }))
);
const CustomJewelry = lazy(() =>
  import("./components/CustomJewelry").then((m) => ({
    default: m.CustomJewelry,
  }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return (
    <div
      className="w-full min-h-[40vh] bg-white"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans text-body-default">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-brand focus:rounded-md focus:shadow-lg focus:outline-2 focus:outline-brand"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Expertise />
          <ColorScaleIntensity />
          <ContractManufacturing />
          <CustomJewelry />
          <Footer />
        </Suspense>
      </main>
      <WhatsAppFloat />
    </div>
  );
}
