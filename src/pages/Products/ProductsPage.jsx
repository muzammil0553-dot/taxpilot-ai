import "./ProductsPage.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await axios.get(
          "https://taxpilot-ai-production.up.railway.app"
        );

        setProducts(response.data);

      } catch (error) {

        console.error("Error loading products:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container">

          <div className="products-header">

            <span className="page-badge">
              Tax Software Products
            </span>

            <h1>
              Find the Perfect <span>Tax Solution</span>
            </h1>

            <p>
              Browse all available tax software products and
              choose the one that best matches your tax situation.
            </p>

          </div>

          <div className="products-toolbar">

            <input
              type="text"
              placeholder="Search products..."
            />

            <select>
              <option>All Products</option>
              <option>Personal</option>
              <option>Business</option>
            </select>

            <select>
              <option>Sort By</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
            </select>

          </div>

          <div className="products-grid">

            {loading ? (

              <h2>Loading Products...</h2>

            ) : (

              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))

            )}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}