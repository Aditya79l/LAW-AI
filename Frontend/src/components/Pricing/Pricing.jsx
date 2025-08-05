/* Pricing.jsx ------------------------------------------------------------- */
import { useState } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";

/* ------------------------------------------------------------------------ */
/* 1 – plan data                                                            */
/* ------------------------------------------------------------------------ */
const PLANS = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    cta: "Sign Up",
    icon: Star,
    gradient: "from-gray-100 to-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    features: [
      "100 GB Storage",
      "1 User",
      "Basic Support",
      "1,000 Tokens / month",
    ],
  },
  {
    name: "Pro",
    monthly: 20,
    yearly: 192,
    badge: "Most Popular",
    cta: "Upgrade",
    icon: Zap,
    gradient: "from-blue-500 to-purple-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    features: [
      "1 TB Storage",
      "2 Users",
      "Advanced Support",
      "10,000 Tokens / month",
    ],
  },
  {
    name: "Business",
    monthly: 55,
    yearly: 528,
    cta: "Upgrade",
    icon: Crown,
    gradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    features: [
      "Unlimited Storage",
      "7 Users",
      "Priority Support",
      "Unlimited Tokens",
    ],
  },
];

/* ------------------------------------------------------------------------ */
/* 2 – flashy plan card                                                     */
/* ------------------------------------------------------------------------ */
function PlanCard({ plan, annual, index }) {
  const price = annual ? plan.yearly : plan.monthly;
  const suffix = annual ? "/yr" : "/mo";
  const { icon: Icon } = plan;

  return (
    <div
      className={`group relative flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8
                 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 
                 transition-all duration-500 ease-out cursor-pointer
                 hover:border-blue-300 ${
                   plan.name === "Pro"
                     ? "ring-2 ring-blue-500 ring-opacity-50"
                     : ""
                 }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 
                       group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
      />

      {/* Badge for Pro */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold 
                          px-4 py-2 rounded-full shadow-lg animate-pulse"
          >
            ⭐ {plan.badge}
          </span>
        </div>
      )}

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
        <h3
          className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 
                       transition-colors duration-300"
        >
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className="text-5xl font-black tracking-tight text-gray-900 
                          group-hover:bg-gradient-to-r group-hover:from-blue-600 
                          group-hover:to-purple-600 group-hover:bg-clip-text 
                          group-hover:text-transparent transition-all duration-500"
          >
            {price === 0 ? "$0" : `$${price}`}
          </span>
          <span className="text-lg font-bold text-gray-600">{suffix}</span>
        </div>
      </div>

      {/* CTA Button - SAME STYLE FOR ALL */}
      <div className="relative z-10">
        <button
          className="w-full h-12 px-6 rounded-xl bg-[#0d80f2] hover:bg-blue-700 
                          text-white font-bold text-base transition-all duration-300 
                          hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40
                          focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
                          transform active:scale-95"
        >
          {plan.cta}
        </button>
      </div>

      {/* Features */}
      <ul className="relative z-10 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-gray-700 
                                      group-hover:text-gray-800 transition-colors duration-300"
          >
            <div
              className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center 
                           justify-center mt-0.5 group-hover:bg-green-200 transition-colors duration-300"
            >
              <Check size={14} className="text-green-600" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700 pointer-events-none
                      bg-gradient-to-r from-transparent via-white/20 to-transparent
                      translate-x-[-100%] group-hover:translate-x-[100%] 
                      transform transition-transform duration-1000"
      />

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
/* 3 – main Pricing component                                               */
/* ------------------------------------------------------------------------ */
export default function Pricing() {
  const [billing, setBilling] = useState("Monthly");
  const annual = billing === "Annually";

  return (
    <section
      id="pricing"
      className="px-4 py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
            Choose Your{" "}
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                                        bg-clip-text text-transparent"
            >
              Perfect Plan
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start free and upgrade as your business grows. All plans include our
            core features.
          </p>

          {/* Billing toggle */}
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

        {/* Pricing grid - EXACTLY 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan, index) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              annual={annual}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <button
            className="h-12 px-8 rounded-xl border-2 border-[#0d80f2] text-[#0d80f2] 
                            font-bold hover:bg-[#0d80f2] hover:text-white transition-all duration-300
                            hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
