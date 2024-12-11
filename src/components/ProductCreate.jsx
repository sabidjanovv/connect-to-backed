import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductCreate = () => {
  const token = useSelector((s) => s.token.value);
  const [categories, setCategories] = useState(null);

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

    request.post("/product/create", product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Product
        </h2>
        <form onSubmit={handleCreateProduct} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="name"
            placeholder="Product Name"
            required
          />
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            name="description"
            placeholder="Product Description"
            rows="4"
            required
          ></textarea>
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            name="image"
            placeholder="Image URL"
            required
          />
          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            name="categoryId"
            required
          >
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
