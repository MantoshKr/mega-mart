import React, { useState } from "react";
import Link from "next/link";
import { links } from "./DropdownLink";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; 

const Dropdown = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div>
            <div className="px-3 text-left md:cursor-pointer group md:hover:color-blue">
              <h1
                className="py-1 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-xl md:hidden inline">
                  {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
                </span>
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 ">
                  <FiChevronDown />
                </span>
              </h1>
              {link.submenu && (
                <div className="absolute top-8 hidden group-hover:md:block hover:md:block w-[30%] lgl:w-[50%] h-[50%]  transform -translate-x-1/2 shadow-2xl">
                  {/* transform -translate-x-1/2 right-0 z-50 */}
                  {/* className="absolute top-10 right-0 hidden group-hover:md:block hover:md:block z-50 transform translate-x-full" */}
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-[50%] absolute 
                      mt-1 bg-white   rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white text-black font-bold  p-5 flex flex-wrap justify-between gap-5 max-h-96 overflow-y-auto">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className="">
                        <h1 className="text-lg font-semibold  ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-500 hover:text-blue my-0.5 list-none">
                            <Link href={slink.link}>
                              <span className="hover:text-primary">
                                {slink.name}
                              </span>
                            </Link>
                          </li>
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
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                    >
                      {slinks.Head}
                      <span className="text-xl md:mt-1 md:ml-2 inline">
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
                        <li className="py-3 pl-14" key={slink.name}>
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
