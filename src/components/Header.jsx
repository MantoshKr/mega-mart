import React, { use } from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";
import { signIn , signOut , useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";




const Header = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const router=useRouter();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    // navbar top
    <div className="w-full  text-white sticky top-0 z-50">
      <div className="w-full h-full border-b-[1px] border-b-white bg-black bg-opacity-80">
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
          <div onClick={()=>router.push("/")} className="flex items-center h-12 px-5 rounded-full bg-transparent  hover:bg-hoverBg duration-300 cursor-pointer">
            <p className="text-2xl font-bold  ">MegaMart</p>
            <Image
              src="/assets/images/mega-mart-logo.png"
              width={40}
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
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-green-500 text-black text-xl">
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
            <div onClick={!session ? signIn : signOut} >
              <p className="text-xs">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
              </p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>

          <div onClick={()=>router.push("/checkout")} className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative cursor-pointer">
            <BsCart2 className="text-2xl" />
            <p className="text-[10px] -mt-2"> Rs {Math.floor(total * 83)}</p>
            <span className="absolute w-4 h-4 bg-green-500 text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">
              {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------navbar bottom ------------------------------------*/}

      <div className="w-full mx-auto py-2 px-6 flex items-center justify-between bg-black bg-opacity-90">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/phone.webp"
              width={27}
              height={100}
              alt=""
              className=""
            />
            <p className="text-sm font-semibold">How do you want your items?</p>
            <FiChevronDown />
            <span className="w-[1px] h-4 bg-white iniline-flex ml-2 "></span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineLocationOn />
            <p className="text-sm text-zinc-100">Gurugram, 122018</p>
            <FaPlaceOfWorship />
            <p className="text-sm text-zinc-100">Gurugram Megacenter</p>
          </div>
        </div>
        <ul className="flex gap-6 text-sm font-semibold">
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Mobiles
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Electronics
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Motors
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Sports
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Fashion
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Home & Garden
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            Grocery
          </li>
          <li className="hover:underline underline-offset-2 cursor-pointer decoration-[1px]">
            sell
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
