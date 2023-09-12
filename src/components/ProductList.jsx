import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { selectSearchQuery } from "../slices/productSlice"; // Import the selector

const ProductList = ({ products }) => {
  const searchQuery = useSelector(selectSearchQuery);

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  
  );

  return (
    <div>
     
      {/* Display Filtered Products */}
      <div className="py-6 px-10 grid 2xl:grid-cols-5 xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {filteredProducts.map(
          ({ id, title, price, description, category, image, rating , ratingcount }) => (
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
    </div>
  );
};

export default ProductList;
