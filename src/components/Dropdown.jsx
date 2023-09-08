import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "./DropdownLink";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FcBusinessman, FcBusinesswoman, FcElectronics, FcHome, FcSportsMode } from "react-icons/fc";
import { FaBabyCarriage } from "react-icons/fa";

const Dropdown = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isXtraSmallScreen, setIsXtraSmallScreen] = useState(false);




  useEffect(() => {
    // Add an event listener to detect screen width changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 900 && window.innerWidth < 1140);
    setIsXtraSmallScreen(window.innerWidth >= 667 && window.innerWidth < 900);
    };
  
    // Initial check for screen width
    handleResize();
  
    // Attach the event listener
    window.addEventListener("resize", handleResize);
  
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
   
      {links.map((link) => (
        <div key={link.name}>
          <div>
            <div className="px-3 text-left md:cursor-pointer group md:hover:color-blue">
              <h1
                className="py-2 md:py-1 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
              

               {isSmallScreen && !isXtraSmallScreen && (
                <>
                  {link.name === "Baby & Kids"
                    ? "Kids"
                    : link.name === "Home & Furniture"
                    ? "Home"
                    : link.name === "Sports, Books & More"
                    ? "More"
                    : link.name}
                </>
              )}
              {isXtraSmallScreen && (
                <>
                  {link.name === "Baby & Kids"
                    ? <FaBabyCarriage className="text-2xl"/>
                    : link.name === "Home & Furniture"
                    ? <FcHome className="text-2xl"/>
                    : link.name === "Sports, Books & More"
                    ? <FcSportsMode className="text-2xl"/>
                    : link.name === "Electronics"
                    ? <FcElectronics className="text-2xl"/>
                    : link.name === "Men"
                    ? <FcBusinessman className="text-2xl"/>
                    : link.name === "Women"
                    ? <FcBusinesswoman className="text-2xl"/>
                    : link.name}
                </>
              )}
              {!isSmallScreen && !isXtraSmallScreen && link.name}

                <span className="text-xl md:hidden inline">
                  {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
                </span>
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 ">
                  <FiChevronDown />
                </span>
              </h1>
              {link.submenu && (
                <div className="absolute top-28 hidden group-hover:md:block hover:md:block w-[90%] lgl:w-[80%] xl:w-[70%] h-[70%]  transform -translate-x-1/2 md:left-1/2 left-0  ">
                  {/* transform -translate-x-1/2 right-0 z-50 */}
                  {/* className="absolute top-10 right-0 hidden group-hover:md:block hover:md:block z-50 transform translate-x-full" */}
                  <div className="py-3">
                    {/* <div
                      className="w-4 h-4 left-[50%] absolute
                      mt-1 bg-white   rotate-45  "
                    ></div> */}
                  </div>
                  <div className="bg-white text-black font-bold  p-5 grid grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-5 max-h-96 overflow-y-auto">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className="">
                        <h1 className="text-lg font-semibold  ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <div key={slink.name}>
                          <li className="text-sm text-gray-500 hover:text-blue my-0.5 list-none">
                            <Link href={slink.link}>
                              <span className="hover:text-primary">
                                {slink.name}
                              </span>
                            </Link>
                          </li>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Mobile menus */}
            <div
              className={`
                ${heading === link.name ? "md:hidden" : "hidden"}
              `}
            >
              {/* sublinks */}
              {link.sublinks.map((slinks) => (
                <div key={slinks.Head}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 text-sm font-semibold md:pr-0 pr-5 flex justify-between items-center "
                    >
                      {slinks.Head}
                      <span className="text-sm md:mt-1 md:ml-2 inline">
                        {subHeading === slinks.Head ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li className="py-3 pl-14 text-sm" key={slink.name}>
                          <Link href={slink.link}>
                            <span>{slink.name}</span>
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Dropdown;
