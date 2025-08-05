import {
  HelpCircle,
  IndianRupee,
  AlertTriangle,
  FileText,
  Search,
  MessageCircle,
  Globe,
  ShieldCheck,
  StickyNote,
} from "lucide-react";
import React from "react";

const features = [
  {
    title: "Ask Legal Questions Instantly",
    description:
      "Get instant answers to your legal questions about laws and rights, explained in simple language.",
    Icon: HelpCircle,
    gradient: "from-blue-500 to-purple-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Covers Indian Laws",
    description:
      "Access authentic legal documents and information specific to Indian laws.",
    Icon: IndianRupee,
    gradient: "from-green-500 to-teal-600",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Know Your Punishments",
    description: "Inquire about offenses and their associated punishments.",
    Icon: AlertTriangle,
    gradient: "from-orange-500 to-red-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Get Legal Process Guidance",
    description: "Receive guidance on legal processes and filing procedures.",
    Icon: FileText,
    gradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Search by Section or Offense",
    description: "Search for specific legal information by section or offense.",
    Icon: Search,
    gradient: "from-indigo-500 to-blue-600",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Conversational Chat Interface",
    description:
      "Interact with our AI through a conversational chat interface.",
    Icon: MessageCircle,
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Multilingual Support (Coming Soon)",
    description: "Multilingual support will be available soon.",
    Icon: Globe,
    gradient: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Private & Secure",
    description: "Your data is private and secure with us.",
    Icon: ShieldCheck,
    gradient: "from-teal-500 to-cyan-600",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Disclaimer",
    description:
      "This service is for informational purposes only and does not constitute legal advice.",
    Icon: StickyNote,
    gradient: "from-yellow-500 to-orange-600",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function KeyFeatures() {
  return (
    <section
      id="features"
      className="flex flex-col gap-12 px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Heading */}
      <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight">
          Key{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Features
          </span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our AI assistant offers a comprehensive suite of tools to
          revolutionize your legal workflow
        </p>
      </div>

      {/* Feature Grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            delay={index * 100} // Staggered animation
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  Icon,
  gradient,
  iconBg,
  iconColor,
  delay,
}) {
  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-200 p-6 
                   hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 
                   transition-all duration-500 ease-out cursor-pointer
                   hover:border-blue-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 
                         group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
      />

      {/* Floating icon with animated background */}
      <div
        className={`${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                         group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                         shadow-lg group-hover:shadow-xl`}
      >
        <Icon
          size={32}
          className={`${iconColor} group-hover:scale-110 transition-transform duration-300`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 
                         transition-colors duration-300 leading-tight"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700
                        transition-colors duration-300"
        >
          {description}
        </p>
      </div>

      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                        transition-opacity duration-700 pointer-events-none
                        bg-gradient-to-r from-transparent via-white/10 to-transparent
                        translate-x-[-100%] group-hover:translate-x-[100%] 
                        transform transition-transform duration-1000"
      />

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${gradient} 
                         scale-x-0 group-hover:scale-x-100 transition-transform duration-500 
                         rounded-full origin-left`}
      />
    </div>
  );
}
