import React from "react";
import ExploreCategories from "../../components/home/ExploreCategories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import AboutUs from "../../components/home/AboutUs";
import Subscription from "../../components/home/Subscription";
import Faq from "../../components/home/Faq";
import LandingSection from "../../components/home/LandingSection";

const HomePage = () => {
  return (
    <div>
      <LandingSection />
      <ExploreCategories />
      <FeaturedProducts />
      <AboutUs />
      <Faq />
      <Subscription />
    </div>
  );
};

export default HomePage;
