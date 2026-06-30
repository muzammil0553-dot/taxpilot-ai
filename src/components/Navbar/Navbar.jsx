// ======================================================
// Premium Navbar
// ======================================================

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiCpu,
} from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  // ==========================
  // Mobile Menu State
  // ==========================
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
  // ==========================
  // Navigation Items
  // ==========================
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Compare",
      path: "/compare",
    },
    {
      title: "Recommendation",
      path: "/recommendation",
    },
    {
      title: "AI Assistant",
      path: "/assistant",
    },
  ];

  return (
    <header className="header">

        <nav className="navbar">

          {/* ==========================
              Logo
          ========================== */}

          <Link to="/" className="logo">

            <div className="logo-icon">
              <FiCpu />
            </div>

            <div className="logo-text">

              <span className="logo-title">
                TaxPilot
              </span>

              <span className="logo-highlight">
                AI
              </span>

            </div>

          </Link>

          {/* ==========================
              Desktop Menu
          ========================== */}

          <ul className="nav-menu">

            {menuItems.map((item) => (

              <li key={item.title}>

                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {item.title}
                </NavLink>

              </li>

            ))}

          </ul>

          {/* ==========================
              Right Button
          ========================== */}

          <button
    className="nav-btn"
    onClick={() => navigate("/recommendation")}
>

    Find My Product

    <FiArrowRight />

</button>

          {/* ==========================
              Mobile Button
          ========================== */}

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FiX /> : <FiMenu />}

          </button>

        </nav>

        {/* ==========================
            Mobile Menu
        ========================== */}

        <div
          className={
            menuOpen
              ? "mobile-menu show"
              : "mobile-menu"
          }
        >

          {menuItems.map((item) => (

            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >

              {item.title}

            </NavLink>

          ))}

          <button className="mobile-btn">

            Get Started

            <FiArrowRight />

          </button>

        </div>

    </header>
  );
}