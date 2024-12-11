// import ProductCreate from "@/components/ProductCreate";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-800">
          Admin Dashboard
        </h1>
        <p className="text-lg text-blue-600 mt-2">
          Manage Products and Categories with Ease
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4">
        <button
          onClick={() => navigate("/category-create")}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Create Category
        </button>
        <button
          onClick={() => navigate("/categories")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View Categories
        </button>
        <button
          onClick={() => navigate("/product-create")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Create Product
        </button>
      </div>

      {/* <div className="mt-10">
        <ProductCreate />
      </div> */}
    </div>
  );
};

export default Admin;
