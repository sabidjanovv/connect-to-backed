import React from 'react'

const Category = ({data}) => {
    const categoryItems = data?.map((category) => (
      <div
        key={category.id}
        className="w-80 p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow"
      >
        <h1 className="text-lg font-semibold text-gray-800">Title: {category.name}</h1>
        <p className="text-sm text-gray-600 mt-1">Description: {category.description}</p>
      </div>
    ));
  return (
    <div className="flex gap-4 flex-wrap container mx-auto mt-5">
      {categoryItems}
    </div>
  );
}

export default Category