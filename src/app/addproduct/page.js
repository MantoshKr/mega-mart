"use client";

import React, { useState } from "react";
import { getSession } from "next-auth/react";

const Page = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [ratingcount, setRatingcount] = useState("");

  const addProduct = async () => {
    try {
      // Getting the user's session information
      const session = await getSession();
      // console.log("Session:", session);
      if (!session) {
        // Handling the case where the user is not logged in
        alert("You must be logged in to add a product");
        return;
      }

      const addedBy = session.user.email;

      // console.log("addedBY", addedBy);

      const productData = {
        category,
        image,
        title,
        description,
        price,
        rating,
        ratingcount,
        addedBy,
      };

      //   const id = parseInt(productData.id);

      //     console.log("ID:", productData._id);
      // console.log("ID data type:", typeof productData._id);

      // Validate the form
      const isFormValid = validateForm();
      if (!isFormValid) {
        return; // Stop execution if validation fails
      }

     
    

     
    

      let result = await fetch("https://mega-mart-shopping.vercel.app/api/electronics", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result.success) {
        alert(
          "product added successfully . \n please refresh the page to see your product"
        );

        setCategory("");
        setImage("");
        setTitle("");
        setDescription("");
        setPrice("");
        setRating("");
        setRatingcount("");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const validateForm = () => {
    if (
      !category ||
      !image ||
      !title ||
      !description ||
      !price 
    ) {
      alert("Please fill in all the required fields.");
      return false;
    }
    return true;
  };

  const handleImageChange = (e) => {
    const inputValue = e.target.value; // Convert to lowercase for case-insensitive comparison
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    // Check if the input value ends with a valid image extension
    const isValidImage = validExtensions.some((ext) => inputValue.endsWith(ext));

    if (isValidImage) {
      setImage(inputValue); // Set the image state if it's a valid URL
    } else {
      alert("Invalid image URL. Please enter a URL with a valid image extension.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">ADD PRODUCT</h1>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Product Category"
        className="border border-gray-300 rounded-md p-2 mb-2"
        required
      />
      <input
        type="text"
        value={image}
        onChange={handleImageChange}
        required
        className="border border-gray-300 rounded-md p-2 mb-2"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product Title"
        className="border border-gray-300 rounded-md p-2 mb-2"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        className="border border-gray-300 rounded-md p-2 mb-2"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        className="border border-gray-300 rounded-md p-2 mb-2"
        required
      />
      <input
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Product Rating"
        className="border border-gray-300 rounded-md p-2 mb-2"
        
      />
      <input
        type="text"
        value={ratingcount}
        onChange={(e) => setRatingcount(e.target.value)}
        placeholder="Product Rating Count"
        className="border border-gray-300 rounded-md p-2 mb-2"
       
      />
      <br />
      <br />
      <button
        onClick={addProduct}
        className="bg-green-500 text-black rounded-md py-2 px-4 hover:bg-blue-600"
      >
        ADD PRODUCT
      </button>
    </div>
  );
};

export default Page;
