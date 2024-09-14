import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/flights?origin=${origin}&destination=${destination}&departure_date=${departureDate}`
    );
  };

  return (
    <div className="flight-search-container">
      <h1 className="title">Search Flights</h1>
      <form onSubmit={handleSearch} className="flight-search-form">
        <div className="form-group">
          <label className="form-label">
            Origin:
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Destination:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="submit-button">
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default HomePage;
