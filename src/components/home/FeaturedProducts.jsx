import React from 'react';
import { handleChatClick } from '../../utils/whatsApp';
import featuredProducts from '../../utils/featuredProducts';
import "../../components/home/FeaturedProducts.css";
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <p>Handpicked items that our customers love most. Each product is carefully selected for quality, style, and value to ensure you get the best shopping experience.</p>
      <div className="products-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.title}</h3>
              <div className="price">
                <span className="offer-price">₹{product.offerPrice}</span>
                <span className="real-price">₹{product.realPrice}</span>
              </div>
              <button onClick={() => handleChatClick(`${product.title}`)}>
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all" onClick={() => navigate('/products')}>VIEW ALL PRODUCTS</button>
    </div>
  );
};

export default FeaturedProducts;