import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { GalaxyScanning } from "./components/GalaxyScanning";
import { ContractManufacturing } from "./components/ContractManufacturing";
import { CustomJewelry } from "./components/CustomJewelry";
import { GlobalConsultancy } from "./components/GlobalConsultancy";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans text-[#0a1628]">
      <Header />
      <main>
        <Hero />
        <About />
        <GalaxyScanning />
        <ContractManufacturing />
        <CustomJewelry />
        <GlobalConsultancy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
