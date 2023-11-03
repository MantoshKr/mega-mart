import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../slices/wishlistSlice";
import ProductCard from "../components/ProductCard";
import Header from "@/components/Header";

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-10 flex justify-center p-4 text-black bg-orange-100 border shadow-md ">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              rating={item.rating}
              ratingcount={item.ratingcount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
