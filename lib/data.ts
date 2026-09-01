export const HOTEL_DATA = {
  name: "Hotel Maa Sharda Palace",
  phone: "+91 91091 03571",
  whatsapp: "+91 91091 03571",
  email: "info@maashardapalaceujjain.com",
  address: "Indore-Ujjain Rd, near Navgrah Shani Mandir, Gothada",
  locality: "Ujjain",
  region: "Madhya Pradesh",
  postalCode: "456010",
  country: "IN",
  coordinates: {
    lat: "23.1539",
    lng: "75.7725",
  },
  googleBusinessUrl: "https://g.page/hotel-maa-sharda-palace",
  facebookUrl: "https://facebook.com/hotelmaashardapalace",
  instagramUrl: "https://instagram.com/hotelmaashardapalace",
  distanceToTemple: "5 km",
  stars: 2.5,
  roomsTotal: 65,
  websiteUrl: "https://maashardapalaceujjain.com",
};

export const ROOMS_DATA = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    slug: "deluxe-double",
    size: "approx. 108 sq ft",
    sleeps: 2,
    beds: "1 double bed",
    description: "A comfortable and compact space perfect for solo travelers or couples visiting Ujjain. Designed for relaxation after a long day of pilgrimage or sightseeing.",
    amenities: ["Air conditioning", "Private bathroom", "Free toiletries", "Work desk", "TV/cable TV", "Electric kettle", "Wardrobe", "Free WiFi"],
    image: "/images/room-deluxe-double.webp",
  },
  {
    id: "deluxe-triple",
    name: "Deluxe Triple Room",
    slug: "deluxe-triple",
    size: "approx. 162 sq ft",
    sleeps: 3,
    beds: "1 double bed + 1 twin bed",
    description: "Spacious enough for small families or a group of three friends. Enjoy modern amenities with extra breathing room for a comfortable stay.",
    amenities: ["Air conditioning", "Private bathroom", "Free toiletries", "Work desk", "TV/cable TV", "Electric kettle", "Wardrobe", "Free WiFi", "Rollaway/extra beds available"],
    image: "/images/room-deluxe-triple.webp",
  },
  {
    id: "family-room",
    name: "Family Room",
    slug: "family-room",
    size: "approx. 250 sq ft",
    sleeps: 4,
    beds: "Multiple beds",
    description: "Our largest room type, designed specifically for families or larger groups. Offering ample space and all necessary comforts for a memorable stay in Ujjain.",
    amenities: ["Air conditioning", "Private bathroom", "Free toiletries", "Work desk", "TV/cable TV", "Electric kettle", "Wardrobe", "Free WiFi", "Rollaway/extra beds available"],
    image: "/images/room-family.webp",
  }
];

export const BANQUET_HALLS = [
  {
    id: "hall-1",
    name: "Grand Sharda Banquet",
    capacity: "Up to 500 guests",
    description: "Our largest and most luxurious hall, perfect for grand weddings and major corporate events.",
    image: "/images/banquet-grand.webp",
  },
  {
    id: "hall-2",
    name: "Royal Celebration Hall",
    capacity: "Up to 250 guests",
    description: "Ideal for mid-sized gatherings, engagements, and birthday parties.",
    image: "/images/banquet-royal.webp",
  },
  {
    id: "hall-3",
    name: "Intimate Meeting Room",
    capacity: "Up to 50 guests",
    description: "A professional setting for corporate meetings, conferences, or intimate family dinners.",
    image: "/images/banquet-intimate.webp",
  }
];

export const PROPERTY_AMENITIES = [
  "Indoor swimming pool",
  "Gym",
  "3 banquet halls",
  "24-hour front desk",
  "24-hour room service",
  "Free WiFi",
  "Free self/private parking",
  "Elevator",
  "ATM/banking services",
  "Free newspapers in lobby",
  "Luggage storage",
  "Non-smoking property",
  "Garden area",
  "Paid airport shuttle service available"
];
