import React from 'react';
import "../../components/termsofservices/TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Services</h1>
      <p className="effective-date">Effective: 01-05-2025</p>

      <p>
        Welcome to [Your Website Name]! These Terms of Service ("Terms") govern your access to and use of our website,
        products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our Services you confirm that you are at least 18 years old or have the permission of a legal guardian, and that you have read,
        understood, and agree to these Terms.
      </p>

      <h2>2. Changes to Terms</h2>
      <p>
        We may modify the Terms at any time. Updated versions will be posted on our website. Your continued use of the Services means you
        accept the revised Terms.
      </p>

      <h2>3. Use of Services</h2>
      <p>
        You agree to use our Services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the
        Services.
      </p>

      <h2>4. User Accounts</h2>
      <p>
        To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login
        credentials and for all activities under your account.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, and materials on the website are the intellectual property of [Your Company Name] or its licensors. You may
        not use, copy, reproduce, or distribute any content without prior written consent.
      </p>

      <h2>6. Payment and Subscriptions</h2>
      <p>
        If you purchase any paid Services, you agree to our pricing and billing terms. Payments are non-refundable except as required by law or
        explicitly stated in our policies.
      </p>

      <h2>7. Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at our discretion, without notice, for conduct that violates these Terms or is
        harmful to other users or us.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        Our Services are provided "as is" without warranties of any kind. We do not guarantee that the Services will be uninterrupted or error-free.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, [Your Company Name] is not liable for any indirect, incidental, or consequential damages arising
        from your use of the Services.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the laws of [Your State/Country], without regard to its conflict of
        laws principles.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact us at:
        <br />
        <strong>Email:</strong> [your.email@email.com]
        <br />
        <strong>Phone:</strong> [your contact number]
        <br />
        <strong>Address:</strong> [your physical or business address]
      </p>

      <button className="agree-button">I Agree</button>
    </div>
  );
};

export default TermsOfService;