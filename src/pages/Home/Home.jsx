import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Features from "../../components/Features/Features";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import FAQ from "../../components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Products />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}