import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Category from "../../components/Category";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const token = useSelector((s) => s.token.value);
  const navigate = useNavigate();

  const fetchCategories = () => {
    request
      .get("/product-category/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCategory(res.data))
      .catch((error) => console.error("Error fetching category:", error));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/category-create/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      request
        .delete(`/product-category/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          console.log("Category deleted successfully.");
          fetchCategories(); // Refresh the categories after deletion
        })
        .catch((error) => console.error("Error deleting category:", error));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Categories</h1>
      <Category data={category} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Categories;
