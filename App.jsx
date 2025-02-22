import React from 'react';
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AuctionHub</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#latest-auctions">Latest Auctions</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#why-choose-us">Why Choose Us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="cta-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Gateway to Exclusive Auctions</h1>
          <p>Discover rare items, bid, and win!</p>
          <button className="cta-button">Explore Auctions</button>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="featured-auctions" id="latest-auctions">
        <h2>Featured Auctions</h2>
        <div className="auction-list">
          <div className="auction-item">
            <img src="https://via.placeholder.com/150" alt="Auction Item" />
            <h3>Rare Painting</h3>
            <p>Current Bid: $500</p>
            <button className="btn-bid">Place a Bid</button>
          </div>
          <div className="auction-item">
            <img src="https://via.placeholder.com/150" alt="Auction Item" />
            <h3>Vintage Watch</h3>
            <p>Current Bid: $300</p>
            <button className="btn-bid">Place a Bid</button>
          </div>
        </div>
      </section>

      {/* Latest Bids */}
      <section className="latest-bids">
        <h2>Latest Bids</h2>
        <div className="bids-list">
          <div className="bid-item">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
            <p>John placed a bid on <strong>Rare Painting</strong> for $550</p>
          </div>
          <div className="bid-item">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
            <p>Jane placed a bid on <strong>Vintage Watch</strong> for $320</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us" id="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-item">
            <span>🔒</span>
            <h3>Secure Bidding Process</h3>
          </div>
          <div className="feature-item">
            <span>📦</span>
            <h3>Wide Range of Categories</h3>
          </div>
          <div className="feature-item">
            <span>🔔</span>
            <h3>Real-Time Notifications</h3>
          </div>
          <div className="feature-item">
            <span>💳</span>
            <h3>Easy Payment Options</h3>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src="https://via.placeholder.com/100" alt="Art" />
            <p>Art</p>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/100" alt="Jewelry" />
            <p>Jewelry</p>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/100" alt="Electronics" />
            <p>Electronics</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
            <p>"Amazing platform! I won a rare collectible."</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <div className="testimonial-item">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
            <p>"Easy to use and secure. Highly recommend!"</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-item">
            <span>1</span>
            <h3>Sign Up</h3>
          </div>
          <div className="step-item">
            <span>2</span>
            <h3>Browse Auctions</h3>
          </div>
          <div className="step-item">
            <span>3</span>
            <h3>Place a Bid</h3>
          </div>
          <div className="step-item">
            <span>4</span>
            <h3>Win & Pay</h3>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <h2>FAQ</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I place a bid?</h3>
            <p>Simply sign up, browse auctions, and click "Place a Bid."</p>
          </div>
          <div className="faq-item">
            <h3>Is my payment secure?</h3>
            <p>Yes, we use encrypted payment gateways for security.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="quick-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
        <p>© 2023 AuctionHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
