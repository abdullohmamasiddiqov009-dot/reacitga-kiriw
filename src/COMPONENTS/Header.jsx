import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">LOGO</h1>

          <ul className="nav-links">
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <h1>
              New <span>E-commerce App</span>
              <br />
              best for You
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
              vulputate vitae velit dictum cursus amet. Turpis donec ut velit
              quis.
            </p>

            <div className="buttons">
              <button>
                <img src="/playmarket.svg" alt="" />
              </button>
              <button>
                <img src="/applestore.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="phone small-phone">
              <h2>MOCKUP</h2>
            </div>

            <div className="phone big-phone">
              <h2>MOCKUP</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
