import { useState } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import SignUpPage from "./components/LS/SignUp"; // Your actual path

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "signup":
        return <SignUpPage navigateTo={navigateTo} />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Your App
          </h1>
          <p className="text-slate-300 mb-8">
            Your authentication system is ready!
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigateTo("signup")}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PrivyProvider
      appId="cme5ojzec06xbl40bn8x71f4o" // Your actual Privy App ID
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
      <div className="App">{renderCurrentPage()}</div>
    </PrivyProvider>
  );
}

export default App;
