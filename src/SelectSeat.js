import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SelectSeat.css';
import Navbar from './Navbar';

function SelectSeat() {
  const location = useLocation();
  const navigate = useNavigate();

  const { start, destination, date, busInfo } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]); // now stores seat objects with number and price
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCount(selectedSeats.length);
    setTotal(selectedSeats.reduce((sum, seat) => sum + seat.price, 0));
  }, [selectedSeats]);

  const handleSeatClick = (seatNumber) => {
    const isSleeper = seatNumber.includes('SL') || seatNumber.includes('SR');
    const price = isSleeper ? 700 : 545;

    setSelectedSeats((prev) => {
      const alreadySelected = prev.find((s) => s.number === seatNumber);
      if (alreadySelected) {
        return prev.filter((s) => s.number !== seatNumber);
      } else {
        return [...prev, { number: seatNumber, price }];
      }
    });
  };

  const renderSeaters = () => {
    return Array.from({ length: 10 }).map((_, rowIndex) => {
      const rowLabel = String.fromCharCode(65 + rowIndex);
      return (
        <div className="row" key={`seater-${rowIndex}`}>
          <div
            className={`seat ${selectedSeats.find((s) => s.number === `${rowLabel}L1`) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(`${rowLabel}L1`)}
          >{`${rowLabel}L1`}</div>

          <div className="grid-spacer"></div>

          {[1, 2].map((i) => {
            const seatNumber = `${rowLabel}R${i}`;
            return (
              <div
                key={seatNumber}
                className={`seat ${selectedSeats.find((s) => s.number === seatNumber) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seatNumber)}
              >{seatNumber}</div>
            );
          })}
        </div>
      );
    });
  };

  const renderSleepers = () => {
    return Array.from({ length: 5 }).map((_, rowIndex) => {
      const rowLabel = String.fromCharCode(65 + rowIndex);
      return (
        <div className="row" key={`sleeper-${rowIndex}`}>
          <div
            className={`seat sleeper-seat ${selectedSeats.find((s) => s.number === `${rowLabel}SL`) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(`${rowLabel}SL`)}
          >{`${rowLabel}SL`}</div>

          <div className="grid-spacer"></div>

          {[1, 2].map((i) => {
            const seatNumber = `${rowLabel}SR${i}`;
            return (
              <div
                key={seatNumber}
                className={`seat sleeper-seat ${selectedSeats.find((s) => s.number === seatNumber) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seatNumber)}
              >{seatNumber}</div>
            );
          })}
        </div>
      );
    });
  };

  const handleConfirm = () => {
    navigate('/booking-confirmation', {
      state: {
        start,
        destination,
        date,
        busInfo,
        selectedSeats,
        total,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bb">
        <h1>Welcome To BLUEBUS</h1>
      </div>

      <div className="box-gradient">
        <header className="select-seat-header">
          <h2>Select Seat</h2>
        </header>

        <div className="movie-container">
          <ul className="showcase">
            <li><div className="seat"></div><small>N/A</small></li>
            <li><div className="seat selected"></div><small>Selected</small></li>
            <li><div className="seat occupied"></div><small>Occupied</small></li>
          </ul>

          <div className="seat-sections" style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Seater Section</h3>
              <div className="seat-grid">{renderSeaters()}</div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>Sleeper Section</h3>
              <div className="seat-grid">{renderSleepers()}</div>
            </div>
          </div>

          <p className="text">
            You have selected <span id="count">{count}</span> seat(s) for the total price of Rs. <span id="total">{total}</span>
          </p>

          <center>
            <button onClick={handleConfirm}>
              <div>
                <span></span>
                Book Now
              </div>
            </button>
          </center>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BLUEBUS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SelectSeat;
