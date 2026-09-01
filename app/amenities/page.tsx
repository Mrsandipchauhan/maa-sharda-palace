import { HOTEL_DATA, PROPERTY_AMENITIES } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Amenities & Facilities | ${HOTEL_DATA.name}, Ujjain`,
  description: `Discover the premium amenities at ${HOTEL_DATA.name} including an indoor swimming pool, gym, free WiFi, and 24-hour room service for a comfortable stay in Ujjain.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/amenities`,
  }
};

export default function Amenities() {
  return (
    <>
      <section style={{ backgroundColor: "var(--primary-color)", color: "white", padding: "3rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--accent-color)" }}>Hotel Amenities & Facilities</h1>
          <p>Everything you need for a comfortable and memorable stay.</p>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {PROPERTY_AMENITIES.map((amenity, index) => (
              <div key={index} style={{ padding: "1.5rem", background: "var(--bg-color)", borderRadius: "8px", border: "1px solid #eaeaea", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "var(--accent-color)", display: "block", marginBottom: "1rem" }}>✓</span>
                <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{amenity}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
