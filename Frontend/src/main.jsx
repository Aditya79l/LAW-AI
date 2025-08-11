import React from "react";
import ReactDOM from "react-dom/client";
import { PrivyProvider } from "@privy-io/react-auth";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures.jsx";
import HomePage from "./components/Home/Home.jsx";
import Footer from "./components/Navbar/Footer.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import LoginPage from "./components/LS/Login.jsx";
import SignUpPage from "./components/LS/SignUp.jsx";
import SelectPlan from "./components/Pricing/Plan.jsx";
import Chat from "./components/Home/Chat.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || "cme5ojzec06xbl40bn8x71f4o"}
      config={{
        loginMethods: ["email", "google"],
        appearance: {
          theme: "dark",
          accentColor: "#8B5CF6",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <HashRouterWrapper />
    </PrivyProvider>
  </React.StrictMode>
);

function HashRouterWrapper() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Extract the route part (before any query parameters)
  const route = hash.split("?")[0];

  if (route === "#login") {
    return (
      <>
        <LoginPage />
      </>
    );
  }

  if (route === "#signup") {
    return (
      <>
        <SignUpPage />
      </>
    );
  }

  // Add the plan route here
  if (route === "#plan") {
    return (
      <>
        <SelectPlan />
      </>
    );
  }

  if (route === "#chat") {
    return (
      <>
        <Chat />
      </>
    );
  }

  // Default route (home page)
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
