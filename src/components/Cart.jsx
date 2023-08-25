import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Image from "next/image";

const Cart = ({
  id,
  title,
  price,
  description,
  category,
  image,
  popularity,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4">
      <div className="w-3/4 flex items-center gap-2 mt-2">
        <Image className="w-32" width={500} height={500} src={image} alt="" />
        <div>
        <h2 className="text-base text-zinc-900">{title}</h2>
        <p className="text-sm text-zinc-500">{description}</p>
        <p className="text-sm text-zinc-500">Rs {Math.floor(price * 83)}</p>  
        </div>
      </div>
    </div>
  );
};

export default Cart;
