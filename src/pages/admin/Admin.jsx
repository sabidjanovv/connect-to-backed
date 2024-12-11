import ProductCreate from "@/components/ProductCreate";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Manage Products and Categories</p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate("/category-create")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Category
        </button>
        <button
          onClick={() => navigate("/categories")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Categories
        </button>
        <button
          onClick={() => navigate("/product-create")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Create Product
        </button>
      </div>
    </div>
  );
};

export default Admin;
