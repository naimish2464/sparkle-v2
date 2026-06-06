import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Manufacturing } from "./components/Manufacturing";
import { CustomJewelry } from "./components/CustomJewelry";
import { ScanningTech } from "./components/ScanningTech";
import { GlobalConsultancy } from "./components/GlobalConsultancy";
import { GlobalPresence } from "./components/GlobalPresence";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Manufacturing /> */}
      {/* <CustomJewelry /> */}
      {/* <ScanningTech /> */}
      <GlobalConsultancy />
      {/* <GlobalPresence /> */}
      {/* <WhyChooseUs /> */}
      <Contact />
      <Footer />
    </div>
  );
}
