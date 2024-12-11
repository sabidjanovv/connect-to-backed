import React, { useEffect, useState } from "react";
import { request } from "@/api";
import Products from "@/components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/product/get")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Home</h1>
      <Products data={products} />
    </div>
  );
};

export default Home;
