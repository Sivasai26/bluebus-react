import React from 'react';
import './AboutPage.css'; 
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <div>
    <Navbar/>

    <div className="bb">
        <h1>Welcome To BLUEBUS</h1>
      </div>

    <div className="about-page">
      <h1>About BlueBus</h1>
      <p>
        Welcome to <strong>BlueBus</strong>, your trusted platform for booking bus tickets easily and efficiently. Our goal is to provide a seamless and user-friendly experience that connects passengers to their destinations with just a few clicks. Whether you're traveling for work, leisure, or a family visit, we are committed to helping you get there.
      </p>

      <h2 class="skills__subtitle">Our Mission</h2>
      <p>
        At <strong>BlueBus</strong>, our mission is simple: to make travel easier and more accessible for everyone. We believe in offering transparent pricing, a wide variety of bus options, and a hassle-free booking experience. We partner with trusted bus companies across the region to ensure you have safe, reliable, and affordable travel options.
      </p>

      <h2 class="skills__subtitle">What We Offer</h2>
      <ul>
        <li><strong>Comprehensive Bus Routes:</strong> We cover all major routes, from bustling cities to serene towns, providing you with a wide range of travel options.</li>
        <li><strong>Real-Time Availability:</strong> Get real-time seat availability and instant booking confirmations, making last-minute plans easier.</li>
        <li><strong>User-Friendly Interface:</strong> Our platform is designed to be intuitive and easy to navigate, allowing you to book tickets in just a few steps.</li>
        <li><strong>Secure Payment Options:</strong> We ensure that your payment details are always safe and protected with the latest encryption technologies.</li>
        <li><strong>Customer Support:</strong> Have a question or need help? Our customer support team is here to assist you 24/7.</li>
      </ul>

      <h2 class="skills__subtitle">Why Choose Us?</h2>
      <ul>
        <li><strong>Wide Network:</strong> With partnerships with leading bus operators, we offer routes to more destinations than ever before.</li>
        <li><strong>Affordable Prices:</strong> We are committed to providing affordable travel options without compromising on comfort or safety.</li>
        <li><strong>Easy Cancellations and Refunds:</strong> Life can be unpredictable, so we offer easy cancellation policies and prompt refunds to make your travel stress-free.</li>
        <li><strong>Travel Comfort:</strong> Choose from a range of buses, including luxury coaches, AC buses, sleeper buses, and more, ensuring your journey is comfortable.</li>
      </ul>

      <h2 class="skills__subtitle">Our Story</h2>
      <p>
        Founded in 2024, <strong>BlueBus</strong> started with a mission to simplify bus travel. Frustrated by the lack of convenient online options, we set out to build a platform where people could plan their journeys easily and confidently. Today, we’re proud to serve thousands of travelers, connecting them with safe, reliable, and affordable transportation options across the country.
      </p>
    </div>
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BLUEBUS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
