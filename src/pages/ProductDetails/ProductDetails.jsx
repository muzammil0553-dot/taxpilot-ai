import "./ProductDetails.css";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FiCheckCircle,
  FiArrowRight,
  FiDollarSign,
  FiStar,
} from "react-icons/fi";
export default function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

       const response = await axios.get(
  `https://taxpilot-ai-production.up.railway.app/api/products/${id}`
);

        setProduct(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchProduct();

  }, [id]);

  if (loading) {

    return (

      <>

        <Navbar />

        <div
          style={{
            padding: "180px",
            textAlign: "center",
          }}
        >

          <h2>Loading Product...</h2>

        </div>

        <Footer />

      </>

    );

  }

  if (!product) {

    return (

      <>

        <Navbar />

        <div
          style={{
            padding: "180px",
            textAlign: "center",
          }}
        >

          <h2>Product Not Found</h2>

        </div>

        <Footer />

      </>

    );

  }

  return (

    <>

      <Navbar />

      <section className="product-details">

        <div className="container">

          <div className="details-grid">

            {/* Left Side */}

            <div className="details-left">

              <span className="product-tag">

                AI Recommended

              </span>

              <h1>

                {product.name}

              </h1>

              <div className="price">

                <FiDollarSign />

                CAD ${product.price}

              </div>

              <div className="rating">

                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />

              </div>

              <p>

                {product.description}

              </p>

              <button
                className="primary-btn"
                onClick={() => navigate("/recommendation")}
              >

                Get Recommendation

                <FiArrowRight />

              </button>

            </div>
                        {/* Right Side */}

            <div className="details-right">

              {/* Best For */}

              <div className="feature-box">

                <h3>Best For</h3>

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

              {/* Supported Features */}

              <div className="feature-box">

                <h3>Supported Features</h3>

                <ul>

                  {product.salaryIncome && (
                    <li>
                      <FiCheckCircle />
                      Salary Income Support
                    </li>
                  )}

                  {product.investmentIncome && (
                    <li>
                      <FiCheckCircle />
                      Investment Income Support
                    </li>
                  )}

                  {product.rentalIncome && (
                    <li>
                      <FiCheckCircle />
                      Rental Income Support
                    </li>
                  )}

                  {product.medicalExpenses && (
                    <li>
                      <FiCheckCircle />
                      Medical Expense Claims
                    </li>
                  )}

                  {product.businessExpenses && (
                    <li>
                      <FiCheckCircle />
                      Business Expense Claims
                    </li>
                  )}

                  {product.expertHelp && (
                    <li>
                      <FiCheckCircle />
                      Expert Review Available
                    </li>
                  )}

                  {product.corporateFiling && (
                    <li>
                      <FiCheckCircle />
                      Corporate Tax Filing
                    </li>
                  )}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}