import React, { useState } from "react";
import "./ContactUs.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = () => {
    if (!email.endsWith("@gmail.com")) {
      setMessage("Please enter a valid Gmail address");
      setIsSuccess(false);
    } else {
      setMessage("Successfully subscribed!");
      setIsSuccess(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Special Offers</li>
            <li>About Us</li>
            <li>Cards</li>
            <li>Have a Place for Rent?</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>News</li>
            <li>Careers</li>
            <li>Customer Service</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Other</h4>
          <ul>
            <li>Online Market</li>
            <li>Our Stores</li>
            <li>Corporate Sales</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Subscribe hissəsi */}
        <div className="footer-subscribe">
          <h4>Subscribe for Updates</h4>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          {message && (
            <div className={isSuccess ? "subscribe-success" : "subscribe-error"}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-meta">
          <div className="icon-text">
            <span>© 2025 Azerbaijan Cafe.</span>
          </div>

          <div className="icon-text">
            <img src="/jis.png" alt="Lion" className="icon" />
            <span>Site by JIS</span>
          </div>

          <div className="icon-text">
            <img src="/global.png" alt="Globe" className="icon" />
            <span>Azərbaycan</span>
          </div>

          <div className="social-icons">
            <div className="social-item">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </div>
            <div className="social-item">
              <img src="/Instagram_icon.png" alt="Instagram" />
            </div>
            <div className="social-item">
              <img src="/telegram-2019.svg" alt="Telegram" />
            </div>
            <div className="social-item">
              <img src="/youtube_icon.png" alt="YouTube" />
            </div>
            <div className="social-item">
              <img src="/tiktok.webp" alt="TikTok" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
