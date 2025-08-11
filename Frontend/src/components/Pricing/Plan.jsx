/* SelectPlan.jsx --------------------------------------------------------- */
import { useState, useEffect } from "react";
import {
  Check,
  CreditCard,
  User,
  Crown,
  Zap,
  Star,
  Shield,
  Lock,
  AlertCircle,
} from "lucide-react";

/* ------------------------------------------------------------------------ */
/* 1 – plan data for select plan page                                       */
/* ------------------------------------------------------------------------ */
const PLANS = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    icon: Star,
    gradient: "from-gray-100 to-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    description: "Perfect for getting started",
    features: [
      "100 GB Storage",
      "1 User",
      "Basic Support",
      "10,000 Tokens / month",
      "Standard Templates",
      "Email Support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 20,
    yearly: 192,
    badge: "Most Popular",
    icon: Zap,
    gradient: "from-blue-500 to-purple-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description: "Best for growing businesses",
    features: [
      "1 TB Storage",
      "5 Users",
      "Priority Support",
      "50,000 Tokens / month",
      "Premium Templates",
      "API Access",
      "Advanced Analytics",
      "Custom Integrations",
    ],
  },
  {
    id: "business",
    name: "Business",
    monthly: 55,
    yearly: 528,
    icon: Crown,
    gradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description: "For large teams and enterprises",
    features: [
      "Unlimited Storage",
      "Unlimited Users",
      "24/7 Phone Support",
      "Unlimited Tokens",
      "Custom Templates",
      "Advanced API Access",
      "White-label Options",
      "Dedicated Account Manager",
      "SLA Guarantee",
      "Custom Integrations",
    ],
  },
];

/* ------------------------------------------------------------------------ */
/* 2 – unauthorized access component                                        */
/* ------------------------------------------------------------------------ */
function UnauthorizedAccess() {
  const handleSignUp = () => {
    window.location.hash = "#signup";
  };

  const handleSignIn = () => {
    window.location.hash = "#login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          {/* Warning Icon */}
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Lock size={32} className="text-red-600" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Access Restricted
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            You need to create an account or sign in to access plan selection.
            Please complete the signup process first.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleSignUp}
              className="w-full h-12 px-6 rounded-xl bg-[#0d80f2] hover:bg-blue-700 
                        text-white font-bold transition-all duration-300 
                        hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
                        focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Create Account
            </button>

            <button
              onClick={handleSignIn}
              className="w-full h-12 px-6 rounded-xl border-2 border-[#0d80f2] text-[#0d80f2] 
                        font-bold hover:bg-[#0d80f2] hover:text-white transition-all duration-300
                        hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            🔒 Plan selection is only available after account creation
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 3 – plan selection card                                                  */
/* ------------------------------------------------------------------------ */
function PlanCard({ plan, isSelected, onClick, annual }) {
  const price = annual ? plan.yearly : plan.monthly;
  const suffix = annual ? "/yr" : "/mo";
  const { icon: Icon } = plan;

  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col gap-6 rounded-2xl border-2 p-8 cursor-pointer
                 transition-all duration-500 ease-out hover:-translate-y-1
                 ${
                   isSelected
                     ? "border-blue-500 bg-blue-50 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500 ring-opacity-30"
                     : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl"
                 }`}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 
                       group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
      />

      {/* Badge for popular plan */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            ⭐ {plan.badge}
          </span>
        </div>
      )}

      {/* Selection indicator */}
      <div className="absolute top-4 right-4">
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                        ${
                          isSelected
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                        }`}
        >
          {isSelected && <Check size={16} className="text-white" />}
        </div>
      </div>

      {/* Icon */}
      <div className="relative z-10">
        <div
          className={`${plan.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                         group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                         shadow-lg group-hover:shadow-xl`}
        >
          <Icon
            size={32}
            className={`${plan.iconColor} group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {plan.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
        <div className="flex items-baseline gap-1">
          <span
            className="text-4xl font-black tracking-tight text-gray-900 
                          group-hover:bg-gradient-to-r group-hover:from-blue-600 
                          group-hover:to-purple-600 group-hover:bg-clip-text 
                          group-hover:text-transparent transition-all duration-500"
          >
            {price === 0 ? "$0" : `$${price}`}
          </span>
          <span className="text-lg font-bold text-gray-600">{suffix}</span>
        </div>
        {annual && plan.monthly > 0 && (
          <div className="text-sm text-green-600 font-semibold">
            Save ${plan.monthly * 12 - plan.yearly}/year
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="relative z-10 flex flex-col gap-3">
        {plan.features.map((feature, index) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-gray-700 
                                      group-hover:text-gray-800 transition-colors duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center 
                           justify-center mt-0.5 group-hover:bg-green-200 transition-colors duration-300"
            >
              <Check size={12} className="text-green-600" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${plan.gradient} 
                       scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                       rounded-full origin-left`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 4 – payment form component (for paid plans only)                        */
/* ------------------------------------------------------------------------ */
function PaymentForm({ selectedPlan, annual, onSubmit, userEmail }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";
    if (!formData.nameOnCard) newErrors.nameOnCard = "Name on card is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const price = annual ? selectedPlan.yearly : selectedPlan.monthly;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CreditCard size={20} className="text-blue-600" />
          Payment Information
        </h3>

        {/* User email display */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Account:</strong> {userEmail}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number *
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         ${
                           errors.cardNumber
                             ? "border-red-500"
                             : "border-gray-300"
                         }`}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date *
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           ${
                             errors.expiryDate
                               ? "border-red-500"
                               : "border-gray-300"
                           }`}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV *
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           ${
                             errors.cvv ? "border-red-500" : "border-gray-300"
                           }`}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card *
            </label>
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         ${
                           errors.nameOnCard
                             ? "border-red-500"
                             : "border-gray-300"
                         }`}
            />
            {errors.nameOnCard && (
              <p className="text-red-500 text-xs mt-1">{errors.nameOnCard}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-14 px-6 rounded-xl bg-[#0d80f2] hover:bg-blue-700 
                   text-white font-bold text-lg transition-all duration-300 
                   hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
                   focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                   transform active:scale-95 flex items-center justify-center gap-2"
      >
        <Shield size={20} />
        Subscribe to {selectedPlan.name} - ${price}
        {annual ? "/yr" : "/mo"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Secure payment • Cancel anytime • 30-day money-back guarantee
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------------ */
/* 5 – main SelectPlan component with access control                        */
/* ------------------------------------------------------------------------ */
export default function SelectPlan() {
  const [selectedPlanId, setSelectedPlanId] = useState("pro");
  const [billing, setBilling] = useState("Monthly");
  const [step, setStep] = useState(1);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const annual = billing === "Annually";
  const selectedPlan = PLANS.find((p) => p.id === selectedPlanId);

  // Check authorization on component mount
  useEffect(() => {
    const checkAccess = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const fromSignup = urlParams.get("from") === "signup";
      const email =
        urlParams.get("email") || localStorage.getItem("userEmail") || "";
      const name = localStorage.getItem("userName") || "";

      // Check if user came from signup process
      if (fromSignup && email) {
        setIsAuthorized(true);
        setUserEmail(email);
        setUserName(name);

        // Prevent going back
        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", preventBack);

        return;
      }

      // Check if user has completed signup recently (within last 10 minutes)
      const signupTimestamp = localStorage.getItem("signupCompleted");
      const storedEmail = localStorage.getItem("userEmail");

      if (signupTimestamp && storedEmail) {
        const timeDiff = Date.now() - parseInt(signupTimestamp);
        const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds

        if (timeDiff < tenMinutes) {
          setIsAuthorized(true);
          setUserEmail(storedEmail);
          setUserName(localStorage.getItem("userName") || "");

          // Still prevent going back for recent signups
          window.history.pushState(null, "", window.location.href);
          window.addEventListener("popstate", preventBack);

          return;
        }
      }

      // Check if user is already logged in (has active session)
      const userSession = localStorage.getItem("user");
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (userSession && isLoggedIn) {
        try {
          const user = JSON.parse(userSession);
          setIsAuthorized(true);
          setUserEmail(user.email || storedEmail);
          setUserName(user.name || user.fullName || "");
          return;
        } catch (error) {
          console.error("Error parsing user session:", error);
        }
      }

      // If none of the above conditions are met, deny access
      setIsAuthorized(false);
    };

    const timer = setTimeout(() => {
      checkAccess();
      setIsLoading(false);
    }, 500); // Small delay for better UX

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", preventBack);
    };
  }, []);

  const preventBack = (event) => {
    window.history.pushState(null, "", window.location.href);
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlanId(planId);
  };

  const handleContinue = () => {
    if (selectedPlan.name === "Free") {
      handlePlanCompletion();
    } else {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePaymentSubmit = (paymentData) => {
    console.log("Payment submitted:", paymentData);
    console.log("Selected plan:", selectedPlan);
    handlePlanCompletion();
  };

  const handlePlanCompletion = () => {
    // Store selected plan
    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
    localStorage.setItem("planSelected", "true");

    // Clear signup-specific data
    localStorage.removeItem("signupCompleted");

    // Show success and redirect to dashboard
    alert(`Welcome! Your ${selectedPlan.name} plan is now active.`);
    window.location.href = "/dashboard";
  };

  const handleSkipForNow = () => {
    const freePlan = PLANS.find((p) => p.id === "free");
    localStorage.setItem("selectedPlan", JSON.stringify(freePlan));
    localStorage.setItem("planSelected", "true");
    localStorage.removeItem("signupCompleted");
    window.location.href = "/dashboard";
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking access...</p>
        </div>
      </div>
    );
  }

  // Show unauthorized access screen
  if (!isAuthorized) {
    return <UnauthorizedAccess />;
  }

  // Main plan selection interface (only shown if authorized)
  return (
    <section
      id="plan"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Welcome message for authorized users */}
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center text-green-800 mb-2">
              <Check size={20} />
              <span className="font-semibold">
                Account Created Successfully!
              </span>
            </div>
            <p className="text-green-700 text-sm">
              Welcome {userName || userEmail}! Now choose your plan to get
              started.
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
            {step === 1 ? (
              <>
                Choose Your Plan{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  to Get Started
                </span>
              </>
            ) : (
              "Complete Your Subscription"
            )}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {step === 1
              ? "Select the plan that fits your needs. You can change or cancel anytime."
              : "You're just one step away from unlocking all the features."}
          </p>
        </div>

        {step === 1 ? (
          /* Step 1: Plan Selection */
          <>
            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex h-12 items-center rounded-xl bg-white p-1 shadow-lg border">
                {["Monthly", "Annually"].map((label) => (
                  <label
                    key={label}
                    className={`px-6 cursor-pointer rounded-lg text-sm font-bold leading-10 transition-all duration-300
                      ${
                        billing === label
                          ? "bg-[#0d80f2] text-white shadow-md"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                  >
                    {label}
                    {label === "Annually" && (
                      <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                        Save 20%
                      </span>
                    )}
                    <input
                      type="radio"
                      value={label}
                      checked={billing === label}
                      onChange={() => setBilling(label)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Plan cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {PLANS.map((plan, index) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedPlanId === plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  annual={annual}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="text-center space-y-4">
              <button
                onClick={handleContinue}
                className="h-14 px-12 rounded-xl bg-[#0d80f2] hover:bg-blue-700 
                          text-white font-bold text-lg transition-all duration-300 
                          hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40
                          focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                          transform active:scale-95"
              >
                {selectedPlan?.name === "Free"
                  ? "Start with Free Plan"
                  : `Continue with ${selectedPlan?.name} Plan`}
              </button>

              {/* Skip option */}
              <div>
                <button
                  onClick={handleSkipForNow}
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium underline
                            transition-colors duration-200"
                >
                  Skip for now and start with Free plan
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Step 2: Payment Form */
          <div className="max-w-2xl mx-auto">
            {/* Selected plan summary */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Selected Plan
              </h3>
              <div className="flex items-center gap-4">
                <div
                  className={`${selectedPlan.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <selectedPlan.icon
                    size={24}
                    className={selectedPlan.iconColor}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">
                    {selectedPlan.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {selectedPlan.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">
                    ${annual ? selectedPlan.yearly : selectedPlan.monthly}
                  </div>
                  <div className="text-sm text-gray-600">
                    {annual ? "/year" : "/month"}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment form */}
            <PaymentForm
              selectedPlan={selectedPlan}
              annual={annual}
              onSubmit={handlePaymentSubmit}
              userEmail={userEmail}
            />

            {/* Back to plan selection */}
            <div className="text-center mt-6">
              <button
                onClick={() => setStep(1)}
                className="text-gray-600 hover:text-gray-800 text-sm font-medium underline
                          transition-colors duration-200"
              >
                ← Change selected plan
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
