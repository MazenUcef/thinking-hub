import React from "react";

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-white min-h-[360px] px-4 py-12 md:px-8 lg:px-16 grid place-items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 max-sm:gap-8">
        <div>
          <h2 className="text-5xl max-md:text-4xl font-bold text-gray-900 mb-3">
            Sign up for our newsletter
          </h2>
          <p className="text-[#414651] mb-6 max-w-2xl text-base">
            Join our community of social innovators and get the latest updates,
            resources, and opportunities — straight to your inbox.
          </p>
        </div>

        {/* Form */}
        <div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="bg-[#008A4A] hover:bg-[#007A3D] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-[#535862] text-sm mt-3">
            We care about your data in our{" "}
            <a href="#" className="underline hover:text-gray-700">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
