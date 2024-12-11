import React, { useEffect, useState } from 'react'
import { request } from '../../api';
import Category from '../../components/Category';

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    request
      .get("/product-category/get")
      .then((res) => setCategory(res.data))
      .catch((error) => console.error("Error fetching category:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Categories</h1>
      <Category data={category} />
    </div>
  );
}

export default Categories