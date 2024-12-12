import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center animate-fadeIn">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-[12rem] font-extrabold drop-shadow-lg leading-none">
            404
          </h1>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-pink-400 opacity-80 animate-bounce">
            🚀
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold mt-4 drop-shadow-lg">
          Oops! Page Not Found
        </h2>
        <p className="text-lg mt-2">
          We can't find the page you're looking for. Let's get you back home!
        </p>

        {/* Animated Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out transform animate-pulse"
        >
          Go Back to Home
        </button>
      </div>

      {/* Floating Decoration */}
      <div className="absolute bottom-10 flex space-x-4 opacity-50">
        <div className="w-6 h-6 bg-white rounded-full animate-float1"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-float2"></div>
        <div className="w-10 h-10 bg-white rounded-full animate-float3"></div>
      </div>
    </section>
  );
};

export default NotFound;
