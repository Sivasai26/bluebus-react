import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import ResultsPage from './ResultsPage';
import BookingConfirmation from './BookingConfirmation';
import SelectSeat from './SelectSeat';
import MyBookings from './MyBookings';
import AuthPage from './AuthPage';
 

function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/select-seat" element={<SelectSeat />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
