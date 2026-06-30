import "./ComparePage.css";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
export default function ComparePage() {

  const navigate = useNavigate();
const [products, setProducts] = useState([]);

const [loading, setLoading] = useState(true);
  const [productOneId, setProductOneId] = useState("free");
  const [productTwoId, setProductTwoId] = useState("premier");
useEffect(() => {

  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(response.data);
if (response.data.length >= 2) {

  setProductOneId(response.data[0].id);

  setProductTwoId(response.data[1].id);

}
    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  fetchProducts();

}, []);
  const productOne =
  products.find(
    (item) => item.id === productOneId
  ) || {};

const productTwo =
  products.find(
    (item) => item.id === productTwoId
  ) || {};


const recommendedProduct =
  Number(productOne.price) <= Number(productTwo.price)
    ? productOne
    : productTwo;


  const rows = [
    {
      label: "Price",
      value: (product) => `CAD $${product.price}`,
    },
    {
      label: "Salary Income",
      key: "salaryIncome",
    },
    {
      label: "Investment Income",
      key: "investmentIncome",
    },
    {
      label: "Rental Income",
      key: "rentalIncome",
    },
    {
      label: "Medical Expenses",
      key: "medicalExpenses",
    },
    {
      label: "Business Expenses",
      key: "businessExpenses",
    },
    {
      label: "Expert Help",
      key: "expertHelp",
    },
    {
      label: "Corporate Filing",
      key: "corporateFiling",
    },
  ];
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

        <h2>Loading Products...</h2>

      </div>

      <Footer />

    </>

  );

}
if (!productOne.id || !productTwo.id) {

  return (

    <>

      <Navbar />

      <div
        style={{
          padding: "180px",
          textAlign: "center",
        }}
      >

        <h2>No Products Found</h2>

      </div>

      <Footer />

    </>

  );

}
  return (
    <>
      <Navbar />

      <section className="compare-page">

        <div className="container">

          <div className="compare-header">

            <span className="page-badge">
              Compare Products
            </span>

            <h1>Compare Tax Software</h1>

            <p>
              Select two products and compare their
              features, pricing and supported tax
              situations side by side.
            </p>

          </div>

          {/* Product Selection */}

          <div className="compare-selectors">

            <div>

              <label>Product 1</label>

              <select
                value={productOneId}
                onChange={(e) =>
                  setProductOneId(e.target.value)
                }
              >
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                  >
                    {product.name}
                  </option>
                ))}
              </select>

            </div>

            <div>

              <label>Product 2</label>

              <select
                value={productTwoId}
                onChange={(e) =>
                  setProductTwoId(e.target.value)
                }
              >
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                  >
                    {product.name}
                  </option>
                ))}
              </select>

            </div>

          </div>

          <div className="compare-actions">

            <button
              className="clear-btn"
             onClick={() => {

  if (products.length >= 2) {

    setProductOneId(products[0].id);

    setProductTwoId(products[1].id);

  }

}}
            >
              Reset Comparison
            </button>

          </div>

          {/* Summary Cards */}

          <div className="compare-summary">

            <div className="summary-card">

             {Number(productOne.price) <= Number(productTwo.price) && (
                <span className="winner">
                  ⭐ Best Value
                </span>
              )}

              <h2>{productOne?.name}</h2>

              <h3>CAD ${productOne?.price}</h3>

             <p>{productOne?.description}</p>

              <button
                className="summary-btn"
                onClick={() =>
                  navigate(`/products/${productOne.id}`)
                }
              >
                View Details
              </button>

            </div>

            <div className="summary-card">

              {Number(productTwo.price) < Number(productOne.price) && (
                <span className="winner">
                  ⭐ Best Value
                </span>
              )}

              <h2>{productTwo?.name}</h2>

              <h3>CAD ${productTwo?.price}</h3>

              <p>{productTwo?.description}</p>

              <button
                className="summary-btn"
                onClick={() =>
                  navigate(`/products/${productTwo.id}`)
                }
              >
                View Details
              </button>

            </div>

          </div>

          {/* Comparison Table */}

          <div className="compare-table">

            <table>

              <thead>

                <tr>

                  <th>Feature</th>

                  <th>{productOne.name}</th>

                  <th>{productTwo.name}</th>

                </tr>

              </thead>

              <tbody>

                {rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>

                    <td>

  {row.value
    ? row.value(productOne)
    : productOne[row.key]
    ? "✅"
    : "❌"}

</td>

                    <td>

  {row.value
    ? row.value(productTwo)
    : productTwo[row.key]
    ? "✅"
    : "❌"}

</td>

                  </tr>
                ))}
                              </tbody>

            </table>

          </div>

          {/* AI Recommendation */}

          <div className="compare-recommendation">

            <h2>🤖 AI Recommendation</h2>

            <p style={{fontWeight:"700",marginBottom:"15px"}}>
              Recommended: {recommendedProduct?.name} (Best Value)
            </p>

            <p>

              Still not sure which product is the best
              choice for your tax situation?

              Use our AI Recommendation Wizard and let
              TaxPilot AI analyze your income,
              deductions and filing requirements to
              recommend the most suitable product.

            </p>

            <button
              className="recommend-btn"
              onClick={() => navigate("/recommendation")}
            >
              Start AI Recommendation
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );

}