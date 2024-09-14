import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FlightList() {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.post(
          "/air/offer_requests?return_offers=true",
          {
            data: {
              slices: [
                {
                  origin: "MAD",
                  destination: "JFK",
                  departure_date: "2024-12-05",
                },
                {
                  origin: "JFK",
                  destination: "MAD",
                  departure_date: "2024-12-10",
                },
              ],
              passengers: [
                {
                  type: "adult",
                },
              ],
              cabin_class: "first",
              max_connections: "0",
            },
          },
          {
            headers: {
              Authorization: `Bearer duffel_test_fbwSiX6iO0rF695VZxaM6Sz313J8dYq6c7QiBbEzdhk`,
              "Duffel-Version": "v2",
              "Content-Type": "application/json",
            },
          }
        );

        setFlights(response.data.data.offers);
      } catch (err) {
        setError(err);
        console.error("Error fetching flights:", err);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Flight List</h1>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <p>Total Emissions: {flight.total_emissions_kg} kg</p>
            <Link to={`/flight-details/${flight.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
