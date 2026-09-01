import { HOTEL_DATA, BANQUET_HALLS } from "@/lib/data";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Banquet Halls & Wedding Venues | ${HOTEL_DATA.name}, Ujjain`,
  description: `Host your wedding or corporate event in Ujjain at ${HOTEL_DATA.name}. We offer 3 premium banquet halls accommodating up to 500 guests with catering.`,
};

export default function BanquetHalls() {
  return (
    <>
      <section className="hero-full" style={{ height: '60vh' }}>
        <div className="hero-bg" style={{ background: `linear-gradient(rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.9)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', animation: 'none' }}></div>
        <div className="hero-content reveal-up">
          <span className="hero-subtitle">Grand Events</span>
          <h1 style={{ fontSize: '3.5rem' }}>Weddings & Banquets</h1>
        </div>
      </section>

      <section style={{ padding: "var(--space-xl) 0" }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-xl)' }}>
            <p className="reveal-up delay-1" style={{ fontSize: '1.2rem', color: 'var(--color-alabaster)' }}>
              Maa Sharda Palace provides the most majestic settings for your life's greatest moments. Whether it is a grand Indian wedding or a distinguished corporate summit, our venues are crafted for perfection.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
            {BANQUET_HALLS.map((hall, index) => (
              <div key={hall.id} className="editorial-grid">
                <div className={`img-col ${index % 2 !== 0 ? 'order-2' : ''} reveal-up delay-1`} style={{ order: index % 2 !== 0 ? 2 : 1 }}>
                  <div className="img-wrapper" style={{ paddingBottom: '80%' }}>
                    <Image src={hall.image} alt={hall.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div className={`text-col reveal-up`} style={{ order: index % 2 !== 0 ? 1 : 2 }}>
                  <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>{hall.name}</h2>
                  <p style={{ fontSize: "1.15rem", marginBottom: "2rem", color: 'var(--color-alabaster)' }}>{hall.description}</p>
                  
                  <div style={{ display: 'inline-block', border: '1px solid var(--color-gold)', padding: '1rem 2rem', marginBottom: '3rem' }}>
                    <span style={{ display: 'block', color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Maximum Capacity</span>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-alabaster)', fontFamily: 'var(--font-display)' }}>{hall.capacity}</span>
                  </div>
                  <br />
                  <a href={`mailto:${HOTEL_DATA.email}`} className="btn">Request Proposal</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
