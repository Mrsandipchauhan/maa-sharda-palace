import { HOTEL_DATA } from "@/lib/data";
import { getFAQSchema } from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${HOTEL_DATA.name}`,
  description: `Find answers to common questions about your stay at ${HOTEL_DATA.name}, including check-in times, parking, and distance to Mahakaleshwar Temple.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/faq`,
  }
};

const FAQS = [
  {
    question: "How far is the hotel from Mahakaleshwar Jyotirlinga?",
    answer: `The hotel is located ${HOTEL_DATA.distanceToTemple} from Mahakaleshwar Jyotirlinga, which is about a 10-15 minute drive depending on traffic.`
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we offer free and secure private parking for all our guests."
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Standard check-in time is 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability."
  },
  {
    question: "Does the hotel have an indoor swimming pool?",
    answer: "Yes, we have a beautifully maintained indoor swimming pool exclusively for our guests."
  }
];

export default function FAQPage() {
  const faqSchema = getFAQSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="hero-full" style={{ height: '50vh' }}>
        <div className="hero-bg" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.9)), url('https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3')`, backgroundSize: 'cover', backgroundPosition: 'center', animation: 'none' }}></div>
        <div className="hero-content reveal-up">
          <span className="hero-subtitle">Information</span>
          <h1 style={{ fontSize: '3.5rem' }}>Frequently Asked Questions</h1>
        </div>
      </section>

      <section style={{ padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="reveal-up" style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--color-charcoal)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '1.25rem' }}>{faq.question}</h3>
              <p style={{ color: 'var(--color-alabaster)', margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
          
          <div className="reveal-up" style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'var(--color-alabaster)', marginBottom: '1rem' }}>Still have questions?</h3>
            <p style={{ marginBottom: '2rem' }}>Our concierge team is available 24/7 to assist you.</p>
            <a href={`tel:${HOTEL_DATA.phone}`} className="btn">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
