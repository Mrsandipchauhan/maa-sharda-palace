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
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "3rem", background: "var(--color-obsidian)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem" }}>Hotel Amenities & Facilities</h1>

          <p style={{ color: "var(--color-stone)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Experience world-class hospitality with our premium facilities designed for your comfort and convenience.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section bg-charcoal">
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "2rem" 
          }}>
            {PROPERTY_AMENITIES.map((amenity, index) => (
              <div 
                key={index} 
                className="amenity-card"
                style={{ 
                  padding: "2rem", 
                  background: "var(--color-obsidian)", 
                  border: "1px solid rgba(212, 175, 55, 0.1)", 
                  borderRadius: "8px", 
                  textAlign: "center",
                  transition: "transform 0.3s ease, border-color 0.3s ease"
                }}
              >
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  margin: "0 auto 1.5rem", 
                  borderRadius: "50%", 
                  background: "rgba(212, 175, 55, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                  fontSize: "1.5rem"
                }}>
                  ✦
                </div>
                <h3 style={{ fontSize: "1.1rem", margin: 0, color: "var(--color-alabaster)", letterSpacing: "0.05em", fontWeight: 500 }}>
                  {amenity}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
