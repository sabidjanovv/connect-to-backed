import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ data, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page or replace with a specific route like "/admin"
  };

  const categoryItems = data?.map((category) => (
    <div
      key={category.id}
      className="w-80 p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow"
    >
      <h1 className="text-lg font-semibold text-gray-800">
        Title: {category.name}
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        Description: {category.description}
      </p>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={() => onEdit(category.id)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(category.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
        >
          Back
        </button>
      </div>
      <div className="flex gap-4 flex-wrap">{categoryItems}</div>
    </div>
  );
};

export default Category;
