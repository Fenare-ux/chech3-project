import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice';
import { addOrder } from '../redux/orderSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.userInfo);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    if (user) {
      dispatch(addOrder(cartItems)); // Add cart to orders
      setConfirmationMessage('✅ Your order has been successfully confirmed!');
      setErrorMessage('');
      dispatch(clearCart());
      setTimeout(() => navigate('/orders'), 1000); // Navigate to orders page
    } else {
      setConfirmationMessage('');
      setErrorMessage(
        '⚠️ Please log in to confirm your order.'
      );
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className="cart-big-container">
      <button
        className="orders-button"
        onClick={() => navigate('/orders')}
      >
        Orders
      </button>

      <button
        className="products-button"
        onClick={() => navigate('/all-products')}
      >
        Products
      </button>

      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  ${item.price.toFixed(2)}
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="cart-remove-button"
                >
                  x
                </button>
              </div>
            ))}
            <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={handleConfirm}
              className="cart-confirm-button"
            >
              Confirm Order
            </button>
            {confirmationMessage && (
              <p className="confirmation-message">{confirmationMessage}</p>
            )}
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
