import React from "react";

const Products = ({ data }) => {
  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.price} USD</p>
    </div>
  ));

  return (
    <div className="flex gap-4 flex-wrap container mx-auto mt-5">
      {productItems}
    </div>
  );
};

export default Products;
