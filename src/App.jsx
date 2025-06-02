import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Menu from './pages/Menu';
import Contact from './pages/ContactUs';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import AllProducts from './pages/AllProducts';
import LikedProducts from './pages/LikedProducts';
import Orders from './pages/Orders';

import './App.css';
import './pages/Menu.css';
import './pages/AboutUs.css';
import './pages/ContactUs.css';
import './pages/Cart.css';
import './pages/Login.css';
import './pages/Reviews.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/liked" element={<LikedProducts />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
