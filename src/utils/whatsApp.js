export const handleChatClick = (name) => {
  const phoneNumber = "+919539711107";
  const message = `Can I get more details of the product :  ${name}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({ name, email, course, message }) => {
  const phoneNumber = "+919539711107";
  const messageContent = ` NAME : ${name}\n EMAIL : ${email}\n course : ${course}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};