import { HOTEL_DATA } from "@/lib/data";
import { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: `Choosing the Perfect Wedding Venue in Ujjain | ${HOTEL_DATA.name}, Ujjain`,
  description: `Read our guide on Choosing the Perfect Wedding Venue in Ujjain. Brought to you by ${HOTEL_DATA.name}.`,
  alternates: {
    canonical: `${HOTEL_DATA.websiteUrl}/blog/wedding-venues-ujjain-guide`,
  }
};

export default function BlogPost() {
  return (
    <BlogPostLayout title="Choosing the Perfect Wedding Venue in Ujjain">
      <p>
        Welcome to our guide on Choosing the Perfect Wedding Venue in Ujjain. This post provides essential information for pilgrims and travelers visiting Ujjain.
      </p>
      <p>
        Ujjain is one of the holiest cities in India, and at {HOTEL_DATA.name}, we are committed to making your stay comfortable while you explore these spiritual sites.
      </p>
      <p>
        [Detailed content for this specific guide goes here. This section should be expanded with 300-600 words of unique content depending on the topic.]
      </p>
    </BlogPostLayout>
  );
}
