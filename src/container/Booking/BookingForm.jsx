import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

import logoIcon from "../../assets/smIcon.png";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./BookingForm.scss";
function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <DateTimePicker
      disableClock={true}
      disableCalendar={true}
      onChange={onChange}
      value={value}
    />
  );
}
const BookingForm = () => (
  <div className="app-booking ">
    <img src={logoIcon} alt="" className="logoIRight" />
    <div className="app-booking-heading">
      <SubHeading title="Booking" />
      <h1 className="headtext-cormorant">Book A Table</h1>
    </div>
    <div className="app-booking-input flex-center">
      <select name="" id="">
        <option value="1P">1 Person</option>
        <option value="2P">2 Person</option>
        <option value="3P">3 Person</option>
        <option value="4P">4 Person</option>
        <option value="5P">5 Person</option>
      </select>
      <span className="date-select">
        <MyApp />
      </span>
    </div>
    <button type="button" className="custom-button">
      Book Now
    </button>
  </div>
);

export default BookingForm;
