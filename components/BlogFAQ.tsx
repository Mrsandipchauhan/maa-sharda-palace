"use client";

import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  faqs: FAQItem[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-section" style={{ marginTop: "3rem", marginBottom: "2rem" }}>
      <h2>Frequently Asked Questions (FAQs)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginTop: "1.5rem" }}>
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-summary">
              {faq.question}
            </summary>
            <div className="faq-content">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
