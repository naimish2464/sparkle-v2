import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { GalaxyScanning } from "./components/GalaxyScanning";
import { ContractManufacturing } from "./components/ContractManufacturing";
import { CustomJewelry } from "./components/CustomJewelry";
import { GlobalConsultancy } from "./components/GlobalConsultancy";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

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
        <About />
        <GalaxyScanning />
        <ContractManufacturing />
        <CustomJewelry />
        <GlobalConsultancy />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
