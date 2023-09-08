import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Image from "next/image";
import { TbReload } from "react-icons/tb";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Cart = ({
  id,
  title,
  price,
  description,
  category,
  image,
  popularity,
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
      popularity,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove the item from the redux store
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="md:flex md:items-center md:justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4 gap">
      <div className="md:w-3/4 w-full xs:flex-col sml:flex-row flex items-center gap-2 mt-2">
        <Image className="w-32" width={500} height={500} src={image} alt="" />

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
                popularity: JSON.stringify(popularity),
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

          <div className="mt-2 flex items-center gap-5">
            <div
              onClick={addItemToBasket}
              className=" h-8 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-black cursor-pointer"
            >
              <span>Add More</span>
            </div>
            <div
              onClick={removeItemFromBasket}
              className=" h-8 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3 hover:text-white hover:bg-red-500 cursor-pointer"
            >
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4 w-full text-right flex flex-col md:items-end  sm:mt-0 mt-4 sm:gap-1 gap-2">
        <p className="font-semibold text-xl text-green-600 flex justify-between">
        <span className="md:hidden">Price Now</span>
          Rs {Math.floor(price * 83)}
        </p>
        <p className="text-sm line-through text-zinc-500">
          {" "}
          Rs {(Math.floor(price * 83) * 1.17).toFixed(2)}{" "}
        </p>
        <div className="flex justify-between">
        <div className="md:hidden">{" "}</div>
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
