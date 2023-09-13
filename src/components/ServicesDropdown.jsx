import React, { useState, useEffect, useRef } from "react";
import { links } from "./ServicesDropdownLink";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setSearchQuery } from "../slices/productSlice";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu1, setActiveSubMenu1] = useState(null);
  const [activeSubMenu2, setActiveSubMenu2] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu1 = (index) => {
    setActiveSubMenu1(index === activeSubMenu1 ? null : index);
    setActiveSubMenu2(null);
  };

  const toggleSubMenu2 = (index) => {
    setActiveSubMenu2(index === activeSubMenu2 ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setActiveSubMenu1(null);
      setActiveSubMenu2(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (categoryName) => {
    categoryName = categoryName.replace(/^\//, "");
    
    dispatch(setSearchQuery(categoryName));

    router.push("/");
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className=" lgl:flex items-center h-12 px-5 rounded-full bg-transparent  gap-2 hover:bg-hoverBg duration-300 cursor-pointer hidden "
      >
        <div className="w-4 grid grid-cols-2 gap-[2px]">
          <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
          <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
          <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
          <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
        </div>
        <p>Services</p>
      </div>

      {isOpen && (
        <div className="absolute top-14 right-12  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 cursor-pointer grid grid-cols-1">
          {/* Dropdown content */}
          <div className="py-1">
            {links.map((category, index) => (
              <div key={index}>
                <a
                  href={`#${category.name.toLowerCase().replace(/ /g, "-")}`}
                  className=" px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100 grid grid-cols-1"
                  onClick={() => toggleSubMenu1(index)}
                >
                  {category.name}
                </a>

                {activeSubMenu1 === index && category.submenu && (
                  <div className="pl-4 absolute top-0 right-[77%] w-64 left-44 ">
                    {category.sublinks.map((submenu1, subIndex1) => (
                      <div key={subIndex1}>
                        <a
                          href={submenu1.link}
                          className="block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-100 "
                          onClick={() => toggleSubMenu2(subIndex1)}
                        >
                          {submenu1.Head}
                        </a>
                        {activeSubMenu2 === subIndex1 && submenu1.sublink && (
                          <div className="pl-4 absolute left-[100%] top-0 bg-white w-64 ">
                            {submenu1.sublink.map((submenu2, subIndex2) => (
                              <a
                                key={subIndex2}
                                onClick={() => handleCategoryClick(submenu2.link)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {submenu2.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div>
              <a
                href="#additional-link-1"
                className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                Additional Menu
              </a>
              <a
                href="#additional-link-1"
                className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                Additional Menu
              </a>
              <a
                href="#additional-link-1"
                className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                Additional Menu
              </a>
              <a
                href="#additional-link-1"
                className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                Additional Menu
              </a>
              <a
                href="#additional-link-1"
                className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              >
                Additional Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
