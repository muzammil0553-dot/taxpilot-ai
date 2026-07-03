import "./AdminProducts.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/Admin/AdminSidebar";

export default function AdminProducts() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {

      const res = await axios.get(
  "https://taxpilot-ai-production.up.railway.app/api/products"
);

      setProducts(res.data);
      if (res.data.length > 0) {
  setSelectedProduct(res.data[0]);
}

    } catch (err) {

      console.error(err);

    }
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const exportJSON = () => {

    const blob = new Blob(
      [JSON.stringify(products, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "products.json";

    a.click();

    URL.revokeObjectURL(url);

  };

 const validProducts = products.filter(
    p =>
        p.id &&
        p.name &&
        p.price
).length;

  const missingProducts =
    products.length - validProducts;

  const averagePrice =
    products.length > 0
      ? (
          products.reduce(
            (sum, p) => sum + Number(p.price),
            0
          ) / products.length
        ).toFixed(0)
      : 0;

  return (

    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">

        <h1>Product Configuration</h1>

        <p>
          Manage and review TaxPilot product configuration.
        </p>

        <div className="admin-stats">

          <div className="stat-card">

            <h3>Total Products</h3>

            <h1>{products.length}</h1>

          </div>

          <div className="stat-card success">

            <h3>Valid Products</h3>

            <h1>{validProducts}</h1>

          </div>

          <div className="stat-card warning">

            <h3>Missing Fields</h3>

            <h1>{missingProducts}</h1>

          </div>

          <div className="stat-card purple">

            <h3>Average Price</h3>

            <h1>CAD {averagePrice}</h1>

          </div>

        </div>

        <div className="admin-toolbar">

          <div className="search-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <button
            className="export-btn"
            onClick={exportJSON}
          >
            📄 Export JSON
          </button>

        </div>

        {/* PART 2 STARTS HERE */}
<div className="admin-main">

  {/* Products Table */}

  <div className="admin-table-card">

    <table className="admin-table">

      <thead>

        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
           <th>Best For</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        {filteredProducts.length === 0 ? (

          <tr>

            <td
              colSpan="5"
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              No Products Found
            </td>

          </tr>

        ) : (

          filteredProducts.map((product) => {

           const valid =
  product.id &&
  product.name &&
  product.price;

            return (

              <tr
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={
                  selectedProduct?.id === product.id
                    ? "selected-row"
                    : ""
                }
              >

                <td>{product.id}</td>

                <td>

                  <div className="product-name">
                    📦 {product.name}
                  </div>

                </td>

                <td>

                  <span className="price-badge">
                    CAD ${product.price}
                  </span>

                </td>

               <td>

<span className="bestfor-badge">

{product.id==="free"
? "Salary"
:product.id==="deluxe"
? "Family"
:product.id==="premier"
? "Investor"
:product.id==="business"
? "Business"
:product.id==="self-employed"
? "Self-Employed"
:"General"}

</span>

</td>

                <td>

                  {valid ? (

                    <span className="status-valid">
                      ✅ Valid
                    </span>

                  ) : (

                    <span className="status-invalid">
                      ⚠ Missing
                    </span>

                  )}

                </td>

              </tr>

            );

          })

        )}

      </tbody>

    </table>

  </div>

  {/* Product Details */}

  <div className="admin-details-card">

    {selectedProduct ? (

      <>

        <h2>{selectedProduct.name}</h2>

        <div className="detail-item">
          <strong>ID</strong>
          <span>{selectedProduct.id}</span>
        </div>

        <div className="detail-item">
          <strong>Price</strong>
          <span>CAD ${selectedProduct.price}</span>
        </div>

       <div className="detail-item">
  <strong>Best For</strong>

  <span>
    {selectedProduct.id === "free"
      ? "Salary Employees"
      : selectedProduct.id === "deluxe"
      ? "Families & Individuals"
      : selectedProduct.id === "premier"
      ? "Investors & Rental Owners"
      : selectedProduct.id === "business"
      ? "Business Owners"
      : selectedProduct.id === "self-employed"
      ? "Self-Employed Professionals"
      : "General Users"}
  </span>
</div>
<h3>Supported Features</h3>

<div className="feature-list">

  {selectedProduct.salaryIncome && (
    <span className="supported">✅ Salary Income</span>
  )}

  {selectedProduct.investmentIncome && (
    <span className="supported">✅ Investment Income</span>
  )}

  {selectedProduct.rentalIncome && (
    <span className="supported">✅ Rental Income</span>
  )}

  {selectedProduct.medicalExpenses && (
    <span className="supported">✅ Medical Expenses</span>
  )}

  {selectedProduct.businessExpenses && (
    <span className="supported">✅ Business Expenses</span>
  )}

  {selectedProduct.expertHelp && (
    <span className="supported">✅ Expert Help</span>
  )}

  {selectedProduct.corporateFiling && (
    <span className="supported">✅ Corporate Filing</span>
  )}

</div>
<h3>Unsupported Features</h3>

<div className="feature-list">

  {!selectedProduct.salaryIncome &&
   !selectedProduct.investmentIncome &&
   !selectedProduct.rentalIncome &&
   !selectedProduct.medicalExpenses &&
   !selectedProduct.businessExpenses &&
   !selectedProduct.expertHelp &&
   !selectedProduct.corporateFiling ? (

    <span className="unsupported">
      🎉 No Unsupported Features
    </span>

  ) : (

    <>

      {!selectedProduct.salaryIncome && (
        <span className="unsupported">❌ Salary Income</span>
      )}

      {!selectedProduct.investmentIncome && (
        <span className="unsupported">❌ Investment Income</span>
      )}

      {!selectedProduct.rentalIncome && (
        <span className="unsupported">❌ Rental Income</span>
      )}

      {!selectedProduct.medicalExpenses && (
        <span className="unsupported">❌ Medical Expenses</span>
      )}

      {!selectedProduct.businessExpenses && (
        <span className="unsupported">❌ Business Expenses</span>
      )}

      {!selectedProduct.expertHelp && (
        <span className="unsupported">❌ Expert Help</span>
      )}

      {!selectedProduct.corporateFiling && (
        <span className="unsupported">❌ Corporate Filing</span>
      )}

    </>

  )}

</div>
        <hr />

        <h3>Schema Validation</h3>

        <ul className="validation-list">

          <li>
            {selectedProduct.id ? "✅" : "❌"} Product ID
          </li>

          <li>
            {selectedProduct.name ? "✅" : "❌"} Product Name
          </li>

          <li>
            {selectedProduct.price ? "✅" : "❌"} Price
          </li>

          <li>✅ Best For</li>

        </ul>

      </>

    ) : (

      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        Select a product to view details.
      </div>

    )}

  </div>

</div>
      </div>

    </div>

  );

}