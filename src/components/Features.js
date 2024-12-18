import React from "react";

const Features = () => {
  const features = [
    {
      title: "Secure Transactions",
      description: "We ensure all your transactions are safe and secure.",
    },
    {
      title: "Easy Budgeting",
      description: "Manage and track your budget with ease.",
    },
    {
      title: "Analytics & Insights",
      description: "Get detailed insights about your spending habits.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
