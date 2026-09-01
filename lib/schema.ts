import { HOTEL_DATA } from "./data";

export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": HOTEL_DATA.name,
    "description": `Premium luxury hotel located on Indore Road, Ujjain. Just ${HOTEL_DATA.distanceToTemple} from Mahakaleshwar Jyotirlinga.`,
    "url": HOTEL_DATA.websiteUrl,
    "telephone": HOTEL_DATA.phone,
    "email": HOTEL_DATA.email,
    "image": "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Indore-Ujjain Rd, near Navgrah Shani Mandir, Gothada",
      "addressLocality": HOTEL_DATA.locality,
      "addressRegion": HOTEL_DATA.region,
      "postalCode": HOTEL_DATA.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": HOTEL_DATA.coordinates.lat,
      "longitude": HOTEL_DATA.coordinates.lng
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3"
    },
    "priceRange": "₹2500 - ₹6000",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": "True"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning",
        "value": "True"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Swimming Pool",
        "value": "True"
      }
    ]
  };
}

export function getRoomSchema(room: any) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": `${room.name} at ${HOTEL_DATA.name}`,
    "description": room.description,
    "image": room.image,
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.beds
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": room.sleeps
    }
  };
}

export function getFAQSchema(faqs: {question: string, answer: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getArticleSchema(title: string, description: string, urlPath: string, publishDate: string = "2024-01-01") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "datePublished": publishDate,
    "author": {
      "@type": "Person",
      "name": "Ujjain Concierge Team",
      "url": `${HOTEL_DATA.websiteUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": HOTEL_DATA.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${HOTEL_DATA.websiteUrl}/favicon-512.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${HOTEL_DATA.websiteUrl}${urlPath}`
    }
  };
}
