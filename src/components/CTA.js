import React from "react";

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
        <p className="text-lg mb-6">
          Sign up now and start managing your finances like a pro!
        </p>
        <button
  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200"
  onClick={() => window.location.href = "/signup"}
>
  Get Started
</button>

      </div>
    </section>
  );
};

export default CTA;
