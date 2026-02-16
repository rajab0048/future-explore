import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyKidsLoveIt from "./components/WhyKidsLoveIt";
import GetStartedSteps from "./components/GetStartedSteps";
import PricingSection from "./components/PricingSection";
import FamiliesCTA from "./components/FamiliesCTA";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] via-[#f4fbff] to-[#fff5ff] text-slate-900">
      <Navbar />
      <main className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16">
        <Hero />
        <WhyKidsLoveIt />
        <GetStartedSteps />
        <PricingSection />
        <FamiliesCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;