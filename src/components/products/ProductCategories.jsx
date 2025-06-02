import React from 'react';
import { categories } from '../../utils/products';
import "../../components/products/ProductCategories.css";

const ProductCategories = ({ onCategorySelect }) => {
  return (
    <div className="categories-container">
      <div className="categories-header">
        <span>Home / Categories</span>
        <h2>Categories</h2>
      </div>
      <div className="categories-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => onCategorySelect(category.name)}
            style={{ cursor: 'pointer' }}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;