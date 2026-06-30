// ======================================================
// Features Section
// ======================================================

import "./Features.css";

import {
  FiCpu,
  FiBarChart2,
  FiShield,
  FiClock,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCpu />,
    title: "AI Recommendation",
    desc: "Get the best tax software recommendation using AI."
  },
  {
    icon: <FiBarChart2 />,
    title: "Compare Products",
    desc: "Compare top Canadian tax software side by side."
  },
  {
    icon: <FiDollarSign />,
    title: "Save Money",
    desc: "Choose the software that maximizes your tax savings."
  },
  {
    icon: <FiShield />,
    title: "100% Secure",
    desc: "Your tax information stays private and protected."
  },
  {
    icon: <FiClock />,
    title: "Fast Results",
    desc: "Receive your recommendation in under one minute."
  },
  {
    icon: <FiTrendingUp />,
    title: "Smart Insights",
    desc: "AI analyzes your answers and provides clear guidance."
  }
];

export default function Features() {
  return (
    <section className="features">

      <div className="container">

        <div className="section-title">

          <h2>Why Choose TaxPilot AI?</h2>

          <p>
            Everything you need to find the perfect tax software
            with the help of Artificial Intelligence.
          </p>

        </div>

        <div className="features-grid">

          {features.map((item, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}