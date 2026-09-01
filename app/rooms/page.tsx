import { HOTEL_DATA, ROOMS_DATA } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Rooms & Suites | ${HOTEL_DATA.name}, Ujjain`,
  description: `Choose from 65+ comfortable rooms at ${HOTEL_DATA.name}. We offer Deluxe Double, Deluxe Triple, and Family rooms with AC, free WiFi, and modern amenities.`,
};

export default function RoomsOverview() {
  return (
    <>
      <section className="hero-full" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.9)), url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', animation: 'none' }}></div>
        <div className="hero-content reveal-up">
          <span className="hero-subtitle">The Accommodations</span>
          <h1 style={{ fontSize: '4rem' }}>Rooms & Suites</h1>
        </div>
      </section>

      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6rem" }}>
            {ROOMS_DATA.map((room, i) => (
              <div key={room.id} className="editorial-grid" style={{ gap: '4rem' }}>
                <div className={`img-col ${i % 2 !== 0 ? 'order-2' : ''} reveal-up delay-1`} style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                  <div className="img-wrapper" style={{ paddingBottom: '70%' }}>
                    <Image src={room.image} alt={room.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div className={`text-col reveal-up`} style={{ order: i % 2 !== 0 ? 1 : 2 }}>
                  <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>{room.name}</h2>
                  <p style={{ marginBottom: "2rem" }}>{room.description}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0' }}>
                    <div>
                      <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Size</span>
                      <span style={{ color: 'var(--color-alabaster)' }}>{room.size}</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Occupancy</span>
                      <span style={{ color: 'var(--color-alabaster)' }}>{room.sleeps} Guests</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bed Type</span>
                      <span style={{ color: 'var(--color-alabaster)' }}>{room.beds}</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Features</span>
                      <span style={{ color: 'var(--color-alabaster)' }}>AC, WiFi</span>
                    </div>
                  </div>
                  
                  <Link href={`/rooms/${room.slug}`} className="btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
