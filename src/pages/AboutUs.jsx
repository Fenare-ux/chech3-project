import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      
      <motion.div
        className="about-image-container hover-overlay"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="store.webp" 
          alt="Cafe" 
          className="about-image"
        />

        {/* Hover zamanı görünən overlay */}
        <div className="image-hover-content">
          <a 
            href="https://maps.app.goo.gl/2FR8WZiZM3hCPKhS9" 
            target="_blank" 
            rel="noreferrer"
            className="overlay-link"
          >
            https://maps.app.goo.gl/2FR8WZiZM3hCPKhS9
          </a>
        </div>
      </motion.div>

      <motion.div
        className="about-text-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our Makeup Store</h1>
        <p>Our makeup store offers a wide selection of high-quality beauty products — from luxurious foundations to vibrant eyeshadow palettes.</p>
        <button onClick={() => window.open('https://en.wikipedia.org/wiki/List_of_ice_cream_flavors', '_blank')}>
          Learn More
        </button>
      </motion.div>

    </div>
  );
};

export default AboutUs;
