import React from "react";

const plans = [
  {
    name: "Solo",
    price: "Free",
    period: "/forever",
    description: "Perfect for dipping your toes into the community.",
    buttonText: "Get Started",
    features: ["Basic Profile", "Limited Messages", "Community Access"],
    popular: false,
  },
  {
    name: "Buddy",
    price: "$9.99",
    period: "/month",
    description: "Unlock full access to connect without limits.",
    buttonText: "Go Premium",
    features: ["Everything in Solo", "Unlimited Messages", "Verified Badge", "Ad-free Experience"],
    popular: true,
  },
  {
    name: "Squad",
    price: "$89.99",
    period: "/year",
    description: "Best value for serious travelers and groups.",
    buttonText: "Join the Squad",
    features: ["Everything in Buddy", "Group Trip Planning", "Priority Support", "Exclusive Deals"],
    popular: false,
  },
];

const PricingCard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Find the Perfect Plan</h2>
        <p className="text-gray-500 mt-2">
          Choose the best way to connect with your future travel buddies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border ${
              plan.popular
                ? "border-yellow-400 bg-yellow-50 relative"
                : "border-gray-200 bg-white"
            } flex flex-col`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-1">{plan.period}</span>
            </div>
            <p className="text-gray-500 mt-2">{plan.description}</p>

            <button
              className={`mt-6 py-2 rounded-full font-medium text-sm transition ${
                plan.popular
                  ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
            >
              {plan.buttonText}
            </button>

            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;
