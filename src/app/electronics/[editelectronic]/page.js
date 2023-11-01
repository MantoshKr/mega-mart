"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    getElectronicDetails();
  }, []);

  const getElectronicDetails = async () => {
    try {
      let electronicId = props.params.editelectronic;
      let electronicData = await fetch(
        "https://mega-mart-shopping.vercel.app/api/electronics/" + electronicId,
      );
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
          setImage(result.image);
          setRating(result.rating);
          setRatingcount(result.ratingcount);
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
    const isValidImage = validExtensions.some((ext) =>
      inputValue.endsWith(ext),
    );

    if (isValidImage) {
      setImage(inputValue); // Set the image state if it's a valid URL
    } else {
      alert(
        "Invalid image URL. Please enter a URL with a valid image extension.",
      );
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
      ratingcount: ratingcount,
    };

    try {
      let electronicData = await fetch(
        "https://mega-mart-shopping.vercel.app/api/electronics/" + electronicId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        },
      );

      const data = await electronicData.json();

      if (data.success) {
        alert("Product has been updated");

        router.push("/userProducts");
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("An error occurred while updating the product:", error);
    }
  };

  const containerStyle = {
    margin: "10px auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    maxWidth: "600px",
    backgroundColor: "white",
    padding: "1rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
    borderRadius: "0.375rem",
    marginBottom: "0.75rem",
    marginTop: "20px",
  };

  const textStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    justifyContent: "center",
    display: "flex",
  };

  const inputStyle = {
    border: "1px solid #E5E7EB",
    borderRadius: "0.375rem",
    padding: "0.75rem",
    marginBottom: "0.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#27AE60",
    color: "#000000",
    borderRadius: "0.375rem",
    padding: "0.7rem 1rem",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>UPDATE PRODUCT</h1>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Product Category"
        style={inputStyle}
        required
      />
      <input
        type="text"
        value={image}
        onChange={handleImageChange}
        required
        style={inputStyle}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product Title"
        style={inputStyle}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        style={inputStyle}
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        style={inputStyle}
        required
      />
      <input
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Product Rating"
        style={inputStyle}
        hidden
      />
      <input
        type="text"
        value={ratingcount}
        onChange={(e) => setRatingcount(e.target.value)}
        placeholder="Product Rating Count"
        style={inputStyle}
        hidden
      />
      <br />
      <br />
      <button onClick={updateElectronic} style={buttonStyle}>
        UPDATE PRODUCT
      </button>
    </div>
  );
};

export default Page;
