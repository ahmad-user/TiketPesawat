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
    <div className="container mt-5">
      <h1 className="title is-2">Search Flights</h1>
      <form onSubmit={handleSearch} className="box">
        <div className="field">
          <label className="label">Origin:</label>
          <div className="control">
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Destination:</label>
          <div className="control">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Departure Date:</label>
          <div className="control">
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
