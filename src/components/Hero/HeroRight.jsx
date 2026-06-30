// ======================================================
// Hero Right Dashboard
// ======================================================

import {
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiDollarSign,
  FiCpu,
} from "react-icons/fi";

export default function HeroRight() {
  return (
    <div className="dashboard-card">

      {/* AI Badge */}
      <div className="dashboard-badge">
        <FiCpu />
        <span>AI Recommendation</span>
      </div>

      {/* Header */}
      <div className="dashboard-header">

        <div className="dashboard-info">
          <h4>Best Match</h4>
          <p>Based on your answers</p>
        </div>

        {/* Score Circle */}
        <div className="score-circle">
          <span>96%</span>
          <small>Match</small>
        </div>

      </div>

      {/* Product */}
      <div className="product-card">

        <h2>TurboTax Self-Employed</h2>

        <div className="price">

          <FiDollarSign />

          <strong>CAD $70</strong>

        </div>

      </div>

      {/* Progress */}
      <div className="progress-section">

        <div className="progress-top">
          <span>Recommendation Confidence</span>
          <strong>96%</strong>
        </div>

        <div className="progress-bar">

          <div className="progress-fill"></div>

        </div>

      </div>

      {/* Features */}

      <div className="feature-list">

        <div className="feature-item">
          <FiCheckCircle />
          <span>Freelance Income</span>
        </div>

        <div className="feature-item">
          <FiCheckCircle />
          <span>Home Office Expenses</span>
        </div>

        <div className="feature-item">
          <FiCheckCircle />
          <span>Business Expense Tracking</span>
        </div>

      </div>

      {/* Analytics */}

      <div className="analytics">

        <div className="analytics-box">

          <FiTrendingUp />

          <h3>128</h3>

          <p>Today's AI Checks</p>

        </div>

        <div className="analytics-box">

          <FiDollarSign />

          <h3>$1,240</h3>

          <p>Average Tax Saving</p>

        </div>

      </div>

      {/* Button */}

      <button className="dashboard-btn">

        View Recommendation

        <FiArrowRight />

      </button>

    </div>
  );
}