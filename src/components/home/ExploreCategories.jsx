import React from "react";
import {
  FaHome,
  FaUtensils,
  FaBook,
  FaMobileAlt,
  FaShoePrints,
  FaTshirt,
  FaGift,
} from "react-icons/fa";
import "../../components/home/ExploreCategories.css";

const ExploreCategories = () => {
  const categories = [
    {
      icon: <FaHome color="#00AC0F" />,
      title: "Household Items",
      desc: "Essential items for daily living",
      count: "500+ Items",
    },
    {
      icon: <FaUtensils color="#8036E5"/>,
      title: "Crockery & Dinnerware",
      desc: "Beautiful plates, bowls, and cutlery",
      count: "200+ Items",
    },
    {
      icon: <FaBook color="#4163E7" />,
      title: "Stationery",
      desc: "Office and school supplies",
      count: "150+ Items",
    },
    {
      icon: <FaMobileAlt color="#CD591C" />,
      title: "Mobile Accessories",
      desc: "Cases, chargers, and more",
      count: "100+ Items",
    },
    {
      icon: <FaShoePrints color="#BC2B74"/>,
      title: "Shoes & Footwear",
      desc: "Stylish and comfortable shoes",
      count: "500+ Items",
    },
    {
      icon: <FaTshirt color="#4E48E0" />,
      title: "Fashion & Apparel",
      desc: "Trendy clothing for all",
      count: "200+ Items",
    },
    {
      icon: <FaGift color="#BD2A2A" />,
      title: "Gifts & Decorations",
      desc: "Perfect for any home decor",
      count: "150+ Items",
    },
  ];

  return (
    <div className="explore-categories-container">
      <h2 className="explore-categories-heading">Explore Our Categories</h2>
      <p className="explore-categories-description">
        Discover thousands of quality products across all categories. From
        everyday essentials to special occasion items, we have everything you
        need to make your home and life better.
      </p>
      <div className="explore-categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="explore-categories-card">
            <div className="explore-categories-icon">{category.icon}</div>
            <h3 className="explore-categories-card-title">{category.title}</h3>
            <p className="explore-categories-card-desc">{category.desc}</p>
            <p className="explore-categories-card-count">{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
