import React from "react";

function Center() {
  return (
    <main className="main-container">
      <section className="services-section">
        <h2 className="section-title">
          What we do to help <br /> our customers in <br /> digital era.
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card1.svg" alt="" />
            </div>
            <h3>Receive</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card2.svg" alt="" />
            </div>
            <h3>Send</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card3.svg" alt="" />
            </div>
            <h3>Buy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card1.svg" alt="" />
            </div>
            <h3>Receive</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card2.svg" alt="" />
            </div>
            <h3>Send</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="service-card">
            <div className="card-icon-placeholder">
              <img src="/card3.svg" alt="" />
            </div>
            <h3>Buy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h3 className="section-subtitle">How it works</h3>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-icon">
              <img src="/person.svg" alt="" />
            </div>
            <h4>Create an account</h4>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="step-item">
            <div className="step-icon">
              <img src="/p2.svg" alt="" />
            </div>
            <h4>Get authorization</h4>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="step-item">
            <div className="step-icon">
              <img src="/p3.svg" alt="" />
            </div>
            <h4>Enjoy the app</h4>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-content">
          <div className="client-image-box">
            <div className="image-placeholder">
              <img src="/client.svg" alt="" />
            </div>
          </div>
          <div className="quote-box">
            <h3 className="section-subtitle-left">What our client say</h3>
            <span className="quote-mark">“</span>
            <p className="quote-text">
              Amet in elementum nulla scelerisque duis egestas at. Elit
              consectetur turpis elementum amet vitae et etiam nec. Varius
              volutpat hac adipiscing tincidunt pretium.
            </p>
            <h5 className="client-name">Angel Paulina</h5>
          </div>
        </div>
      </section>
      <section className="download-section">
        <div className="download-content">
          <div className="mockups-box">
            <div className="mockup phone-small">MOCKUP</div>
            <div className="mockup phone-main">MOCKUP</div>
            <div className="mockup phone-small">MOCKUP</div>
          </div>
          <div className="download-info">
            <h3>Download app to enjoy more!</h3>
            <p>
              Amet in elementum nulla scelerisque duis egestas at. Elit
              consectetur turpis elementum amet vitae et etiam nec. Varius
              volutpat hac adipiscing tincidunt pretium.
            </p>
            <div className="store-buttons">
              <button className="store-btn">
                <img src="/playmarket.svg" alt="" />
              </button>
              <button className="store-btn">
                <img src="/applestore.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Center;
