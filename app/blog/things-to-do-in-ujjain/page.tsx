import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Things to Do in Ujjain | ${HOTEL_DATA.name}, Ujjain",
  description: "Read our guide on Top Things to Do in Ujjain. Brought to you by ${HOTEL_DATA.name}.",
  alternates: {
    canonical: "${HOTEL_DATA.websiteUrl}/blog/things-to-do-in-ujjain",
  }
};

export default function BlogPost() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: "var(--color-gold)" }}>Top Things to Do in Ujjain</h1>
        </div>
      </section>

      <section style={{ padding: "var(--space-xl) 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Welcome to our guide on Top Things to Do in Ujjain. This post provides essential information for pilgrims and travelers visiting Ujjain.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Ujjain is one of the holiest cities in India, and at Hotel Maa Sharda Palace, we are committed to making your stay comfortable while you explore these spiritual sites.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            [Detailed content for this specific guide goes here. This section should be expanded with 300-600 words of unique content depending on the topic.]
          </p>
          
          <div style={{ marginTop: "4rem", padding: "2rem", background: "rgba(10,10,10,0.5)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ color: "var(--color-gold)" }}>Need a place to stay?</h3>
            <p style={{ marginBottom: "1rem", color: "var(--color-stone)" }}>Hotel Maa Sharda Palace is conveniently located on Indore Road.</p>
            <a href={`tel:${HOTEL_DATA.phone}`} className="btn">Call Us: {HOTEL_DATA.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
