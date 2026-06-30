import { useNavigate } from "react-router-dom";
import "./Products.css";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const featuredProducts = [
  {
    id: "free",
    name: "Free",
    price: "CAD $0",
    badge: "Beginner",
    description: "Perfect for simple personal tax returns.",
    features: [
      "Salary Income",
      "Student Income",
      "Basic Tax Return",
    ],
  },
  {
    id: "premier",
    name: "Premier",
    price: "CAD $50",
    badge: "Popular",
    description: "Ideal for investments and rental income.",
    features: [
      "Investment Income",
      "Rental Income",
      "Capital Gains",
    ],
  },
  {
    id: "self-employed",
    name: "Self-Employed",
    price: "CAD $70",
    badge: "AI Choice",
    description: "Designed for freelancers and contractors.",
    features: [
      "Business Expenses",
      "Home Office",
      "Vehicle Expenses",
    ],
  },
];

export default function Products() {
    const navigate = useNavigate();
  return (
    <section className="featured-products">

      <div className="container">

        <div className="section-title">

          <span className="section-tag">
            Featured Products
          </span>

          <h2>
            Find Your Perfect Tax Software
          </h2>

          <p>
            Start with our three most popular products or explore
            the complete product catalogue.
          </p>

        </div>

        <div className="featured-grid">

          {featuredProducts.map((product) => (

            <div className="featured-card" key={product.id}>

              <div className="product-badge">
                {product.badge}
              </div>

              <h3>{product.name}</h3>

              <div className="product-price">
                {product.price}
              </div>

              <p>
                {product.description}
              </p>

              <ul>

                {product.features.map((feature) => (

                  <li key={feature}>

                    <FiCheckCircle />

                    {feature}

                  </li>

                ))}

              </ul>

              <button
  className="details-btn"
  onClick={() => navigate(`/products/${product.id}`)}
>
  View Details

  <FiArrowRight />
</button>

            </div>

          ))}

        </div>

        <div className="explore-area">

         <button
  className="explore-btn"
  onClick={() => navigate("/products")}
>

  Explore All Products

  <FiArrowRight />

</button>

        </div>

      </div>

    </section>
  );
}