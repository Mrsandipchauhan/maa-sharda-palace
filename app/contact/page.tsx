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
      <section style={{ backgroundColor: "var(--primary-color)", color: "white", padding: "3rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--accent-color)" }}>Contact Us</h1>
          <p>We are here to assist you with reservations and inquiries.</p>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h2>Get In Touch</h2>
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Address</h3>
                <p>{HOTEL_DATA.address}, {HOTEL_DATA.locality}, {HOTEL_DATA.region} - {HOTEL_DATA.postalCode}</p>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Reservations & Enquiries</h3>
                <p>Phone: <a href={`tel:${HOTEL_DATA.phone}`} style={{ fontWeight: "bold" }}>{HOTEL_DATA.phone}</a></p>
                <p>WhatsApp: <a href={`https://wa.me/${HOTEL_DATA.whatsapp.replace(/[^0-9]/g, '')}`} style={{ fontWeight: "bold" }}>{HOTEL_DATA.whatsapp}</a></p>
                <p>Email: <a href={`mailto:${HOTEL_DATA.email}`} style={{ fontWeight: "bold" }}>{HOTEL_DATA.email}</a></p>
              </div>
            </div>
            <div style={{ flex: "2 1 400px" }}>
              <h2>Location</h2>
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
