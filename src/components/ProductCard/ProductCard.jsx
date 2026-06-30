// ======================================================
// Product Card
// ======================================================
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

import {
  FiCheckCircle,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

import { MdCompareArrows } from "react-icons/md";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-card">

      {/* AI Badge */}

      <div className="ai-badge">

        AI Recommended

      </div>

      {/* Product Name */}

      <h2>{product.name}</h2>

      {/* Price */}

      <div className="product-price">

        CAD ${product.price}

      </div>

      {/* Rating */}

      <div className="rating">

        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />

      </div>

      {/* Description */}

      <p>

        {product.description}

      </p>

      {/* Best For */}

      <div className="best-for">

  <h4>Features</h4>

  <ul>

    {product.salaryIncome && (
      <li>
        <FiCheckCircle />
        Salary Income
      </li>
    )}

    {product.investmentIncome && (
      <li>
        <FiCheckCircle />
        Investment Income
      </li>
    )}

    {product.rentalIncome && (
      <li>
        <FiCheckCircle />
        Rental Income
      </li>
    )}

    {product.medicalExpenses && (
      <li>
        <FiCheckCircle />
        Medical Expenses
      </li>
    )}

    {product.businessExpenses && (
      <li>
        <FiCheckCircle />
        Business Expenses
      </li>
    )}

    {product.expertHelp && (
      <li>
        <FiCheckCircle />
        Expert Help
      </li>
    )}

    {product.corporateFiling && (
      <li>
        <FiCheckCircle />
        Corporate Filing
      </li>
    )}

  </ul>

</div>

      {/* Buttons */}

      <div className="card-buttons">

       <button
  className="details-btn"
  onClick={() => navigate(`/products/${product.id}`)}
>
  View Details

  <FiArrowRight />
</button>

        <button
  className="compare-btn"
  onClick={() => navigate("/compare")}
>
  <MdCompareArrows />
  Compare
</button>

      </div>

    </div>
  );
}