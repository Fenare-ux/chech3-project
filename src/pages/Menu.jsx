import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(p => ({
          id: p.id,
          name: p.name,
          price: parseFloat(p.price) || 0,
          img: p.image_link,
          likes: Math.floor(Math.random() * 1000), // Simulyasiya olunmuş
        }));
        const sorted = formatted.sort((a, b) => b.likes - a.likes);
        setProducts(sorted.slice(0, 3));
      })
      .catch(err => console.error('API Error:', err));
  }, []);

  const isInCart = (id) => cartItems.some(item => item.id === id);
  const isLiked = (id) => likedItems.includes(id);

  const handleToggleCart = (product) => {
    if (isInCart(product.id)) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  const toggleLike = (id) => {
    setLikedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div 
      className="menu-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="menu-title">Popular Makeup Products</h2>
      <div className="menu-items">
        {products.map(product => {
          const inCart = isInCart(product.id);
          const liked = isLiked(product.id);
          return (
            <motion.div 
              key={product.id} 
              className="menu-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={product.img} alt={product.name} className="menu-image" />
              <h3 className="menu-name">{product.name}</h3>
              <p className="menu-price">${product.price.toFixed(2)}</p>

              <div className="menu-button-wrapper">
                <img
                  src={liked ? '/heart (1).png' : '/heart.png'}
                  alt="heart"
                  className="heart-icon"
                  onClick={() => toggleLike(product.id)}
                />
                <button 
                  className={`menu-button ${inCart ? 'in-cart' : ''}`}
                  onClick={() => handleToggleCart(product)}
                >
                  {inCart ? 'Remove' : 'Add to Cart'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      <button className="menu-more-button" onClick={() => navigate('/all-products')}>
        ↓ All Products
      </button>
    </motion.div>
  );
};

export default Menu;
