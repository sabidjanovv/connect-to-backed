import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const token = useSelector((s) => s.token.value);
  const [categories, setCategories] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    request.get("/product-category/get").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    product.price = +product.price;
    product.categoryId = +product.categoryId;
    product.stock = +product.stock;
    product.average_rating = 0;

    request
      .post("/product/create", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Product created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        alert("Failed to create product. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 to-indigo-500 p-6">
      <div className="bg-white shadow-lg rounded-xl px-10 py-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-indigo-600">
            Create Product
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Back
          </button>
        </div>
        <form onSubmit={handleCreateProduct} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              type="text"
              name="name"
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Description
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              name="description"
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              type="number"
              name="price"
              placeholder="Enter product price"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              type="text"
              name="image"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              name="categoryId"
              required
            >
              <option value="">Select a category</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock Quantity
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
