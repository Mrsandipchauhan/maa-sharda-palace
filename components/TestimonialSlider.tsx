"use client";

import React from 'react';

const REVIEWS = [
  { text: "Hands down the best hotel near Mahakaleshwar temple. The staff arranged our 3 AM cab for Bhasma Aarti perfectly. Highly recommended for spiritual travelers.", author: "Rajesh S., Verified Guest" },
  { text: "We wanted a safe hotel for couples in Ujjain with good parking. Maa Sharda Palace delivered! The indoor pool was incredibly refreshing after our darshan.", author: "Priya M., Verified Guest" },
  { text: "We booked the best banquet halls in Ujjain for our anniversary here. The catering and luxury rooms made our family stay unforgettable.", author: "Sunil V., Verified Guest" },
  { text: "Very affordable luxury. Rooms are extremely clean, and the location on Indore road avoids all the heavy city traffic. Excellent family stay.", author: "Ankit J., Verified Guest" },
  { text: "The premium suites are fantastic. 24-hour room service and a massive secure parking lot. Easily the best premium hotel in Ujjain.", author: "Neha D., Verified Guest" }
];

export default function TestimonialSlider() {
  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-track">
        {/* Render twice for seamless looping */}
        {[...REVIEWS, ...REVIEWS].map((review, i) => (
          <div key={i} className="testimonial-card">
            <div style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', color: 'var(--color-alabaster)', whiteSpace: 'normal', marginBottom: '1rem', flexGrow: 1 }}>"{review.text}"</p>
            <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', marginTop: 'auto', textTransform: 'uppercase', fontWeight: 600 }}>- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
