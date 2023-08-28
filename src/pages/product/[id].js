import { useRouter } from "next/router";
import { useEffect } from "react";


const ProductDetailsPage = () => {
  const router = useRouter();
  const { id, title, price, description, category, image, popularity } =
    router.query;



  useEffect(() => {
    console.log("Product ID:", id);
    console.log("Product Title:", title);
    console.log("Product Price:", price);
    console.log("Product Description:", description);
    console.log("Product Category:", category);
    console.log("Product Image:", image);
    console.log("Product Popularity:", popularity);
  
  }, [id, title, price, description, category, image, popularity]);

  return (
    <div>
     ProductDetailsPage
    </div>
  );
};

export default ProductDetailsPage;

