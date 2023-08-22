import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const ProductCard = ({ id, title, price, description, category, image , popularity }) => {
  // const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const ratingValue = popularity.rate;
  const validRatingValue = Math.max(0, Math.min(5, Math.floor(ratingValue)));
  const [hasPlus] = useState(Math.random() < 0.5);
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
    dispatch(addToBasket(product));
  };
  

  return (
    <div>
      <div className=" border-gray-200 bg-white mb-6 group">
        <div className="w-full h-80 overflow-hidden p-6">
          <Image
            className="w-full h-full object-contain scale-100 group-hover:scale-105  duration-300"
            alt="img"
            width={300}
            height={250}
            src={image}
          />
        </div>
        <div className="px-2 py-4  flex flex-col justify-center">
          <div className="flex justify-between py-2">
            <button onClick={addItemToBasket} className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300 ">
              <span>
                <GoPlus />
              </span>
              Add
            </button>
            <button className="w-24 h-9 bg-white border-[1px] border-black gap-1 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300">
              Options
            </button>
          </div>
          <div className="flex item-center gap-3">
            <p className="font-titleFont text-lg text-green-700 font-semibold">
              Now Rs {Math.floor(price * 83)}
            </p>
            <p className="text-gray-500 line-through decoration-[1px]">
              old price
            </p>
          </div>
          <p>{title.substring(0, 25)}</p>
          <p>{description.substring(0, 70)}...</p>
          <div className="flex gap-2 items-center text-sm mt-2 justify-between">
            <div className="flex text-sm gap-1">
              {Array(validRatingValue)
                .fill()
                .map((_, i) => (
                  <AiFillStar key={i} style={{ color: "#F5AC3B" }} />
                ))}
                {popularity.count}
            
            </div>
            {hasPlus && (
              <div className="font-bold text-green-600 flex justify-center items-center mx-2 w-8 cursor-pointer">
                <Image src="/assets/images/Mplus.svg" alt="" width={30} height={30} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
