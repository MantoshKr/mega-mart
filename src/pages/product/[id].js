import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

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
      <Header />

      <div className="w-full bg-white">
        <div className="max-w-contentContainer mx-auto flex items-center py-4">
          <div className="w-[60%]  h-full flex items-center justify-center overflow-hidden relative">
            <img
              src={image}
              alt=""
              className="w-[50%] transform-origin-top-left cursor-move duration-500"
            />
          </div>
          <div className="w-[40%] h-full flex flex-col gap-2">
            <p className="p-2 text-blue text-sm font-semibold border border-gray-400 rounded-md ">
              100+ bought in last 24 hours
            </p>
            <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6 ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="px-2 py-[1px] text-green-600 text-sm border-[1px] border-green-600 rounded-sm">
                    Best Seller
                  </button>
                  <button className="px-2 py-[1px] text-red-500 text-sm border-[1px] border-red-500 rounded-sm">
                    Rollback
                  </button>
                </div>
                <AiOutlineHeart className="text-gray-600 text-2xl" />
              </div>
              {/* product details */}
              <div className="flex flex-col gap-1">
                <p className="text-sm underline underline-offset-4">
                  {category}
                </p>

                <p className="text-xl font-semibold text-black">{title}</p>
                <p className="text-base text-zinc-500">{description}</p>
                <div className="flex items-end gap-2">
                  <p className="font-semibold text-2xl text-[#438228] ">
                    Now Rs {Math.floor(price * 83)}
                  </p>
                  <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                    {/* old price */}
                    Rs {(Math.floor(price * 83) * 1.17).toFixed(2)}{" "}
                    <span className="mb-1">
                      <BsInfoCircle />
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-sm text-black flex flex-col gap-1">
                <p>
                  <span className="font-semibold"> Rs ________ emi/month</span>{" "}
                  <span className="font-bold"> with HDFC credit card</span>{" "}
                  <span className="underline underline-offset-2">
                    {" "}
                    Learn more
                  </span>{" "}
                </p>
                <p className="text-xs text-zinc-500 flex items-center gap-1">
                  Price when purchased online
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
