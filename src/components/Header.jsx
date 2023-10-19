import React, { useState } from "react";
import Image from "next/image";

import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { BsCart2, BsFillCartCheckFill } from "react-icons/bs";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Search from "./Search";
import Dropdown from "./Dropdown";
import DeptDropdownMenu from "./DeptDropdownMenu";
import ServicesDropdown from "./ServicesDropdown";
import Link from "next/link";
import { setSearchQuery } from "../slices/productSlice";

const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    // Clear the search query
    dispatch(setSearchQuery(""));

    // Redirect to the home page ("/")
    router.push("/");
  };

  return (
    // navbar top
    <div className="w-full  text-white sticky top-0 z-50">
      <div className="w-full h-full border-b-[1px] border-b-white bg-black bg-opacity-80">
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-1 md:gap-2 relative">
          <div
            className="text-3xl  md:hidden text-blue cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <div
            onClick={handleHomeClick}
            className="flex items-center h-12 px-2 lgl:px-5  rounded-full bg-transparent  hover:bg-hoverBg duration-300 cursor-pointer"
          >
            <p className="text-2xl font-bold hidden lgl:flex  ">MegaMart</p>
            <div className="hidden md:flex">
              <Image
                src={"/static/images/mega-mart-logo.png"}
                width={40}
                height={100}
                alt=""
                className="md:mx-1 mx-0"
                loading="lazy"
              />
            </div>
          </div>
          <div className="hidden lgl:flex">
            <DeptDropdownMenu label="Departments">
              <p>Departments</p>
            </DeptDropdownMenu>
          </div>

          {/* <ServicesDropdown label="Servies">
            <p>Services</p>
          </ServicesDropdown> */}

          <div
            onClick={() => router.push("/userProducts")}
            className="md:flex items-center h-20 px-2 rounded-full bg-transparent  gap-2  duration-300 cursor-pointer hidden"
          >
            <BsFillCartCheckFill />
            <div className="">
              <p className="text-sm hidden lg:flex">Seller</p>
              <h2 className="text-base font-semibold -mt-1"></h2>
            </div>
          </div>

          <Search />

          <div
            onClick={() => router.push("/wishlist")}
            className="md:flex hidden items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer"
          >
            <AiOutlineHeart />
            <div className="lgl:block hidden">
              <p className="text-xs">Reorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>

          

          <div className="md:flex hidden items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
            <AiOutlineUser />
            <div onClick={!session ? signIn : signOut}>
              <p className="text-xs hidden lgl:block">
                {session ? `Hello, ${session.user.name}` : ""}
              </p>
             
              {session ? 
                <h2 className="text-base font-semibold -mt-1 hidden lgl:block text-red-500">Logout</h2>
              
               : 
               
               <h2 className="text-base font-semibold hidden lgl:block text-green-500">Sign In</h2>
               }
              
            </div>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative cursor-pointer"
          >
            <BsCart2 className="text-2xl" />
            <p className="text-[10px] -mt-2"> Rs {Math.floor(total * 83)}</p>
            <span className="absolute w-4 h-4 bg-green-500 text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">
              {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------navbar bottom ------------------------------------*/}

      {/* <div className="w-full  mx-auto py-2 px-6 flex items-center justify-around bg-black bg-opacity-90 "> */}

      <div className="bg-black bg-opacity-90">
        <div className="flex items-center font-medium justify-around text-sm">
          <ul className="md:flex py-2 px-6 md:items-center md:justify-around hidden uppercase items-center gap-8 font-[Poppins]">
            <Dropdown />
          </ul>

          {/* Mobile nav */}
          <ul
            className={`
            md:hidden bg-black fixed w-full top-20 overflow-y-auto bottom-0 py-2 pl-4 text-xl
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
          >
            <li className="md:hidden mb-6">
              <div
                onClick={handleHomeClick}
                className="flex items-center h-12 px-2 lgl:px-5 rounded-full bg-transparent  hover:bg-hoverBg duration-300 cursor-pointer"
              >
                <p className="text-2xl font-bold md:hidden flex  ">MegaMart</p>

                <Image
                  src={"/static/images/mega-mart-logo.png"}
                  width={40}
                  height={100}
                  alt=""
                  className="md:mx-1 mx-0"
                  loading="lazy"
                />
              </div>
            </li>
            <li className="flex justify-between">
              <div className="md:hidden flex items-center h-12 px-2 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
                <AiOutlineUser />
                <div onClick={!session ? signIn : signOut}>
                  <p className="text-xs ">
                    {session ? `Hello, ${session.user.name}` : "Sign In"}
                  </p>
                  <h2 className="text-base font-semibold -mt-1 ">Account</h2>
                </div>
              </div>

              <div
                onClick={() => router.push("/wishlist")}
                className="flex md:hidden items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer"
              >
                <AiOutlineHeart />
                <div>
                  <p className="text-xs">Reorder</p>
                  <h2 className="text-base font-semibold -mt-1">My Items</h2>
                </div>
              </div>
            </li>
            <li className="flex justify-between mr-2">
            <div>{""}</div>
            <div
            onClick={() => router.push("/userProducts")}
            className="flex items-center h-20 px-10 rounded-full bg-transparent  gap-2  duration-300 cursor-pointer"
          >
            <BsFillCartCheckFill />
            <div className="">
              <p className="text-sm flex">Seller</p>
              <h2 className="text-base font-semibold -mt-1"></h2>
            </div>
          </div>
            </li>

            <Dropdown />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
