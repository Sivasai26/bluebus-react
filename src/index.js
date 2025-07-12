import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import ResultsPage from './ResultsPage';
import SelectSeat from './SelectSeat';
import BookingConfirmation from './BookingConfirmation';
import MyBookings from './MyBookings';
import AuthPage from './AuthPage';
import './index.css';

ReactDOM.render(
  <Router>
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
  </Router>,
  document.getElementById('root')
);
