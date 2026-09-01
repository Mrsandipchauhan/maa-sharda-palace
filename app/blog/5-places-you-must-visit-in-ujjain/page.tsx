import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import BlogFAQ from "@/components/BlogFAQ";
import Image from "next/image";

export const metadata: Metadata = {
  title: `5 Places You Must Visit in Ujjain | Top Tourist Attractions & Temples`,
  description: `Discover the 5 places you must visit in Ujjain, the spiritual capital of India. From Mahakaleshwar to Kal Bhairav, explore the top Ujjain darshan itinerary.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/blog/5-places-you-must-visit-in-ujjain`,
  },
  keywords: ["places to visit in Ujjain", "Ujjain darshan", "Mahakaleshwar Jyotirlinga", "Ujjain tourist places", "Ujjain trip itinerary", "temples in Ujjain", "spiritual capital of India", "Kal Bhairav temple", "Harsiddhi Mata temple", "Ram Ghat Kshipra river"],
};

export default function PlacesToVisitUjjain() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "5 Places You Must Visit in Ujjain",
    "image": [
      `${HOTEL_DATA.websiteUrl}/images/5-places-ujjain.jpg`
    ],
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": [{
        "@type": "Organization",
        "name": HOTEL_DATA.name,
        "url": HOTEL_DATA.websiteUrl
      }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to visit Ujjain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to visit Ujjain is from October to March when the weather is pleasant for sightseeing and temple visits. Avoiding the extreme heat of summer is highly recommended."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are enough for Ujjain darshan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 2-day trip is usually sufficient to cover the top 5 places to visit in Ujjain, including the Mahakaleshwar Jyotirlinga, Kal Bhairav, and enjoying the evening Aarti at Ram Ghat."
        }
      },
      {
        "@type": "Question",
        "name": "Is photography allowed inside Mahakaleshwar Temple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, photography and mobile phones are strictly prohibited inside the main sanctum of the Mahakaleshwar Temple. Lockers are available outside to store your belongings."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book the Bhasma Aarti at Mahakaleshwar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bhasma Aarti bookings can be done online through the official temple trust website. It is highly recommended to book at least 15 to 30 days in advance due to massive spiritual tourism demand."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best hotel to stay in Ujjain near the temples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Hotel Maa Sharda Palace is one of the top-rated hotels in Ujjain, offering premium amenities, luxury rooms, and easy access to all major temples and tourist attractions in the city.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogPostLayout 
        title="5 Places You Must Visit in Ujjain" 
        subtitle="The Ultimate Spiritual Itinerary for Ujjain Darshan"
      >
        <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "3rem", borderRadius: "12px", overflow: "hidden" }}>
          <Image 
            src="/images/5-places-ujjain.jpg" 
            alt="Sunrise over Ujjain temples and ghats" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
        </div>

        <p>
          Known globally as the <strong>spiritual capital of India</strong>, Ujjain is a city where time seems to stand still. Situated on the sacred banks of the <strong>Kshipra River</strong> in Madhya Pradesh, it is one of the seven holiest cities (Sapta Puri) in Hinduism.
        </p>
        <p>
          Whether you are a devout pilgrim seeking divine blessings or a cultural traveler eager to explore ancient Indian architecture, an <em>Ujjain darshan</em> promises an experience that is both profoundly moving and visually spectacular. 
        </p>
        <p>
          Ujjain is renowned for hosting the monumental Simhastha Kumbh Mela every 12 years, but its spiritual energy is palpable every single day. The city is a labyrinth of winding alleys, reverberating temple bells, and chanting priests.
        </p>
        <p>
          If you are planning an <strong>Ujjain trip itinerary</strong>, narrowing down the countless temples and historical sites can be overwhelming. To help you experience the very best of this holy city, we have curated a comprehensive guide to the <strong>5 places you must visit in Ujjain</strong>.
        </p>

        <h2>1. Mahakaleshwar Jyotirlinga: The Heart of Ujjain</h2>
        <p>
          No list of <strong>places to visit in Ujjain</strong> is complete without the world-famous Mahakaleshwar Jyotirlinga. It is the undisputed epicenter of the city's spiritual life. 
        </p>
        <p>
          Dedicated to Lord Shiva, this temple houses one of the 12 sacred Jyotirlingas in India. What makes Mahakaleshwar truly unique is that the idol here is <em>Dakshinamukhi</em> | facing south | a unique feature upheld by tantric traditions.
        </p>
        <p>
          The most defining experience at Mahakaleshwar is the pre-dawn <strong>Bhasma Aarti</strong>. Witnessing the deity being anointed with sacred ash while the temple echoes with powerful Vedic chants is an experience that devotees describe as life-altering.
        </p>
        <p>
          Because of massive spiritual tourism demand, ensure you book your Bhasma Aarti tickets well in advance. Beyond the sanctum, the newly developed Mahakal Lok Corridor is a magnificent architectural marvel that vividly depicts stories from the Shiva Purana.
        </p>

        <h2>2. Kal Bhairav Temple: The Fierce Guardian</h2>
        <p>
          Located about 8 kilometers from the city center, the Kal Bhairav Temple is one of the most unique and intriguing <strong>Ujjain tourist places</strong>. Kal Bhairav is revered as the fierce manifestation of Lord Shiva and the guardian deity (Kotwal) of Ujjain.
        </p>
        <p>
          It is a long-held belief that any pilgrimage to Ujjain is incomplete without seeking his permission and blessings. The temple is famous worldwide for its unconventional ritual: devotees offer liquor to the deity as prasad. 
        </p>
        <p>
          The priest pours the liquor into a shallow plate and holds it to the deity's lips, and miraculously, the liquid disappears. This fascinating phenomenon draws thousands of curious visitors and devout followers daily. 
        </p>
        <p>
          The temple complex itself is ancient, featuring Maratha-style architecture that adds to its mystical aura.
        </p>

        <h2>3. Harsiddhi Mata Temple: The Sacred Shakti Peeth</h2>
        <p>
          Just a short walk from the Mahakaleshwar Temple lies the Harsiddhi Mata Temple, an essential stop on your <strong>Ujjain darshan</strong>. This temple is one of the 51 sacred Shakti Peethas across the Indian subcontinent.
        </p>
        <p>
          According to Hindu mythology, it is the exact spot where the elbow of Goddess Sati fell when Lord Shiva carried her burning body. The temple is painted in a striking deep red and houses the idols of three goddesses: Annapurna, Harsiddhi, and Mahasaraswati. 
        </p>
        <p>
          However, the most breathtaking feature of this temple is the two massive, towering Deepstambhas (lamp pillars) located in the courtyard. 
        </p>
        <p>
          Every evening, during the Navratri festival or special occasions, hundreds of oil lamps are lit on these pillars. The sight of these blazing pillars against the night sky is utterly mesmerizing and offers incredible photography opportunities.
        </p>

        <h2>4. Ram Ghat on the Kshipra River: A Spiritual Gathering</h2>
        <p>
          To truly absorb the serene and timeless atmosphere of Ujjain, you must spend an evening at Ram Ghat. The Kshipra River is considered as sacred as the Ganges.
        </p>
        <p>
          Millions of pilgrims take a holy dip in its waters during the Kumbh Mela to wash away their sins. Visiting Ram Ghat at dusk is highly recommended. 
        </p>
        <p>
          As the sun sets, the ghat comes alive with the magnificent evening Aarti. Priests perform synchronized rituals with giant, flaming brass lamps while the rhythmic sound of damrus (hand drums) and bells fills the air. 
        </p>
        <p>
          Sitting on the steps of the ghat, watching the reflection of the flames dance on the rippling waters of the Kshipra, is an experience that brings profound peace and introspection.
        </p>

        <h2>5. Mangalnath Temple: The Birthplace of Mars</h2>
        <p>
          Rounding out our top 5 <strong>places to visit in Ujjain</strong> is the fascinating Mangalnath Temple. Situated on a serene hillock overlooking the expansive waters of the Kshipra River, this temple is totally unique.
        </p>
        <p>
          It is dedicated to Mangal (the planet Mars). According to the ancient Hindu text, the Matsya Purana, Ujjain is considered the geographical birthplace of Mars.
        </p>
        <p>
          The temple is highly revered by individuals seeking to resolve astrological afflictions, specifically the <em>Mangal Dosh</em>. 
        </p>
        <p>
          Even if you are not astrologically inclined, the temple is worth visiting for its tranquil atmosphere and stunning panoramic views of the river and surrounding countryside. Away from the intense crowds of the city center, Mangalnath offers a quiet space for meditation and reflection.
        </p>

        <hr style={{ margin: "3rem 0", borderColor: "rgba(212,175,55,0.2)" }} />

        <h2>Conclusion</h2>
        <p>
          Ujjain is not just a destination; it is an experience that resonates deep within the soul. From the fierce energy of Kal Bhairav to the cosmic significance of Mahakaleshwar, every corner of this city tells a story of devotion, history, and mythology. 
        </p>
        <p>
          When planning your <strong>Ujjain trip itinerary</strong>, ensure you give yourself enough time to soak in the spiritual ambiance rather than just rushing from one temple to another.
        </p>
        <p>
          After a long day of exploring these divine sites, returning to a comfortable and luxurious stay is essential. At <strong>{HOTEL_DATA.name}</strong>, we offer the perfect blend of modern luxury and traditional hospitality, ensuring you are well-rested for your spiritual adventures. 
        </p>

        <hr style={{ margin: "3rem 0", borderColor: "rgba(212,175,55,0.2)" }} />

        <BlogFAQ faqs={[
          {
            question: "What is the best time to visit Ujjain?",
            answer: "The best time to visit Ujjain is from October to March when the weather is pleasant for sightseeing and temple visits. Avoiding the extreme heat of summer is highly recommended."
          },
          {
            question: "How many days are enough for Ujjain darshan?",
            answer: "A 2-day trip is usually sufficient to cover the top 5 places to visit in Ujjain, including the Mahakaleshwar Jyotirlinga, Kal Bhairav, and enjoying the evening Aarti at Ram Ghat."
          },
          {
            question: "Is photography allowed inside Mahakaleshwar Temple?",
            answer: "No, photography and mobile phones are strictly prohibited inside the main sanctum of the Mahakaleshwar Temple. Lockers are available outside to store your belongings."
          },
          {
            question: "How can I book the Bhasma Aarti at Mahakaleshwar?",
            answer: "Bhasma Aarti bookings can be done online through the official temple trust website. It is highly recommended to book at least 15 to 30 days in advance due to massive spiritual tourism demand."
          },
          {
            question: "Which is the best hotel to stay in Ujjain near the temples?",
            answer: `Hotel Maa Sharda Palace is one of the top-rated hotels in Ujjain, offering premium amenities, luxury rooms, and easy access to all major temples and tourist attractions in the city.`
          }
        ]} />

      </BlogPostLayout>
    </>
  );
}
