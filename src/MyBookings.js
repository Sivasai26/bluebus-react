import React, { useEffect, useState } from 'react';
import './MyBookings.css';
import Navbar from './Navbar';

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('myBookings')) || [];

    // Remove duplicates by timestamp (optional cleanup)
    const uniqueBookings = stored.filter(
      (booking, index, self) =>
        index === self.findIndex(b => b.timestamp === booking.timestamp)
    );

    setBookings(uniqueBookings);
  }, []);

  const handleClearBookings = () => {
    localStorage.removeItem('myBookings');
    setBookings([]);
  };

 const handleCancelBooking = (timestampToCancel) => {
  const updatedBookings = bookings.map(b =>
    b.timestamp === timestampToCancel ? { ...b, status: 'cancelled' } : b
  );
  setBookings(updatedBookings);
  localStorage.setItem('myBookings', JSON.stringify(updatedBookings));
};



  return (
    <div>
      <Navbar />
      <div className="my-bookings-container">
        <h2>My Bookings</h2>

        

          <div>
            <div className="clear-bookings-button">
              <button onClick={handleClearBookings} className="clear-button">
                Clear All Bookings
              </button>
            </div>
            <div className="bookings-list">
              {bookings.map((booking, index) => {
                const seatList = Array.isArray(booking.selectedSeats)
                  ? booking.selectedSeats.join(', ')
                  : 'None';

                return (
                  <div key={index} className="ticket-card">
                    
                    <h2>Ticket Details</h2>
                    <div className="ticket-section">
                      <h3>Bus Details</h3>
                      <p><strong>From:</strong> {booking.from}</p>
                      <p><strong>To:</strong> {booking.to}</p>
                      <p><strong>Date:</strong> {booking.date}</p>
                      <p><strong>Bus Company:</strong> {booking.busCompany}</p>
                      <p><strong>Bus Type:</strong> {booking.busType}</p>
                      <p><strong>Departure Time:</strong> {booking.departureTime}</p>
                    </div>
                    <div className="ticket-section">
                      <h3>Passenger Details</h3>
                      {Array.isArray(booking.passengers) && booking.passengers.map((passenger, index) => (
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
                      <p><strong>Total Price:</strong> Rs. {booking.totalAmount}</p>
                    </div>
                    {booking.status === 'cancelled' && (
                <div className="cancelled-tag">Cancelled</div>
              )}

              <button
                className="cancel-button"
                onClick={() => handleCancelBooking(booking.timestamp)}
                disabled={booking.status === 'cancelled'}
              >
                {booking.status === 'cancelled' ? '' : 'Cancel Ticket'}
              </button>
              <p className={`status-label ${booking.status}`}>
                {booking.status === 'cancelled' ? '' : 'Active Ticket'}
              </p>
                  </div>
                  
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default MyBookings;
