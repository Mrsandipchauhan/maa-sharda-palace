import { HOTEL_DATA, ROOMS_DATA } from "@/lib/data";
import { getRoomSchema } from "@/lib/schema";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} | ${HOTEL_DATA.name}, Ujjain`,
    description: `Book our ${room.name} at ${HOTEL_DATA.name}. ${room.description}`,
    alternates: { canonical: `${HOTEL_DATA.websiteUrl}/rooms/${room.slug}` }
  };
}

export function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({ slug: room.slug }));
}

export default function RoomDetail({ params }: { params: { slug: string } }) {
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const roomSchema = getRoomSchema(room);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />
      <section className="hero-full" style={{ height: '70vh' }}>
        <div className="hero-bg" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.3), rgba(10, 10, 10, 0.9)), url('${room.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', animation: 'none' }}></div>
        <div className="hero-content reveal-up">
          <span className="hero-subtitle">The Collection</span>
          <h1 style={{ fontSize: '4rem' }}>{room.name}</h1>
        </div>
      </section>

      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
            {/* Left Content */}
            <div className="reveal-up delay-1">
              <h2 style={{ textAlign: 'left', marginBottom: '2rem', color: 'var(--color-gold)' }}>Overview</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-alabaster)', marginBottom: '3rem' }}>{room.description}</p>
              
              <h2 style={{ textAlign: 'left', marginBottom: '2rem', color: 'var(--color-gold)' }}>Amenities</h2>
              <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", padding: 0, listStyle: 'none' }}>
                {room.amenities.map((amenity, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', color: 'var(--color-alabaster)' }}>
                    <span style={{ color: 'var(--color-gold)', marginRight: '1rem' }}>✦</span> {amenity}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Sticky Sidebar */}
            <div className="reveal-up delay-2">
              <div style={{ position: 'sticky', top: '120px', background: 'var(--color-charcoal)', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '2rem' }}>Reserve This Room</h3>
                
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Features</span>
                  <p style={{ margin: 0, color: 'var(--color-stone)' }}>{room.size} &bull; {room.sleeps} Guests &bull; {room.beds}</p>
                </div>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--color-stone)', marginBottom: '2rem' }}>For the best rates and availability, please contact our reservation desk directly.</p>
                
                <a href={`tel:${HOTEL_DATA.phone}`} className="btn" style={{ width: '100%', marginBottom: '1rem' }}>Call to Book</a>
                <a href={`https://wa.me/${HOTEL_DATA.whatsapp.replace(/[^0-9]/g, '')}`} className="btn btn-outline" style={{ width: '100%' }}>WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
