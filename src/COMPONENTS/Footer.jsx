import React from "react";

function footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <h2 className="footer-logo">LOGO</h2>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Others</h4>
            <ul>
              <li>
                <a href="#">User FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#">Send</a>
              </li>
              <li>
                <a href="#">Receive</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <p>
            Subscribe to our newsletter and be the first to know about our
            updates
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">Copyright © 2020. All rights reserved.</div>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src="/icon.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
