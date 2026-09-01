"use client";

import { HOTEL_DATA } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default function BlogPostLayout({
  title,
  subtitle = "Travel & Spiritual Guide",
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: "var(--color-gold)", marginBottom: "1rem" }}>{title}</h1>
          <p style={{ margin: "0 auto", textAlign: "center", color: "var(--color-stone)" }}>
            {subtitle}
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="blog-content">
            {children}
          </div>
          
          <div style={{ marginTop: "4rem", padding: "2.5rem", background: "rgba(10,10,10,0.5)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "12px", textAlign: "center" }}>
            <h3 style={{ color: "var(--color-gold)", marginBottom: "1rem" }}>Need a place to stay in Ujjain?</h3>
            <p style={{ marginBottom: "1.5rem", color: "var(--color-stone)" }}>
              {HOTEL_DATA.name} is conveniently located on Indore Road, offering premium accommodations for your spiritual journey.
            </p>
            <a href={`tel:${HOTEL_DATA.phone}`} className="btn">Call Us: {HOTEL_DATA.phone}</a>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/rooms" style={{ color: "var(--color-gold)", textDecoration: "underline", fontSize: "0.9rem" }}>
                Explore Our Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
