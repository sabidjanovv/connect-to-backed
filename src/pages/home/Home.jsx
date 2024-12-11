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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center text-white">
      <div className="w-full max-w-4xl text-center my-8">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Our Store</span>
        </h1>
        <p className="text-lg font-medium">
          Explore a wide range of high-quality products curated just for you.
        </p>
      </div>

      <div className="w-full max-w-6xl bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Our Products
        </h2>
        <Products data={products} />
      </div>

      <footer className="mt-12 text-center text-sm">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
