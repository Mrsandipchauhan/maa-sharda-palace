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
      <section style={{ backgroundColor: "var(--primary-color)", color: "white", padding: "3rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--accent-color)" }}>Photo Gallery</h1>
          <p>Take a tour of {HOTEL_DATA.name}.</p>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {categories.map((cat, idx) => (
              <button key={idx} className={idx === 0 ? "btn" : "btn btn-outline"}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            {/* Gallery Placeholders */}
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{ background: "#ccc", height: "200px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#666" }}>[Gallery Image {i + 1}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
