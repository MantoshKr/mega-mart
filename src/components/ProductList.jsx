import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import {
  selectPriceRange,
  selectSearchQuery,
  selectSortBy,
} from "../slices/productSlice"; // Import the selector

const ProductList = ({ products }) => {
  const searchQuery = useSelector(selectSearchQuery);
  const sortBy = useSelector(selectSortBy);
  const priceRange = useSelector(selectPriceRange);

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts];

  if (sortBy === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "name-desc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortBy === "ratingcount-desc") {
    sortedProducts.sort((a, b) => b.ratingcount - a.ratingcount);
  } else if (sortBy === "rating-desc") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      {/* Display sorted Products */}

      {sortedProducts.length === 0 ? ( // Check if no products are found
        <div className="text-center py-2 md:py-6 text-gray-600 text-xl">
          <p className="mb-5 md:mb-36 mdl:mb-44 lg:mb-52 lgl:mb-64 xl:mb-80 text-xl lg:text-2xl font-bold">
            No product found
          </p>
        </div>
      ) : (
        <div className="py-2 md:py-6 lg:px-10 grid 2xl:grid-cols-5 xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  z-40 relative xl:-mt-80 lgl:-mt-64 lg:-mt-52 mdl:-mt-44 md:-mt-36">
          {sortedProducts.map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
              rating,
              ratingcount,
            }) => (
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating}
                ratingcount={ratingcount}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
