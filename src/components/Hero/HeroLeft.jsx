// ======================================================
// Hero Left
// ======================================================

import {
  FiArrowRight,
  FiShield,
  FiUsers,
  FiCpu,
} from "react-icons/fi";

export default function HeroLeft() {
  return (
    <>

      {/* AI Badge */}

      <div className="hero-badge">

       <FiCpu />

        <span>AI Powered Recommendation Platform</span>

      </div>

      {/* Main Heading */}

      <h1 className="hero-title">

        Find the Right

        <br />

        <span>Tax Software</span>

        <br />

        with Artificial Intelligence

      </h1>

      {/* Description */}

      <p className="hero-description">

        Answer a few simple questions and receive an
        intelligent recommendation based on your tax
        situation in less than one minute.

      </p>

      {/* Buttons */}

      <div className="hero-buttons">

        <button className="btn-primary">

          Get Started

          <FiArrowRight />

        </button>

        <button className="btn-secondary">

          Compare Products

        </button>

      </div>

      {/* Trust Row */}

      <div className="trust-row">

        <div className="trust-item">

          <FiShield />

          <span>100% Secure</span>

        </div>

        <div className="trust-item">

          <FiUsers />

          <span>10,000+ Users</span>

        </div>

        <div className="trust-item">

          <FiCpu />

          <span>AI Powered</span>

        </div>

      </div>

    </>
  );
}