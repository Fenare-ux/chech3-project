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

      {/* Hero - səhifəyə keçid zamanı animasiya */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-left">
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
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="makeup.png" alt="Ice Cream" />
        </motion.div>
      </motion.div>

      {/* Scroll ilə görünən bölmələr – bir dəfə animasiya olur */}
      <motion.div
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        id="menu-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Menu />
      </motion.div>

      <motion.div
        id="reviews-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Reviews />
      </motion.div>

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
