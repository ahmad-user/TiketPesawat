import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/HomePage";
import FlightList from "./component/FlightList";
import FlightDetails from "./component/FlightDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/flight-details/:id" element={<FlightDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
