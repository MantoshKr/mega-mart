
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchQuery, setSearchQuery } from "../slices/productSlice";// Import Redux actions and selectors
import { IoSearchOutline } from 'react-icons/io5';

function Search() {
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-green-500 text-black text-xl">
              <IoSearchOutline />
            </span>
          </div>
  );
}

export default Search;
