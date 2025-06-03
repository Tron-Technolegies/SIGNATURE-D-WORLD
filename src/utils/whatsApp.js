// Product enquiry
export const handleChatClick = (name) => {
  const phoneNumber = "+919539711107";
  const message = `Can I get more details of the product: ${name}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

// Form enquiry submission
export const handleEnquiryFormClick = ({ name, email, phone, message }) => {
  const phoneNumber = "+919539711107";
  const messageContent = `Hi, I need to connect with you\nNAME: ${name}\nEMAIL: ${email}\nPHONE: ${phone || "N/A"}\nMESSAGE: ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
};

// Subscription via email
export const handleSubscriptionClick = (email) => {
  if (!email.trim()) {
    alert("Please enter your email address");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  const phoneNumber = "+919539711107";
  const message = `Hi! I would like to get regular updates about Signature D World.\n\nEmail: ${email}\n\nAdd me to your subscription list for updates on new products, exclusive deals, and more.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  return true;
};
