import "./HowItWorks.css";
import { FaSearch, FaBalanceScale, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="container">

        <div className="section-header">

          <h2>How TaxPilot Works</h2>

          <p>
            Find the right tax product in three simple steps.
          </p>

        </div>

        <div className="steps-grid">

          <div className="step-card">

            <div className="step-icon">
              <FaSearch />
            </div>

            <h3>Choose Your Situation</h3>

            <p>
              Tell us about your tax situation, whether you are salaried,
              self-employed, an investor, or a business owner.
            </p>

          </div>

          <div className="step-card">

            <div className="step-icon">
              <FaBalanceScale />
            </div>

            <h3>Compare Products</h3>

            <p>
              Compare TaxPilot products and explore the features included in
              each plan.
            </p>

          </div>

          <div className="step-card">

            <div className="step-icon">
              <FaCheckCircle />
            </div>

            <h3>Get Recommendation</h3>

            <p>
              Receive the best product recommendation and confidently prepare
              your taxes.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}