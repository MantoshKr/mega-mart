import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Link from "next/link";
import { useEffect } from "react";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../slices/wishlistSlice";
import RenderStars from "./StarRating";
const MIN_RATING = 1;
const MAX_RATING = 5;

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  ratingcount,
  rating,
}) => {
  const [hasPlus, setHasPlus] = useState(false);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      ratingcount,
      rating,
    };
    dispatch(addToBasket(product));
  };

  const wishlistItems = useSelector(selectWishlistItems);
  const isItemInWishlist = wishlistItems.some((item) => item.id === id);

  const toggleWishlist = () => {
    if (isItemInWishlist) {
      dispatch(removeFromWishlist({ id }));
    } else {
      dispatch(
        addToWishlist({
          id,
          title,
          price,
          image,
          description,
          ratingcount,
          rating,
        }),
      );
    }
  };

  return (
    <div>
      <Link
        href={{
          pathname: `/product/${id}`,
          query: {
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            ratingcount: ratingcount,
            rating: rating,
          },
        }}
      >
        <div className=" border-gray-200 bg-white lg:mb-4 lgl:mb-6 group">
          <div className="w-full h-80 overflow-hidden p-6 relative">
            <Image
              className="w-full h-full object-contain scale-100 group-hover:scale-105  duration-300"
              alt="img"
              width={300}
              height={250}
              src={image}
              loading="lazy"
            />
            <p
              className="absolute top-4 right-4 text-2xl cursor-pointer"
              onClick={toggleWishlist}
            >
              {isItemInWishlist ? (
                <AiFillHeart style={{ color: "red" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </p>
          </div>
          <div className="px-2 py-4  flex flex-col justify-center">
            <div className="flex justify-between py-2">
              <button
                onClick={addItemToBasket}
                className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300 "
              >
                <span>
                  <GoPlus />
                </span>
                Add
              </button>

              <Link
                href={{
                  pathname: `/product/${id}`,
                  query: {
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image,
                    ratingcount: ratingcount,
                    rating: rating,
                  },
                }}
              >
                <button className="w-24 h-9 bg-white border-[1px] border-black gap-1 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
                  Options
                </button>
              </Link>
            </div>
            <div className="flex item-center gap-3">
              <p className="font-titleFont text-lg text-green-700 font-semibold">
                Now Rs {Math.floor(price * 83)}
              </p>
              <p className="text-gray-500 line-through decoration-[1px]">
                Rs {(Math.floor(price * 83) * 1.17).toFixed(2)}
              </p>
            </div>
            <p>{title.substring(0, 25)}</p>
            <p>{description.substring(0, 70)}...</p>
            <div className="flex gap-2 items-center text-sm mt-2 justify-between">
              <div className="flex text-sm gap-1">
                <RenderStars rating={rating} />
                {ratingcount}
              </div>
              {hasPlus && (
                <div className="font-bold text-green-600 flex justify-center items-center mx-2 w-8 cursor-pointer">
                  <Image
                    src="/assets/images/Mplus.svg"
                    alt=""
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
