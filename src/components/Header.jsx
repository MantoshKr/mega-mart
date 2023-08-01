import React from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
 import { FiChevronDown } from "react-icons/fi";


const Header = () => {
  return (
    // navbar top
    <div className="w-full bg-blue text-white p-2">
      <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
        <div className="flex items-center h-12 px-5 rounded-full bg-transparent  hover:bg-hoverBg duration-300 cursor-pointer">
          <p className="text-2xl font-bold  ">MegaMart</p>
          <Image
            src="/assets/images/logo.png"
            width={30}
            height={100}
            alt=""
            className="mx-1"
          />
        </div>

        <div className="flex items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
          <div className="w-4 grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
          </div>
          <p>Departments</p>
        </div>

        <div className="flex items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
          <div className="w-4 grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
          </div>
          <p>Services</p>
        </div>

        <div className="h-10 flex flex-1 relative">
          <input
            className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
            type="text"
            placeholder="Search for products, brands and more"
          />
          <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
            <IoSearchOutline />
          </span>
        </div>

        <div className="flex items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
          <AiOutlineHeart />
          <div>
            <p className="text-xs">Reorder</p>
            <h2 className="text-base font-semibold -mt-1">My Items</h2>
          </div>
        </div>

        <div className="flex items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
          <AiOutlineUser />
          <div>
            <p className="text-xs">Sign In</p>
            <h2 className="text-base font-semibold -mt-1">Account</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative">
          <BsCart2 className="text-2xl" />
          <p className="text-[10px] -mt-2">$0.00</p>
          <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">
            0
          </span>
        </div>
      </div>

    </div>
  );
};

export default Header;
