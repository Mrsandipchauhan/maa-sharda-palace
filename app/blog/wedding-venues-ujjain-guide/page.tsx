import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choosing the Perfect Wedding Venue in Ujjain | ${HOTEL_DATA.name}, Ujjain",
  description: "Read our guide on Choosing the Perfect Wedding Venue in Ujjain. Brought to you by ${HOTEL_DATA.name}.",
  alternates: {
    canonical: "${HOTEL_DATA.websiteUrl}/blog/wedding-venues-ujjain-guide",
  }
};

export default function BlogPost() {
  return (
    <>
      <section style={{ backgroundColor: "var(--primary-color)", color: "white", padding: "3rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--accent-color)" }}>Choosing the Perfect Wedding Venue in Ujjain</h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Welcome to our guide on Choosing the Perfect Wedding Venue in Ujjain. This post provides essential information for pilgrims and travelers visiting Ujjain.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Ujjain is one of the holiest cities in India, and at Hotel Maa Sharda Palace, we are committed to making your stay comfortable while you explore these spiritual sites.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            [Detailed content for this specific guide goes here. This section should be expanded with 300-600 words of unique content depending on the topic.]
          </p>
          
          <div style={{ marginTop: "4rem", padding: "2rem", background: "var(--bg-color)", borderRadius: "8px", textAlign: "center" }}>
            <h3>Need a place to stay?</h3>
            <p style={{ marginBottom: "1rem" }}>Hotel Maa Sharda Palace is conveniently located on Indore Road.</p>
            <a href={"tel:${HOTEL_DATA.phone}"} className="btn">Call Us: {HOTEL_DATA.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
