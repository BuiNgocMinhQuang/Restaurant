import React from "react";

import FooterOverlay from "../Newsletter/FooterOverlay";
import BookingForm from "./BookingForm";

import "./Booking.scss";

const Booking = () => (
  <div className="app-booking-wrapper section-padding" id="booking">
    <FooterOverlay />
    <BookingForm />
  </div>
);

export default Booking;
