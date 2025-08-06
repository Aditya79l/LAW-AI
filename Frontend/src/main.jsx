import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ← This line is crucial!]
import Navbar from "./components/Navbar/Navbar.jsx";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures.jsx";
import HomePage from "./components/Home/Home.jsx";
import Footer from "./components/Navbar/Footer.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import LoginPage from "./components/LS/Login.jsx";
import SignUpPage from "./components/LS/SignUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouterWrapper />
  </React.StrictMode>
);

function HashRouterWrapper() {
  const [hash, setHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (hash === "#login") {
    return (
      <>
        <LoginPage />
      </>
    );
  }
  if (hash === "#signup") {
    return (
      <>
        <SignUpPage />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <HomePage />
      <KeyFeatures />
      <Pricing />
      <Footer />
    </>
  );
}
