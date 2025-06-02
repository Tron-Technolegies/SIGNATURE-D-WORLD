import React from "react";
import "../../components/contact/ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-content">
        <div className="contact-info-header">
          <p className="contact-info-label">Contact Info</p>
          <h2 className="contact-info-main-title">
            We are always happy to assist you
          </h2>
        </div>

        <div className="contact-info-grid">
          <div className="contact-info-item">
            <h3 className="contact-info-item-title">Email Address</h3>
            <p className="contact-info-item-value">help@info.com</p>
            <div className="contact-info-hours">
              <p className="hours-label">Assistance hours:</p>
              <p className="hours-text">Monday - Friday 6 am to 5 pm EST</p>
            </div>
          </div>

          <div className="contact-info-item">
            <h3 className="contact-info-item-title">Number</h3>
            <p className="contact-info-item-value">+91 1234567890</p>
            <div className="contact-info-hours">
              <p className="hours-label">Assistance hours:</p>
              <p className="hours-text">Monday - Friday 6 am to 6 pm EST</p>
            </div>
          </div>

          <div className="contact-info-item">
            <h3 className="contact-info-item-title">Address</h3>
            <p className="contact-info-item-value">
              123 Business Street, City, State 12345
            </p>
            <div className="contact-info-hours">
              <p className="hours-label">Office hours:</p>
              <p className="hours-text">Monday - Friday 9 am to 6 pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
