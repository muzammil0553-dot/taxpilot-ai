// ======================================================
// Hero Section
// ======================================================

import "./Hero.css";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background Glow */}
      <div className="hero-bg hero-bg-1"></div>
      <div className="hero-bg hero-bg-2"></div>

      {/* Main Container */}
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-left">
          <HeroLeft />
        </div>

        {/* Right Dashboard */}
        <div className="hero-right">
          <HeroRight />
        </div>

      </div>

    </section>
  );
}