// ======================================================
// Stats Section
// ======================================================

import "./Stats.css";

import {
  FiUsers,
  FiCpu,
  FiPackage,
  FiZap,
} from "react-icons/fi";

export default function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {/* Card 1 */}
          <div className="stat-card">

            <div className="stat-icon blue">
              <FiUsers />
            </div>

            <h2>10,000+</h2>

            <h4>Happy Users</h4>

            <p>
              Thousands of Canadians trust
              TaxPilot AI every tax season.
            </p>

          </div>

          {/* Card 2 */}
          <div className="stat-card">

            <div className="stat-icon purple">
              <FiCpu />
            </div>

            <h2>AI Powered</h2>

            <h4>Smart Recommendation</h4>

            <p>
              AI analyzes your answers
              and recommends the best product.
            </p>

          </div>

          {/* Card 3 */}
          <div className="stat-card">

            <div className="stat-icon green">
              <FiPackage />
            </div>

            <h2>8 Products</h2>

            <h4>Compare Solutions</h4>

            <p>
              Compare Canada's leading
              tax software in one place.
            </p>

          </div>

          {/* Card 4 */}
          <div className="stat-card">

            <div className="stat-icon orange">
              <FiZap />
            </div>

            <h2>1 Minute</h2>

            <h4>Fast Results</h4>

            <p>
              Receive your AI recommendation
              in under sixty seconds.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}