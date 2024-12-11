import React, { useEffect, useState } from "react";
import { request } from "@/api";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CategoryCreate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState({ name: "", description: "" });
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      request
        .get(`/product-category/get/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setCategory(res.data))
        .catch((error) => console.error("Error fetching category:", error));
    }
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const endpoint = id
      ? `/product-category/update/${id}`
      : "/product-category/create";

    try {
      const response = await request({
        method: id ? "PATCH" : "POST",
        url: endpoint,
        data: category,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Category saved:", response.data);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Failed to save category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/admin"); // Navigate to the admin page or replace with desired route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {id ? "Edit Category" : "Create Category"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="name"
            placeholder="Category Name"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
            required
          />
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            name="description"
            placeholder="Category Description"
            rows="4"
            value={category.description}
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
            required
          ></textarea>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : id
                ? "Update Category"
                : "Create Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
