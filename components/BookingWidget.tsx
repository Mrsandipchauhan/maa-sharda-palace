"use client";

import { useState } from "react";
import { HOTEL_DATA } from "@/lib/data";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  const handleBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Clean phone number for WhatsApp link
    const phone = HOTEL_DATA.whatsapp.replace(/[^0-9]/g, "");
    
    // Construct message
    let message = `Hello Hotel Maa Sharda Palace,\n\nI would like to check room availability with the following details:\n`;
    if (checkIn) message += `- Check In: ${checkIn}\n`;
    if (checkOut) message += `- Check Out: ${checkOut}\n`;
    message += `- Guests: ${guests}\n\nPlease let me know if rooms are available.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="container">
      <div className="booking-widget">
        <div className="booking-field">
          <label className="booking-label">Check In</label>
          <input 
            type="date" 
            className="booking-input" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Check Out</label>
          <input 
            type="date" 
            className="booking-input" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Guests</label>
          <select 
            className="booking-input"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1 Guest" style={{color: 'black'}}>1 Guest</option>
            <option value="2 Guests" style={{color: 'black'}}>2 Guests</option>
            <option value="3 Guests" style={{color: 'black'}}>3 Guests</option>
            <option value="4+ Guests" style={{color: 'black'}}>4+ Guests</option>
          </select>
        </div>
        <div className="booking-btn-container">
          <a 
            href="#" 
            onClick={handleBooking} 
            className="btn booking-btn"
          >
            Check Availability
          </a>
        </div>
      </div>
    </div>
  );
}
