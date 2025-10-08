import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Ads from "@/components/ads";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="place-self-center max-w-[1900px] ">
      <Header />
      <HeroSection />
      <About />
      <Pricing />
      <Testimonials />
      <Ads />
      <Contact />
      <Footer />
    </div>
  );
}
