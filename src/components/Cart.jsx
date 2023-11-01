import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Image from "next/image";
import { TbReload } from "react-icons/tb";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  addToSaveForLater,
  removeFromSaveForLater,
  selectSaveForLaterItems,
} from "../slices/saveForLaterSlice";
import RenderStars from "./StarRating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../slices/wishlistSlice";

const Cart = ({
  id,
  title,
  price,
  description,
  category,
  image,
  ratingcount,
  rating,
  hideButton,
}) => {
  const items = useSelector(selectItems);

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
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove the item from the redux store
    dispatch(removeFromBasket({ id }));
  };

  const saveForLaterItems = useSelector(selectSaveForLaterItems);

  const handleAddToSaveForLater = (item) => {
    // Dispatch action to save item for later
    dispatch(
      addToSaveForLater({
        id,
        title,
        price,
        image,
        description,
        ratingcount,
        rating,
      }),
    );

    dispatch(removeFromBasket({ id }));
  };

  const handleremoveFromSaveForLater = (item) => {
    // Dispatch action to save item for later
    dispatch(
      addToBasket({
        id,
        title,
        price,
        image,
        description,
        ratingcount,
        rating,
      }),
    );

    // Dispatch action to remove item from the cart
    dispatch(removeFromSaveForLater({ id }));
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
    <div className="mdl2:flex mdl2:items-center mdl2:justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4 gap ">
      <div className="mdl2:w-3/4 w-full xs:flex-col sml2:flex-row flex items-center gap-2 mt-2 relative">
        <Image
          className="w-32"
          width={500}
          height={500}
          src={image}
          alt=""
          loading="lazy"
        />

        <p
          className="absolute sml2:top-2 sml2:left-24 top-2 left-4 text-2xl sml2:text-xl cursor-pointer"
          onClick={toggleWishlist}
        >
          {isItemInWishlist ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart />
          )}
        </p>

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
                rating: rating,
                ratingcount: ratingcount,
              },
            }}
          >
            <h2 className="text-base text-zinc-900 font-bold hover:text-blue">
              {title}
            </h2>
          </Link>
          <p className="text-sm text-zinc-500">{description}</p>
          <p className="text-sm text-zinc-500">Rs {Math.floor(price * 83)}</p>
          <p className="text-sm text-zinc-500 flex items-center gap-1">
            <span className="bg-green-600 rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
              <TbReload className="rotate-270" />
            </span>
            Free 90-day returns
          </p>
          <p className="flex items-center gap-1">
            <span className="flex">
              <RenderStars rating={rating} />
            </span>
            <span className="text-sm"> {ratingcount}</span>
          </p>

          <div className="mt-2 sm2:flex sm2:items-center inline-block gap-5 ">
            {!hideButton && (
              <div
                onClick={addItemToBasket}
                className=" h-8 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-black cursor-pointer sm2:mt-0 mt-1"
              >
                <span>Add More</span>
              </div>
            )}
            {!hideButton && (
              <div
                onClick={removeItemFromBasket}
                className=" h-8 border  border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-black cursor-pointer sm2:mt-0 mt-1"
              >
                <span>Remove</span>
              </div>
            )}

            {!hideButton && (
              <div
                onClick={handleAddToSaveForLater}
                className=" h-8 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-green-500 cursor-pointer sm2:mt-0 mt-1"
              >
                <span>Save for later</span>
              </div>
            )}

            {hideButton && (
              <div
                onClick={handleremoveFromSaveForLater}
                className=" h-8 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-red-500 cursor-pointer"
              >
                <span>Add back to cart</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mdl2:w-1/4 w-full text-right flex flex-col mdl2:items-end  sm:mt-0 mt-4 sm:gap-1 gap-2">
        <p className="font-semibold text-xl text-green-600 flex justify-between">
          <span className="mdl2:hidden">Price Now</span>
          Rs {Math.floor(price * 83)}
        </p>
        <p className="text-sm line-through text-zinc-500">
          {" "}
          Rs {(Math.floor(price * 83) * 1.17).toFixed(2)}{" "}
        </p>
        <div className="flex justify-between">
          <div className="mdl2:hidden"> </div>
          <div className="flex items-center text-xs gap-2">
            <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
              You Save
            </p>
            <p className="text-green-600 font-semibold">
              Rs {(Math.floor(price * 83) * 0.17).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
