import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


function HomePage() {
  const [startValue, setStartValue] = useState('Select');
  const [destinationValue, setDestinationValue] = useState('Select');
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [chatOpen, setChatOpen] = useState(false);


  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    // Get today's date, normalized to remove time portion
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(newDate);

    // Validate the selected date
    if (selected < today) {
      alert('Please select a valid date (today or later).');
      setSelectedDate(''); // Optionally reset the date field
    }
  };

  const handleExchange = () => {
    const temp = startValue;
    setStartValue(destinationValue);
    setDestinationValue(temp);
  };

  const handleSelectChange = (setter, value) => {
    if (
      (value === destinationValue && setter === setStartValue) ||
      (value === startValue && setter === setDestinationValue)
    ) {
      setAlertVisible(true);
    } else {
      setter(value);
    }
  };

  const handleFindBus = () => {
  if (
    startValue === 'Select' ||
    destinationValue === 'Select' ||
    !selectedDate
  ) {
    alert('Please select valid options for start, destination, and date.');
    return;
  }

  
  navigate(
    `/results?start=${encodeURIComponent(startValue)}&destination=${encodeURIComponent(
      destinationValue
    )}&date=${encodeURIComponent(selectedDate)}`
  );
};

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="bb">
        <h1>Welcome To BLUEBUS</h1>
      </div>

      <div className="grid-container">
        <div className="grid-item ticket-heading">
          <center>
            <h1>Book Your Tickets</h1>
          </center>
        </div>

        <div className="grid-item input-grid">
          <select
            id="start"
            name="start"
            className="select-custom"
            value={startValue}
            onChange={(e) => handleSelectChange(setStartValue, e.target.value)}
          >
            <option value="Select">Select From:</option>
            <option value="Bhimavaram">Bhimavaram</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Eluru">Eluru</option>
            <option value="Kakinada">Kakinada</option>
            <option value="Rajamundry">Rajamundry</option>
            <option value="Vishakapatnam">Vishakapatnam</option>
          </select>

          <button onClick={handleExchange} className="exchange-button">
            &#8596;
          </button>

          <select
            id="destination"
            name="destination"
            className="select-custom"
            value={destinationValue}
            onChange={(e) => handleSelectChange(setDestinationValue, e.target.value)}
          >
            <option value="Select">Select To:</option>
            <option value="Bhimavaram">Bhimavaram</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Eluru">Eluru</option>
            <option value="Kakinada">Kakinada</option>
            <option value="Rajamundry">Rajamundry</option>
            <option value="Vishakapatnam">Vishakapatnam</option>
          </select>

          <input
            type="date"
            id="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker"
          />
        </div>

        {alertVisible && (
          <div className="grid-item custom-alert">
            <p>Start and destination cannot be the same!</p>
            <button onClick={() => setAlertVisible(false)}>OK</button>
          </div>
        )}

        <div className="grid-item submit-button-container">
          <button onClick={handleFindBus} className="submit-button">
            Find Bus
          </button>
        </div>
      </div>

          {/* New grid below the Find Bus button */}
        <div className="cards-container">
          <div className="card">
            <h3>New User</h3>
              <p>upto 50% off on FIRST Booking</p>
          </div>
          <div className="card">
            <h3>Offers &amp; Deals</h3>
            <p>Check out our latest discounts!</p>
          </div>
          <div className="card">
            <h3>Bank Offers</h3>
              <p>Discount on ICICI Bank</p>
          </div>
          <div className="card">
            <h3>Refer a Friend</h3>
            <p>Refer &amp; Win invite via Link.</p>
          </div>
        </div>
        {/* Benefits Section */}
          <div className="benefits-section">
            <h2 className="benefits-heading">OUR BENEFITS</h2>
            <div className="benefits-grid">
              <div className="benefits-item">
                <h3>Fast Booking</h3>
                <p>Book your tickets in just a few clicks.</p>
              </div>
              <div className="benefits-item">
                <h3>Secure Payment</h3>
                <p>Your transactions are safe with us.</p>
              </div>
              <div className="benefits-item">
                <h3>Real-Time Updates</h3>
                <p>Stay updated with real-time bus tracking.</p>
              </div>
              <div className="benefits-item">
                <h3>100% Refund</h3>
                <p>Easy refunds if your plans change.</p>
              </div>
              <div className="benefits-item">
                <h3>Easy Cancellation</h3>
                <p>Cancel your booking effortlessly.</p>
              </div>
            </div>
          </div>

          {/* Sticky Chat Section */}
          <div className="chat-widget">
            <div className="chat-button" onClick={() => setChatOpen(!chatOpen)}>
              24/7
            </div>
            {chatOpen && (
            <div className="chat-box">
              <div className="chat-header">
                <span>Chat Support</span>
                <button className="close-btn" onClick={() => setChatOpen(false)}>×</button>
              </div>
              <div className="chat-body">
                <p>Hello! How can we help you today?</p>
                <input type="text" placeholder="Type your message..." />
              <button className="send-btn">Send</button>
           </div>
    </div>
  )}
</div>
  <footer className="footer">
  <div className="footer-content">
    <div className="left-group">
      <div className="footer-section company-info">
        <h2>BLUEBUS</h2>
        <p>BlueBus Pvt. Ltd.</p>
        <p><FaMapMarkerAlt style={{ marginRight: '8px' }} />123 Bus Street, Hyderabad, India</p>
        <p><FaEnvelope style={{ marginRight: '8px' }} />support@bluebus.com</p>
        <p><FaPhone style={{ marginRight: '8px' }} />+91 98765 43210</p>
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="./Mybookings">My Bookings</a></li>
          <li><a href="/offers">Offers</a></li>
          <li><a href="./ContactUs">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-section get-in-touch">
      <h4>Get in Touch</h4>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="3" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>

  <div className="footer-section social-media-section">
    <h4>Follow Us</h4>
    <div className="social-icons-grid">
      <a href="https://facebook.com/bluebus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com/bluebus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com/bluebus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://linkedin.com/company/bluebus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} BLUEBUS. All rights reserved.</p>
  </div>
</footer>


</div>
  );
}

export default HomePage;
