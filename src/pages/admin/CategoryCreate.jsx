// Category.jsx
import React, { useState } from "react";
import { request } from "@/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryCreate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let formData = new FormData(e.target);
    const category = Object.fromEntries(formData);

    try {
      const response = await request.post("/product-category/create", category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Category created:", response.data);
      navigate("/admin"); 
    } catch (err) {
      console.error(err);
      setError("Failed to create category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Category
        </h2>
        <form onSubmit={handleCreateCategory} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="name"
            placeholder="Category Name"
            required
          />
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            name="description"
            placeholder="Category Description"
            rows="4"
            required
          ></textarea>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
