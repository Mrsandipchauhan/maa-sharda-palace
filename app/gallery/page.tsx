import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Photo Gallery | ${HOTEL_DATA.name}, Ujjain`,
  description: `View photos of ${HOTEL_DATA.name} including our deluxe rooms, indoor pool, gym, banquet halls, and exterior.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/gallery`,
  }
};

export default function Gallery() {
  const categories = ["All", "Rooms", "Pool & Gym", "Banquet Halls", "Exterior"];

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "3rem", background: "var(--color-obsidian)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem" }}>Photo Gallery</h1>

          <p style={{ color: "var(--color-stone)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Take a tour of {HOTEL_DATA.name}.
          </p>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {categories.map((cat, idx) => (
              <button key={idx} className={idx === 0 ? "btn" : "btn btn-outline"}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            {/* Gallery Placeholders */}
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{ background: "var(--color-obsidian)", border: "1px solid rgba(212, 175, 55, 0.1)", height: "200px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--color-stone)" }}>[Gallery Image {i + 1}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
