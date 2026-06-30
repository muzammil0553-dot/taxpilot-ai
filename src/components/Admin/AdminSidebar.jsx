import "./AdminSidebar.css";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <div className="admin-logo">
        <h2>⚙️ Admin</h2>
        <p>Product Configuration</p>
      </div>

      <nav className="admin-nav">

        <Link
          to="/admin/products"
          className="active"
        >
          📦 Products
        </Link>

      </nav>

    </aside>
  );
}