import React from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./components/footer/Footer";
import TermsOfService from "./components/termsofservices/TermsOfService";
import TermsofServicePage from "./pages/termsofservice/TermsofServicePage";
import PrivacyPoliciesPage from "./pages/privacypolicies/PrivacyPoliciesPage";
import SecondaryHeader from "./components/header/SecondaryHeader";
import ErrorPage from "./pages/error/ErrorPage";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? <Header /> : <SecondaryHeader />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/termsofservice" element={<TermsofServicePage />} />
        <Route path="/privacypolicy" element={<PrivacyPoliciesPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;