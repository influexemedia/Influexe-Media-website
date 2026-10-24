import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Results from "@/components/landing/Results";
import Pricing from "@/components/landing/Pricing";
import Faq from "@/components/landing/Faq";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Results />
      <Pricing />
      <Faq />
      <Contact />
    </main>
  );
}
