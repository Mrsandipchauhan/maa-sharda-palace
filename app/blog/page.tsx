import { HOTEL_DATA } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Travel Blog | ${HOTEL_DATA.name}, Ujjain`,
  description: `Read the ${HOTEL_DATA.name} blog for guides on visiting Mahakaleshwar Jyotirlinga, things to do in Ujjain, and tips for your pilgrimage.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/blog`,
  }
};

const BLOG_POSTS = [
  {
    slug: "5-places-you-must-visit-in-ujjain",
    title: "5 Places You Must Visit in Ujjain",
    excerpt: "Discover the ultimate spiritual itinerary for your trip to Ujjain. From Mahakaleshwar to Kal Bhairav, explore the city's holiest sites.",
    thumbnail: "/images/5-places-ujjain.jpg"
  },
  {
    slug: "mahakaleshwar-jyotirlinga-guide",
    title: "Mahakaleshwar Jyotirlinga Guide for Pilgrims",
    excerpt: "Everything you need to know about visiting the sacred Mahakaleshwar Jyotirlinga, from Bhasma Aarti timings to dress code."
  },
  {
    slug: "things-to-do-in-ujjain",
    title: "Top Things to Do in Ujjain",
    excerpt: "Beyond the main temples, discover other spiritual sites, local markets, and experiences in the holy city of Ujjain."
  },
  {
    slug: "how-to-reach-ujjain",
    title: "How to Reach Ujjain: Travel Options",
    excerpt: "A comprehensive guide on reaching Ujjain by train, flight, and road from major Indian cities."
  },
  {
    slug: "simhastha-kumbh-mela-2028-guide",
    title: "Simhastha Kumbh Mela 2028: Early Planning Guide",
    excerpt: "Prepare for the massive spiritual gathering of Simhastha Kumbh Mela in 2028 with our early preparation tips."
  },
  {
    slug: "wedding-venues-ujjain-guide",
    title: "Choosing the Perfect Wedding Venue in Ujjain",
    excerpt: "Why Ujjain is becoming a popular destination for spiritual weddings and how to choose the right banquet hall."
  }
];

export default function BlogIndex() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 style={{ color: "var(--color-gold)", marginBottom: "1rem" }}>Travel & Spiritual Guide</h1>
          <p style={{ margin: "0 auto", textAlign: "center", color: "var(--color-stone)" }}>Tips, guides, and stories for your visit to Ujjain.</p>
        </div>
      </section>

      <section style={{ padding: "var(--space-xl) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {BLOG_POSTS.map(post => (
              <div key={post.slug} style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "12px", background: "rgba(10,10,10,0.5)", overflow: "hidden" }}>
                {post.thumbnail && (
                  <Link href={`/blog/${post.slug}`} style={{ display: "block", position: "relative", width: "100%", paddingTop: "56.25%" }}>
                    <Image src={post.thumbnail} alt={post.title} fill style={{ objectFit: "cover" }} />
                  </Link>
                )}
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "left", color: "var(--color-gold)" }}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p style={{ color: "var(--color-stone)", marginBottom: "2rem", flex: 1 }}>{post.excerpt}</p>
                  <div style={{ marginTop: "auto" }}>
                    <Link href={`/blog/${post.slug}`} className="btn btn-outline" style={{ padding: "0.8rem 1.5rem", fontSize: "0.75rem" }}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
