import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, selectSortBy } from "../slices/productSlice";

const SortBy = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    dispatch(setSortBy(selectedSortBy));
  };

  return (
    <div className="flex justify-between border-solid-black border border-gray-300 shadow-md  bg-gray-50">
    <div>{""}</div>
    <div className="mr-3 sm:mr-5 md:mr-10 border-solid-black border bg-gray-200 border-gray-400 rounded-lg shadow-md my-1 mb-2 hover:bg-gray-300">
      <label htmlFor="sort" className=" ml-0.5 md:ml-1 text-xs md:text-sm">Sort By:</label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={sortBy}
        className="bg-gray-200 hover:bg-gray-300  cursor-pointer mr-0.5 md:mr-1 text-xs md:text-sm"
      >
        <option value=""> Select Sorting Option</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="ratingcount-desc">Avg. Customber Review</option>
        <option value="rating-desc">Rating: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
      </div>
    </div>
  );
};

export default SortBy;
