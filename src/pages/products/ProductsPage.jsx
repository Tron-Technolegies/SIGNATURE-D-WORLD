import React, { useState } from 'react'
import ProductCategories from '../../components/products/ProductCategories'
import AllProducts from '../../components/products/AllProducts'

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <ProductCategories onCategorySelect={handleCategorySelect} />
      <AllProducts selectedCategory={selectedCategory} />
    </div>
  )
}

export default ProductsPage