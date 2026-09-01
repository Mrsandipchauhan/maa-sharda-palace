import type { Metadata } from "next";
import "./globals.css";
import { HOTEL_DATA } from "@/lib/data";
import { getHotelSchema } from "@/lib/schema";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: `${HOTEL_DATA.name} | Premium Luxury Hotel in Ujjain`,
  description: `Experience unparalleled luxury at ${HOTEL_DATA.name}. Prime location near Mahakaleshwar Jyotirlinga, offering elegant rooms and majestic banquets.`,
  metadataBase: new URL(HOTEL_DATA.websiteUrl),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelSchema = getHotelSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body>
        <SiteHeader />

        <main>
          {children}
        </main>

        <footer className="premium-footer">
          {/* Gold accent line at top */}
          <div className="footer-accent"></div>

          <div className="container">
            <div className="footer-grid-4">

              {/* Column 1 — Brand */}
              <div className="footer-col footer-col-brand">
                <img src="/logo-transparent.png" alt="Maa Sharda Palace Logo" className="footer-logo-img" />
                <p className="footer-tagline">
                  A premier luxury hotel in Ujjain, offering world-class hospitality just 5 km from the sacred Mahakaleshwar Jyotirlinga temple.
                </p>
                <div className="footer-social-row">
                  <a href={HOTEL_DATA.facebookUrl} target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href={HOTEL_DATA.instagramUrl} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>

              {/* Column 2 — Hotel Pages */}
              <div className="footer-col">
                <h4 className="footer-col-title">Our Hotel</h4>
                <ul className="footer-menu">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/rooms" className="footer-link">Rooms & Suites</Link></li>
                  <li><Link href="/banquet-halls" className="footer-link">Banquet & Weddings</Link></li>
                  <li><Link href="/amenities" className="footer-link">Amenities</Link></li>
                  <li><Link href="/gallery" className="footer-link">Photo Gallery</Link></li>
                  <li><Link href="/about" className="footer-link">About Us</Link></li>
                </ul>
              </div>

              {/* Column 3 — Guest Services */}
              <div className="footer-col">
                <h4 className="footer-col-title">Guest Services</h4>
                <ul className="footer-menu">
                  <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                  <li><Link href="/faq" className="footer-link">FAQs</Link></li>
                  <li><Link href="/nearby-attractions" className="footer-link">Nearby Attractions</Link></li>
                  <li><Link href="/cancellation-policy" className="footer-link">Cancellation Policy</Link></li>
                  <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="footer-link">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Column 4 — Contact */}
              <div className="footer-col">
                <h4 className="footer-col-title">Reach Us</h4>
                <address className="footer-address">
                  <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{HOTEL_DATA.address},<br/>{HOTEL_DATA.locality}, {HOTEL_DATA.region} {HOTEL_DATA.postalCode}</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href={`tel:${HOTEL_DATA.phone}`}>{HOTEL_DATA.phone}</a>
                  </div>
                  <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <a href={`mailto:${HOTEL_DATA.email}`}>{HOTEL_DATA.email}</a>
                  </div>
                  <div className="footer-contact-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>Check-in: 12:00 PM &bull; Check-out: 11:00 AM</span>
                  </div>
                </address>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom-bar">
            <div className="container footer-bottom-inner">
              <p>&copy; {new Date().getFullYear()} {HOTEL_DATA.name}. All rights reserved.</p>
              <p>Designed with ♥ in Ujjain, India</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
