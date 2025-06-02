import React from 'react';
import { products } from '../../utils/products';
import "../../components/products/AllProducts.css";
import { handleChatClick } from '../../utils/whatsApp';

const AllProducts = ({ selectedCategory = "All Products" }) => {
  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="all-products-container">
      <h2>{selectedCategory === "All Products" ? "ALL PRODUCTS" : selectedCategory.toUpperCase()}</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <div className="price">
                  <span className="current-price">₹{product.price}</span>
                  <span className="original-price">₹{product.originalPrice}</span>
                </div>
                <button className="buy-now" onClick={() => handleChatClick(`${product.name}`)}>Buy Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      <div className="pagination">
        <button className="next-page">NEXT PAGE →</button>
        <span className="page-info">01 of 100</span>
        <div className="page-arrows">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;