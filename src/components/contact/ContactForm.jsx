import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../components/contact/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h3 className="get-started">Get Started</h3>
        <h1 className="contact-title">
          Get in touch with us. We're here to assist you.
        </h1>

        <div className="form-container">
          <div className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="input-field"
            />
            <textarea
              placeholder="Message"
              className="textarea-field"
            ></textarea>
            <button className="submit-button">
              Leave us a Message <span className="arrow">→</span>
            </button>
          </div>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
