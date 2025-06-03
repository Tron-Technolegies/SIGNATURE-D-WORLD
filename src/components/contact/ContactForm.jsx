import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../components/contact/ContactForm.css";
import { handleEnquiryFormClick } from "../../utils/whatsApp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out Name, Email, and Message.");
      return;
    }
    handleEnquiryFormClick(formData);
  };

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
              name="name"
              placeholder="Your Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea-field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="submit-button" onClick={handleSubmit}>
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
