// pages/Orders.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Orders.css';

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <div className="orders-container">
      <h2>Sifarişlərim</h2>
      {orders.length === 0 ? (
        <p>Hələ sifariş etməmisiniz.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-block">
            <h4>Sifariş #{index + 1}</h4>
            {order.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name}</span>
                <span>{item.quantity} ədəd</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
