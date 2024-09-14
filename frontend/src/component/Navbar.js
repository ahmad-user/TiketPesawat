import React, { useState, useEffect } from "react";
import axios from "axios";

const FlightDetails = ({ offerId }) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.duffel.com/air/offer_requests/${offerId}`,
          {
            headers: {
              "Accept-Encoding": "gzip",
              Accept: "application/json",
              "Duffel-Version": "v2",
              Authorization:
                "Bearer duffel_test_fbwSiX6iO0rF695VZxaM6Sz313J8dYq6c7QiBbEzdhk",
            },
          }
        );
        setFlightDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching flight details:", error);
        setError("Failed to fetch flight details.");
      }
      setLoading(false);
    };

    if (offerId) {
      fetchFlightDetails();
    }
  }, [offerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (
    !flightDetails ||
    !flightDetails.offers ||
    flightDetails.offers.length === 0
  ) {
    return <p>No details available.</p>;
  }

  return (
    <div>
      <h2>Flight Details</h2>
      {flightDetails.offers.map((offer, index) => (
        <div key={index}>
          <h3>Offer {index + 1}</h3>
          <p>Total Emissions (kg): {offer.total_emissions_kg}</p>
          <p>
            Price Guarantee Expires At:{" "}
            {offer.payment_requirements.price_guarantee_expires_at}
          </p>
          <p>
            Payment Required By:{" "}
            {offer.payment_requirements.payment_required_by}
          </p>
          <p>
            Requires Instant Payment:{" "}
            {offer.payment_requirements.requires_instant_payment ? "Yes" : "No"}
          </p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FlightDetails;
