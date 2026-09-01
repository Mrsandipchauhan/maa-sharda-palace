import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us | ${HOTEL_DATA.name}, Ujjain`,
  description: `Contact ${HOTEL_DATA.name} for room bookings and banquet reservations. Call ${HOTEL_DATA.phone} or visit us on Indore Road near Navgrah Shani Mandir.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/contact`,
  }
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "3rem", background: "var(--color-obsidian)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem" }}>Contact Us</h1>

          <p style={{ color: "var(--color-stone)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            We are here to assist you with reservations and inquiries.
          </p>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h2 style={{ color: "var(--color-gold)", marginBottom: "2rem" }}>Get In Touch</h2>
              <div style={{ marginBottom: "2rem", color: "var(--color-alabaster)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--color-gold)" }}>Address</h3>
                <p style={{ color: "var(--color-stone)" }}>{HOTEL_DATA.address}, {HOTEL_DATA.locality}, {HOTEL_DATA.region} - {HOTEL_DATA.postalCode}</p>
              </div>
              <div style={{ marginBottom: "2rem", color: "var(--color-alabaster)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--color-gold)" }}>Reservations & Enquiries</h3>
                <p style={{ color: "var(--color-stone)", marginBottom: "0.5rem" }}>Phone: <a href={`tel:${HOTEL_DATA.phone}`} style={{ fontWeight: "bold", color: "var(--color-alabaster)" }}>{HOTEL_DATA.phone}</a></p>
                <p style={{ color: "var(--color-stone)", marginBottom: "0.5rem" }}>WhatsApp: <a href={`https://wa.me/${HOTEL_DATA.whatsapp.replace(/[^0-9]/g, '')}`} style={{ fontWeight: "bold", color: "var(--color-alabaster)" }}>{HOTEL_DATA.whatsapp}</a></p>
                <p style={{ color: "var(--color-stone)", marginBottom: "0.5rem" }}>Email: <a href={`mailto:${HOTEL_DATA.email}`} style={{ fontWeight: "bold", color: "var(--color-alabaster)" }}>{HOTEL_DATA.email}</a></p>
              </div>
            </div>
            <div style={{ flex: "2 1 400px" }}>
              <h2 style={{ color: "var(--color-gold)", marginBottom: "2rem" }}>Location</h2>
              {/* Note: Embedded maps should use verified GPS. Since this is an unverified placeholder lat/lng, we use a search query for safety. */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14674.34316719142!2d75.7725!3d23.1539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA5JzE0LjAiTiA3NcKwNDYnMjEuMCJF!5e0!3m2!1sen!2sin!4v1633010000000!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: "8px" }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Maps Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
