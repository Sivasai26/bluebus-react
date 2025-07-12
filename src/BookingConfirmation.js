// BookingConfirmation.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';
import Navbar from './Navbar';

function BookingConfirmation() {
  const { state } = useLocation();
  const { start, destination, date, busInfo, selectedSeats = [], total } = state || {};

  // Map seat list correctly (extract seat numbers from objects)
  const seatNumbers = selectedSeats.map(seat =>
    typeof seat === 'object' ? seat.number : seat
  );
  const seatList = seatNumbers.join(', ');

  const busCompany = busInfo && busInfo.company ? busInfo.company : 'Not Available';
const busType = busInfo && busInfo.type ? busInfo.type : 'Not Available';
const departureTime = busInfo && busInfo.time ? busInfo.time : 'Not Available';


  const [bookingSaved, setBookingSaved] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [passengerDetails, setPassengerDetails] = useState(
    Array.isArray(selectedSeats)
      ? selectedSeats.map(() => ({
          name: '',
          age: '',
          gender: '',
          contact: ''
        }))
      : []
  );

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDetails = [...passengerDetails];
    updatedDetails[index][name] = value;
    setPassengerDetails(updatedDetails);
  };

  // Simulated payment
  const handlePayment = () => {
    const simulatePaymentProcess = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Payment Successful');
        }, 2000);
      });
    };

    simulatePaymentProcess().then((message) => {
      alert(message);
      setPaymentSuccess(true);
    });
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  // Save booking after successful payment
  useEffect(() => {
    if (paymentSuccess && !bookingSaved) {
      const ticketId = 'BB-' + Date.now();

      const fullBooking = {
        ticketId,
        from: start,
        to: destination,
        date,
        busCompany,
        busType,
        departureTime,
        selectedSeats: seatNumbers.sort(),
        totalAmount: total,
        passengers: passengerDetails,
        timestamp: new Date().toISOString()
      };

      const existingBookings = JSON.parse(localStorage.getItem('myBookings')) || [];

      const alreadyExists = existingBookings.some(b =>
        Array.isArray(b.selectedSeats) &&
        JSON.stringify([...b.selectedSeats].sort()) === JSON.stringify(fullBooking.selectedSeats) &&
        b.date === fullBooking.date &&
        b.from === fullBooking.from &&
        b.to === fullBooking.to
      );

      if (!alreadyExists) {
        localStorage.setItem('myBookings', JSON.stringify([fullBooking, ...existingBookings]));
      }

      setBookingSaved(true);
    }
  }, [paymentSuccess, bookingSaved]);

  if (!state) {
    return <div className="confirmation-container">No booking details available.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="confirmation-container">
        <h1>Booking Confirmation</h1>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="passenger-details-form">
            <h2>Enter Passenger Details</h2>
            {selectedSeats.map((seat, index) => {
              const seatNumber = typeof seat === 'object' ? seat.number : seat;
              return (
                <div key={index} className="passenger-details">
                  <h3>Passenger {index + 1} (Seat {seatNumber})</h3>

                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={passengerDetails[index].name}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />

                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={passengerDetails[index].age}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />

                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={passengerDetails[index].gender}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  <label>Contact Number:</label>
                  <input
                    type="text"
                    name="contact"
                    value={passengerDetails[index].contact}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />
                </div>
              );
            })}
            <button type="submit" className="submit-button">Proceed to Payment</button>
          </form>
        ) : !paymentSuccess ? (
          <div className="confirmation-footer">
            <button className="print-button" onClick={handlePayment}>
              Pay
            </button>
          </div>
        ) : (
          <div className="ticket-card">
            <h2>Ticket Details</h2>

            <div className="ticket-section">
              <h3>Bus Details</h3>
              <p><strong>From:</strong> {start}</p>
              <p><strong>To:</strong> {destination}</p>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Bus Company:</strong> {busCompany}</p>
              <p><strong>Bus Type:</strong> {busType}</p>
              <p><strong>Departure Time:</strong> {departureTime}</p>
            </div>

            <div className="ticket-section">
              <h3>Passenger Details</h3>
              {passengerDetails.map((passenger, index) => (
                <div key={index}>
                  <p><strong>Passenger {index + 1}</strong></p>
                  <p>Name: {passenger.name}</p>
                  <p>Age: {passenger.age}</p>
                  <p>Gender: {passenger.gender}</p>
                  <p>Contact: {passenger.contact}</p>
                </div>
              ))}
            </div>

            <div className="ticket-section">
              <p><strong>Selected Seats:</strong> {seatList}</p>
              <p><strong>Total Price:</strong> Rs. {total}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingConfirmation;
