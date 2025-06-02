import React, { useState } from 'react';
import faqData from "../../utils/faq";
import "../../components/home/Faq.css";

const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedFaq(index === selectedFaq ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-content">
        <div className="faq-questions">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${selectedFaq === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="faq-question">
                <span className="faq-dot"></span>
                <p>{faq.question}</p>
                <span className="faq-arrow">➔</span>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-answer-panel">
          {selectedFaq !== null && faqData[selectedFaq].answer && (
            <>
              <div className="selected-question">{faqData[selectedFaq].question}</div>
              <p>{faqData[selectedFaq].answer}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;