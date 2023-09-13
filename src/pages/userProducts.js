import ProductCard from "@/components/ProductCard";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const UserProductsPage = ({ user }) => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/electronics");
        const data = await response.json();

        console.log("All Products:", data);

      

        console.log("User Email:", user.email);

        // console.log('Product Structure:', products[0]);
        const products = data.result;

        console.log("Product Structure:", typeof products[1]._id);
        const filteredProducts = products.filter(
          (product) => product.addedBy === user.email
        );

        console.log("Product Structure:", products[1]);

        // Set the filtered products in state
        setUserProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchUserProducts();
  }, [user.email]);

  return (
    <div>
      <Header />

      <div className="py-6 px-10 grid 2xl:grid-cols-5 xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {userProducts.map(
          ({
            _id,
            title,
            price,
            description,
            category,
            rating,
            image,
            ratingcount,
          }) => {
            {
              /* const id = parseInt(_id, 16); */
            }
            console.log("Product ID:", typeof id);

            const convertedPrice = parseFloat((price / 83).toFixed(2));

            return (
              <ProductCard
                key={_id}
                id={_id}
                title={title}
                price={convertedPrice}
                description={description}
                category={category}
                image={image}
                rating={rating}
                ratingcount={ratingcount}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default UserProductsPage;

export async function getServerSideProps(context) {
  // Get the user's session
  const session = await getSession(context);

  if (!session) {
    // If the user is not authenticated, redirect to login or handle as needed
    return {
      redirect: {
        destination: "/", // Redirect to login page
        permanent: false,
      },
    };
  }

  // Pass the user object to the component
  return {
    props: {
      user: session.user,
    },
  };
}