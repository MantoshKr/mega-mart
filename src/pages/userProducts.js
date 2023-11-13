import ProductCard from "@/components/ProductCard";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Page from "@/app/addproduct/page";
import { useRouter } from "next/router";
import DeleteElectronic from "@/lib/DeleteElectronic";
import { BsFillPencilFill } from "react-icons/bs";

const UserProductsPage = ({ user }) => {
  const [userProducts, setUserProducts] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(
          "https://mega-mart-shopping.vercel.app/api/electronics"
        );
        const data = await response.json();

        // console.log("All Products:", data);

        // console.log("User Email:", user.email);

        // console.log('Product Structure:', products[0]);
        const products = data.result;

        // console.log("Product Structure:", typeof products[1]._id);
        const filteredProducts = products.filter(
          (product) => product.addedBy === user.email
        );

        // console.log("Product Structure:", products[1]);

        // Set the filtered products in state
        setUserProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchUserProducts();
  }, [user.email]);

  const handleEditClick = (productId) => {
    router.push(`/electronics/${productId}`);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <h1 className="text-3xl font-semibold flex justify-center mt-4 ">
        Hello👋{" "}
        <span className="text-3xl text-green-800 capitalize">
          {session && <div>{session.user.name}</div>}
        </span>
      </h1>
      <p className="flex justify-center mx-5">
        welcome to the seller section , here you can add your product by filling
        the necessary details below{" "}
      </p>

      <div className="mx-5">
        <Page />
      </div>

      <p className="flex justify-center mx-5">
        Note: as soon as you add your product , it will be publicly available in
        the product list along with all the proudcts{" "}
      </p>
      <p className="flex justify-center mb-16">
        you can Edit , delete your listed product
      </p>

      <h1 className="font-semibold text-3xl ml-4 text-green-700">
        Your Listed Products :
      </h1>

      <div className="py-6 px-10 grid 2xl:grid-cols-5 xl:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {userProducts.length === 0 && (
          <div className="text-xl mb-10 ">
            No product has been Listed yet 🛒
          </div>
        )}
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
              <div key={_id} className="relative">
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
                <button
                  onClick={() => handleEditClick(_id)}
                  className="edit-button absolute top-1 left-1 p-2 text-lg pl-3"
                >
                  <BsFillPencilFill style={{ color: "green" }} />
                </button>
                <div className="absolute top-1 left-10">
                  <DeleteElectronic id={_id} />
                </div>
              </div>
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
