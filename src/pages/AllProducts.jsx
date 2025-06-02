import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';
import { toggleLike } from '../redux/likesSlice';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const likedItems = useSelector((state) => state.likes.items);

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const fetchProducts = (selectedCategory) => {
    const url = selectedCategory
      ? `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${selectedCategory}`
      : `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(p => ({
          id: p.id,
          name: p.name,
          price: parseFloat(p.price) || 0,
          img: p.image_link,
        }));
        setProducts(formatted);
        setFiltered(formatted);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setProducts([]);
        setFiltered([]);
      });
  };

  useEffect(() => {
    fetchProducts('');
  }, []);

  useEffect(() => {
    fetchProducts(category);
    setSearchTerm('');
  }, [category]);

  const isInCart = (id) => cartItems.some(item => item.id === id);
  const isLiked = (id) => likedItems.includes(id);

  const handleToggleCart = (product) => {
    if (isInCart(product.id)) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  const handleSearch = () => {
    const filteredResults = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredResults);
  };

  const handleToggleLike = (id) => {
    dispatch(toggleLike(id));
  };

  return (
    <div className="allproducts-section">
      <h2 className="allproducts-title">Makeup Products</h2>

      <div className="search-bar">
        <button className="wishlist-button" onClick={() => navigate('/liked-products')}>Wishlist</button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">None</option>
          <option value="lipstick">Lipstick</option>
          <option value="foundation">Foundation</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="mascara">Mascara</option>
          <option value="blush">Blush</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div className="allproducts-items">
        {filtered.length > 0 ? (
          filtered.map(product => {
            const inCart = isInCart(product.id);
            const liked = isLiked(product.id);
            return (
              <div key={product.id} className="allproducts-card">
                <img src={product.img} alt={product.name} className="allproducts-image" />
                <div className="allproducts-info">
                  <h3 className="allproducts-name">{product.name}</h3>
                  <p className="allproducts-price">${product.price.toFixed(2)}</p>
                </div>

                <div className="menu-button-wrapper">
                  <img
                    src={liked ? '/heart (1).png' : '/heart.png'}
                    alt="heart"
                    className="heart-icon"
                    onClick={() => handleToggleLike(product.id)}
                  />
                  <button
                    className={`allproducts-button ${inCart ? 'in-cart' : ''}`}
                    onClick={() => handleToggleCart(product)}
                  >
                    {inCart ? 'Remove' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
