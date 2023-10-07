"use client";


import React from "react";
import { useRouter } from "next/navigation";

export default function DeleteElectronic(props) {
    const router = useRouter();
//   console.log("props id", props.id);

  const deleteRecord = async () => {

    // Delete confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (confirmDelete) {
    try {
      let response = await fetch(`https://mega-mart-shopping.vercel.app/api/electronics/${props.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Product deleted");
        window.location.href = "/userProducts";

      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("An error occurred while deleting the product:", error);
    }
  }
  };

  return <button onClick={deleteRecord}>Delete</button>;
}