import React from 'react';
import { useSelector } from 'react-redux';


const LikedProducts = () => {
  const likedProducts = useSelector((state) => state.likes.items);

  return (
    <div className="liked-products-page">
      <h2>Liked Products</h2>
      {likedProducts.length > 0 ? (
        <div className="liked-products-grid">
          {likedProducts.map(product => (
            <div key={product.id} className="liked-product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven’t liked any products yet.</p>
      )}
    </div>
  );
};

export default LikedProducts;
