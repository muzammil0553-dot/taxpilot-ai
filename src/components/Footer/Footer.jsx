// ======================================================
// Footer
// ======================================================

import "./Footer.css";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-column">

            <h2 className="footer-logo">

              TaxPilot <span>AI</span>

            </h2>

            <p>
              AI-powered tax software recommendation platform
              designed to help users choose the right product
              based on their tax situation.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Compare</a>
            <a href="#">Recommendation</a>
            <a href="#">AI Assistant</a>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h3>Contact</h3>

            <div className="footer-contact">

              <FiMail />
              <span>support@taxpilotai.com</span>

            </div>

            <div className="footer-contact">

              <FiPhone />
              <span>+1 (555) 123-4567</span>

            </div>

            <div className="footer-contact">

              <FiMapPin />
              <span>Toronto, Canada</span>

            </div>

          </div>

          {/* Social */}

          <div className="footer-column">

            <h3>Follow Us</h3>

            <div className="footer-social">

              <a href="#"><FiGithub /></a>

              <a href="#"><FiLinkedin /></a>

              <a href="#"><FiTwitter /></a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 TaxPilot AI. All Rights Reserved.

          </p>

          <p>

            This application provides general product guidance only and
            does not constitute tax, legal, or financial advice.

          </p>

        </div>

      </div>

    </footer>
  );
}