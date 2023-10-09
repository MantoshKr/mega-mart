"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = (props) => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [ratingcount, setRatingcount] = useState("");
  const router = useRouter();

useEffect(()=>{
    getElectronicDetails();

},[])

const getElectronicDetails = async () => {
    try {
        let electronicId=props.params.editelectronic
      let electronicData = await fetch("https://mega-mart-shopping.vercel.app/api/electronics/"+electronicId);
      // console.log("electronics data:", electronicData);
  
      if (electronicData.ok) {
        // Parse the response body as JSON
        const data = await electronicData.json();
        // console.log("result data:", data); // Log the result here
  
        if (data.success) {
          const result = data.result;
          setCategory(result.category);
          setTitle(result.title);
          setDescription(result.description);
          setPrice(result.price);
          setImage(result.image)
          setRating(result.rating)
          setRatingcount(result.ratingcount)
        } else {
          console.log("Data retrieval was not successful.");
        }
      } else {
        console.log("Fetch request was not successful.");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
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

const updateElectronic = async () => {
    let electronicId = props.params.editelectronic;
    
    // Construct the request body as a JSON object
    const requestBody = {
      category: category,
      title: title,
      image: image,
      price: price,
      description: description,
      rating: rating,
      ratingcount: ratingcount
    };
  
    try {
      let electronicData = await fetch("https://mega-mart-shopping.vercel.app/api/electronics/" + electronicId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await electronicData.json();
  
      if (data.success) {
        alert('Product has been updated');

        router.push("/userProducts")
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
      console.error("An error occurred while updating the product:", error);
    }
  };
  

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">UPDATE PRODUCT</h1>
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
        hidden
      />
      <input
        type="text"
        value={ratingcount}
        onChange={(e) => setRatingcount(e.target.value)}
        placeholder="Product Rating Count"
        className="border border-gray-300 rounded-md p-2 mb-2"
        hidden
      />
      <br />
      <br />
      <button
       onClick={updateElectronic}
        className="bg-green-500 text-black rounded-md py-2 px-4 hover:bg-blue-600"
      >
        UPDATE PRODUCT
      </button>
    </div>
  );
};

export default Page;
