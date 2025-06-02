import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Hero bölməsi */}
      <div className="hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1>Elegant & Premium Makeup</h1>
          <p>Discover the finest beauty products to enhance your natural glow.</p>
          <button onClick={() => navigate('/menu')}>SHOP NOW</button>

          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="Instagram_icon.png" alt="Instagram" className="social-icon" />
              Instagram
            </a>
            <a href="https://telegram.com" target="_blank" rel="noreferrer">
              <img src="telegram-2019.svg" alt="Telegram" className="social-icon" />
              Telegram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src="youtube_icon.png" alt="YouTube" className="social-icon" />
              YouTube
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src="makeup.png" alt="Makeup Product" />
        </motion.div>
      </div>

      {/* About Us Bölməsi */}
      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <AboutUs />
      </motion.div>

      {/* Menu Bölməsi */}
      <motion.div
        id="menu-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Menu />
      </motion.div>

      {/* Reviews Bölməsi */}
      <motion.div
        id="reviews-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Reviews />
      </motion.div>

      {/* Contact Us Bölməsi */}
      <motion.div
        id="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default Home;
