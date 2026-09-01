import { HOTEL_DATA, ROOMS_DATA } from "@/lib/data";
import { getHotelSchema, getFAQSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${HOTEL_DATA.name} | Best Premium Luxury Hotel in Ujjain`,
  description: `Looking for the best hotel near Mahakaleshwar Temple in Ujjain? ${HOTEL_DATA.name} offers premium luxury rooms, an indoor pool, and grand banquet halls for a perfect stay.`,
};

const HOMEPAGE_FAQS = [
  { question: "What is the best hotel near Mahakaleshwar Jyotirlinga in Ujjain?", answer: "Hotel Maa Sharda Palace is widely considered the best hotel near Mahakaleshwar Jyotirlinga. Located strategically on Indore Road, it offers premium amenities, an indoor swimming pool, and easy access to the temple while avoiding heavy city traffic." },
  { question: "How far is Hotel Maa Sharda Palace from the Ujjain Railway Station?", answer: `As a top-rated Ujjain hotel near railway station, we are approximately 6 kilometers away. It takes about 15-20 minutes by taxi to reach our premium property safely.` },
  { question: "Does Hotel Maa Sharda Palace offer an indoor swimming pool?", answer: "Yes, if you are searching for a luxury hotel in Ujjain with swimming pool, we feature a well-maintained, temperature-regulated indoor pool exclusively for our guests." },
  { question: "Can the hotel arrange early morning transport for Bhasma Aarti?", answer: "Absolutely. We are the best hotel for Bhasma Aarti booking assistance. Our 24/7 front desk can arrange reliable cabs at 2:00 AM to ensure you reach the temple securely." },
  { question: "What are the best luxury hotels in Ujjain for family stays?", answer: "We are proudly recognized as the best hotel for family in Ujjain. We offer expansive Family Rooms that accommodate up to 4 guests comfortably, ensuring a safe hotel for couples and families alike." },
  { question: "Do hotels in Ujjain offer private parking?", answer: "Finding parking near the temples is difficult. We are a premier hotel in Ujjain with private parking, providing expansive, secure, and complimentary on-site parking for all guests." },
  { question: "Which hotel is best for wedding banquets in Ujjain?", answer: "Hotel Maa Sharda Palace offers the best banquet halls in Ujjain for weddings. Our 'Grand Sharda Banquet' accommodates up to 500 guests with complete event management." },
  { question: "What is the check-in and check-out time for hotels in Ujjain?", answer: "Our standard check-in time is 12:00 PM (Noon), and check-out is at 11:00 AM. We offer flexible early check-ins for pilgrims arriving for Mahakal Darshan, subject to availability." }
];

export default function Home() {
  const hotelSchema = getHotelSchema();
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <section className="hero-full" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image src="/images/hero-damru-v2.jpg" alt="Mahadev Damru Background" fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.9))' }}></div>
        </div>
        <div className="hero-content reveal-up" style={{ zIndex: 2, position: 'relative' }}>
          <span className="hero-subtitle">The Best Hotel in Ujjain</span>
          <h1>A Sanctuary of<br/>Luxury in Ujjain</h1>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/rooms" className="btn">Discover Our Rooms</Link>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <div className="container">
        <div className="booking-widget">
          <div className="booking-field">
            <label className="booking-label">Check In</label>
            <input type="date" className="booking-input" />
          </div>
          <div className="booking-field">
            <label className="booking-label">Check Out</label>
            <input type="date" className="booking-input" />
          </div>
          <div className="booking-field">
            <label className="booking-label">Guests</label>
            <select className="booking-input">
              <option value="1" style={{color: 'black'}}>1 Guest</option>
              <option value="2" style={{color: 'black'}}>2 Guests</option>
              <option value="3" style={{color: 'black'}}>3 Guests</option>
              <option value="4+" style={{color: 'black'}}>4+ Guests</option>
            </select>
          </div>
          <div className="booking-btn-container">
            <a href={`tel:${HOTEL_DATA.phone}`} className="btn booking-btn">Check Availability</a>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="editorial-grid">
            <div className="text-col reveal-up">
              <span className="hero-subtitle" style={{ color: 'var(--color-gold)' }}>Top Places to Stay in Ujjain</span>
              <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Experience the Best Luxury Hotel Near Mahakaleshwar Temple</h2>
              
              <p>
                Are you looking for the best hotel near Mahakaleshwar Temple? Hotel Maa Sharda Palace is the ultimate destination for your spiritual journey. We offer unparalleled comfort and premium services for all pilgrims.
              </p>
              
              <p>
                As a top-rated Ujjain hotel near the railway station, our location on Indore Road is perfect. It allows you to avoid the dense city traffic while remaining just minutes away from the holy Mahakal Darshan. 
              </p>
              
              <p>
                We are widely recognized as the best hotel for family in Ujjain. Our property is a safe hotel for couples, solo travelers, and large groups attending the Simhastha Kumbh Mela. Your safety and peace of mind are our highest priorities.
              </p>

              <div style={{ marginTop: '3rem' }}>
                <Link href="/about" className="btn btn-outline">Learn More About Us</Link>
              </div>
            </div>
            <div className="img-col reveal-up delay-1">
              <div className="img-wrapper" style={{ paddingBottom: '140%' }}>
                <Image src="/images/hero-exterior-v2.webp" alt="Best luxury hotel near Mahakaleshwar temple Ujjain" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '8rem 0' }}>
        <div className="container">
          <div className="editorial-grid reverse">
            <div className="text-col reveal-up">
              <span className="hero-subtitle" style={{ color: 'var(--color-gold)' }}>Ujjain Hotel With Swimming Pool</span>
              <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>Affordable Luxury Accommodation in Ujjain</h2>
              
              <p>
                A true premium experience goes beyond just a comfortable bed. We are proud to be a highly sought-after Ujjain hotel with a swimming pool. Our temperature-regulated indoor pool is perfect for relaxing after visiting the temples.
              </p>
              
              <p>
                Finding parking near the temples is notoriously difficult. Thankfully, we are a premium hotel in Ujjain with private parking. Guests can park their vehicles safely and securely on our expansive premises free of charge.
              </p>
              
              <p>
                Our 65+ premium rooms make us the top choice for affordable luxury accommodation in Ujjain. With 24-hour room service, high-speed Wi-Fi, and air-conditioning, we ensure your stay is completely flawless.
              </p>

              <p>
                Need help with early morning rituals? We are the best hotel for Bhasma Aarti booking assistance and transport. Our 24/7 concierge will arrange a safe cab for your 2:00 AM darshan at the Mahakaleshwar Temple.
              </p>
            </div>
            <div className="img-col reveal-up delay-1">
              <div className="img-wrapper" style={{ paddingBottom: '140%' }}>
                <Image src="/images/room-family.webp" alt="Premium accommodation in Ujjain" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="editorial-grid">
            <div className="text-col reveal-up">
              <span className="hero-subtitle" style={{ color: 'var(--color-gold)' }}>Best Banquet Halls in Ujjain</span>
              <h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>The Premier Destination for Weddings & Events</h2>
              
              <p>
                Ujjain is a beautiful, spiritual destination for grand Indian weddings. If you are searching for the best banquet halls in Ujjain for weddings, Hotel Maa Sharda Palace is the ultimate choice. 
              </p>
              
              <p>
                We feature three distinct and highly customizable event spaces. Our spectacular Grand Sharda Banquet can easily accommodate up to 500 guests. It is the perfect venue for marriage receptions, engagements, and massive corporate retreats.
              </p>
              
              <p>
                We offer complete end-to-end event management for your special day. From breathtaking floral decor to world-class custom catering, our expert team ensures your Ujjain destination wedding is truly unforgettable.
              </p>
              <div style={{ marginTop: '3rem' }}>
                <Link href="/banquet-halls" className="btn btn-outline">Explore Our Banquet Halls</Link>
              </div>
            </div>
            <div className="img-col reveal-up delay-1">
              <div className="img-wrapper" style={{ paddingBottom: '100%' }}>
                <Image src="/images/banquet-grand.webp" alt="Best banquet halls in Ujjain for weddings" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { text: "Hands down the best hotel near Mahakaleshwar temple. The staff arranged our 3 AM cab for Bhasma Aarti perfectly. Highly recommended for spiritual travelers.", author: "Rajesh S., Verified Guest" },
              { text: "We wanted a safe hotel for couples in Ujjain with good parking. Maa Sharda Palace delivered! The indoor pool was incredibly refreshing after our darshan.", author: "Priya M., Verified Guest" },
              { text: "We booked the best banquet halls in Ujjain for our anniversary here. The catering and luxury rooms made our family stay unforgettable.", author: "Sunil V., Verified Guest" }
            ].map((review, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px', background: 'rgba(10,10,10,0.5)' }}>
                <div style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--color-alabaster)' }}>"{review.text}"</p>
                <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', marginTop: '1rem', textTransform: 'uppercase' }}>- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-obsidian)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center reveal-up">
            <h2 style={{ marginBottom: '4rem' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details key={index} className="faq-item reveal-up" style={{ transitionDelay: `${index * 0.1}s` }}>
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
      </section>
    </>
  );
}
