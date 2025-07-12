import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';
import Navbar from './Navbar';

function ResultsPage() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const navigate = useNavigate();

  const startValue = queryParams.get('start');
  const destinationValue = queryParams.get('destination');
  const selectedDate = queryParams.get('date');

  const handleBooking = (busInfo) => {
    navigate('/select-seat', {
      state: { 
        start: startValue, 
        destination: destinationValue, 
        date: selectedDate, 
        busInfo
      }
    });
  };

  return (
    <div className="results-page">
      <Navbar />
      <div className="bb">
        <h1>Welcome To BLUEBUS</h1>
      </div>
      
      

      <div className="select-container">
      <div className="results-header">
        <h1>Search Results</h1>
        <div className="results-summary">
          <p><strong>From:</strong> {startValue}</p> 
          <p><strong>To:</strong> {destinationValue}</p>
          <p><strong>Date:</strong> {selectedDate}</p>
        </div>
      </div>
        {/* Bus Listing 1 */}
        <div className="bus-booking-container">
          <div className="bus-info">
            <div className="time">07:30 pm - 05:00 am</div>
            <div className="company">Blue Travels</div>
            <div className="type">NonA/C /Sleeper</div>
            <div className="price">Rs. 545</div>
          </div>
          <div className="book-now">
            <button 
              className="book-now-button"
              onClick={() => handleBooking({
                time: "07:30 pm - 05:00 am",
                company: "Blue Travels",
                type: "NonA/C /Sleeper",
                price: "Rs. 545"
              })}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bus Listing 2 */}
        <div className="bus-booking-container">
          <div className="bus-info">
            <div className="time">08:30 am - 04:00 pm</div>
            <div className="company">ABC Travels</div>
            <div className="type">A/C Seater/Sleeper</div>
            <div className="price">Rs. 800</div>
          </div>
          <div className="book-now">
            <button 
              className="book-now-button"
              onClick={() => handleBooking({
                time: "08:30 am - 04:00 pm",
                company: "ABC Travels",
                type: "A/C Seater/Sleeper",
                price: "Rs. 800"
              })}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bus Listing 3 */}
        <div className="bus-booking-container">
          <div className="bus-info">
            <div className="time">07:30 pm - 05:00 am</div>
            <div className="company">Ghj Travels</div>
            <div className="type">NonA/C /Sleeper</div>
            <div className="price">Rs. 545</div>
          </div>
          <div className="book-now">
            <button 
              className="book-now-button"
              onClick={() => handleBooking({
                time: "07:30 pm - 05:00 am",
                company: "Ghj Travels",
                type: "NonA/C /Sleeper",
                price: "Rs. 545"
              })}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bus Listing 4 */}
        <div className="bus-booking-container">
          <div className="bus-info">
            <div className="time">07:30 pm - 05:00 am</div>
            <div className="company">XYZ Travels</div>
            <div className="type">NonA/C /Sleeper</div>
            <div className="price">Rs. 545</div>
          </div>
          <div className="book-now">
            <button 
              className="book-now-button"
              onClick={() => handleBooking({
                time: "07:30 pm - 05:00 am",
                company: "XYZ Travels",
                type: "NonA/C /Sleeper",
                price: "Rs. 545"
              })}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Bus Listing 5 */}
        <div className="bus-booking-container">
          <div className="bus-info">
            <div className="time">07:30 pm - 05:00 am</div>
            <div className="company">PQR Travels</div>
            <div className="type">NonA/C /Sleeper</div>
            <div className="price">Rs. 545</div>
          </div>
          <div className="book-now">
            <button 
              className="book-now-button"
              onClick={() => handleBooking({
                time: "07:30 pm - 05:00 am",
                company: "PQR Travels",
                type: "NonA/C /Sleeper",
                price: "Rs. 545"
              })}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BLUEBUS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ResultsPage;
