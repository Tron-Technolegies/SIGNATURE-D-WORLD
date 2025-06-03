import React, { useState } from 'react';
import "../../components/home/Subscription.css";
import { handleSubscriptionClick } from '../../utils/whatsApp'; 

const Subscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const success = handleSubscriptionClick(email);
    if (success) {
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="subscription-container">
      <h2 className="subscription-title">
        Stay Updated with
      </h2>
      <p className="subscription-description">
        Subscribe to our newsletter and be the first to know about new products, exclusive deals, and home improvement tips delivered straight to your inbox.
      </p>
      <div className="subscription-input-container">
        <input 
          type="email"
          placeholder="Enter your email address"
          className="subscription-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="subscription-button"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <p className="subscription-privacy">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  );
};

export default Subscription;