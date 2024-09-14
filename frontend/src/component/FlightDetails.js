import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FlightDetails = () => {
  const { id } = useParams(); // Get flight ID from URL
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(
          `/air/offers/${id}`,
          {
            headers: {
              Authorization: `Bearer duffel_test_fbwSiX6iO0rF695VZxaM6Sz313J8dYq6c7QiBbEzdhk`,
              "Duffel-Version": "v2",
              "Content-Type": "application/json",
            },
          }
        );
        setFlightDetails(response.data.data);
      } catch (err) {
        setError("Failed to fetch flight details.");
      }
      setLoading(false);
    };

    fetchFlightDetails();
  }, [id]);

  if (loading) return <p>Loading flight details...</p>;
  if (error) return <p>{error}</p>;
  if (!flightDetails) return <p>No flight details available.</p>;

  return (
    <div>
      <h2>Flight Details</h2>
      <p>Total Emissions: {flightDetails.total_emissions_kg} kg</p>
      <p>
        Payment Required By:{" "}
        {flightDetails.payment_requirements.payment_required_by}
      </p>
      <p>
        Price Guarantee Expires At:{" "}
        {flightDetails.payment_requirements.price_guarantee_expires_at}
      </p>
    </div>
  );
};

export default FlightDetails;
