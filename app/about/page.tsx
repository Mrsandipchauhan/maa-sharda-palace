import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${HOTEL_DATA.name}, Ujjain`,
  description: `Learn about the history and heritage of ${HOTEL_DATA.name}. We have been providing exceptional hospitality to pilgrims and travelers in Ujjain.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/about`,
  }
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "3rem", background: "var(--color-obsidian)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem" }}>About {HOTEL_DATA.name}</h1>

          <p style={{ color: "var(--color-stone)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            A legacy of hospitality in the holy city of Ujjain.
          </p>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}>Our Story</h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", color: "var(--color-alabaster)", lineHeight: "1.8" }}>
            {HOTEL_DATA.name} was established with a singular vision: to provide a sanctuary of comfort and peace for pilgrims and travelers visiting the sacred city of Ujjain. Located conveniently on the Indore Road, our 2.5-star property is designed to be your home away from home.
          </p>
          <p style={{ marginBottom: "3rem", fontSize: "1.1rem", color: "var(--color-alabaster)", lineHeight: "1.8" }}>
            With over 65 beautifully appointed rooms, we cater to all types of guests—from solo devotees seeking blessings at Mahakaleshwar Jyotirlinga to large families and corporate groups. Our dedication to service ensures that every guest experiences the warmth of authentic Indian hospitality.
          </p>
          <h2 style={{ color: "var(--color-gold)", marginBottom: "1.5rem" }}>Our Commitment</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-alabaster)", lineHeight: "1.8" }}>
            Whether you are here to celebrate a grand wedding in one of our 3 spacious banquet halls or simply looking for a relaxing weekend getaway with access to our indoor pool and gym, our team is committed to making your stay unforgettable. We take pride in our well-maintained facilities, modern amenities, and 24-hour service.
          </p>
        </div>
      </section>
    </>
  );
}
