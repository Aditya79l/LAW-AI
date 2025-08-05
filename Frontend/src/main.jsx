import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ← This line is crucial!]
import Navbar from "./components/Navbar/Navbar.jsx";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures.jsx";
import HomePage from "./components/Home/Home.jsx";
import Footer from "./components/Navbar/Footer.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <HomePage />
    <KeyFeatures />
    <Pricing />
    <Footer />
  </React.StrictMode>
);
