import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id, title, price, description, category, image, popularity } =
    router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Product ID:", id);
    console.log("Product Title:", title);
    console.log("Product Price:", price);
    console.log("Product Description:", description);
    console.log("Product Category:", category);
    console.log("Product Image:", image);
    console.log("Product Popularity:", popularity);
  }, [id, title, price, description, category, image, popularity]);

  const addItemToBasket = () => {
    const parsedPrice = parseFloat(price);
    const product = {
      id,
      title,
      price: parsedPrice,
      description,
      category,
      image,
      popularity,
    };
    dispatch(addToBasket(product));
  };

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
            <p className="p-2 text-green-700 text-sm font-semibold border border-gray-400 rounded-md ">
              100+ bought in last 24 hours
            </p>
            <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6 ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="px-2 py-[1px] text-green-600 text-sm border-[1px] border-green-600 rounded-sm">
                    Best Seller
                  </button>
                  <button className="px-2 py-[1px] text-green-600 text-sm border-[1px] border-green-600 rounded-sm">
                    Reduced price
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
                    <span className="mb-1 cursor-pointer hover:text-blue">
                      <BsInfoCircle />
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-sm text-black flex flex-col gap-1">
              <p className="font-bold">
              EMI options available :
              </p>
                <p>
                  <span className="font-semibold">
                    {Math.floor(price * 83) > 500 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 2).toFixed(2)} / month @
                        {2} months
                      </p>
                    )}
                    {Math.floor(price * 83) > 1000 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 3).toFixed(2)} / month @
                        {3} months
                      </p>
                    )}
                    {Math.floor(price * 83) > 4500 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 6).toFixed(2)} / month @
                        {6} months
                      </p>
                    )}
                    {Math.floor(price * 83) > 6000 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 9).toFixed(2)} / month @
                        {9} months
                      </p>
                    )}
                    {Math.floor(price * 83) > 10000 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 12).toFixed(2)} / month @
                        {12} months
                      </p>
                    )}
                    {Math.floor(price * 83) > 15000 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 18).toFixed(2)} / month @
                        {18} months
                      </p>
                    )}
                    {/* {Math.floor(price * 83) > 20000 && (
                      <p>
                        Rs {(Math.floor(price * 24) / 3).toFixed(2)} / month @
                        {24} months
                      </p>
                    )} */}
                    {Math.floor(price * 83) > 30000 && (
                      <p>
                        Rs {(Math.floor(price * 83) / 36).toFixed(2)} / month @
                        {36} months
                      </p>
                    )}
                  </span>{" "}
                  <span className="font-bold"> using MegaMart Pay</span>{" "}
                  <span className="underline underline-offset-2 cursor-pointer hover:text-blue">
                    {" "}
                    Learn more
                  </span>{" "}
                </p>
                <p className="text-xs text-zinc-500 flex items-center gap-1">
                  Price when purchased online
                  <span className="cursor-pointer hover:text-blue ">
                    <BsInfoCircle />
                  </span>
                </p>
              </div>
              {/* add to cart button*/}
              <div className="border-b-[1px] border-b-zinc-300 pb-4">
                <button
                  onClick={addItemToBasket}
                  className="w-32 h-10 bg-green-700 text-white rounded-full hover:bg-green-600 duration-300"
                >
                  Add to cart
                </button>
              </div>
              {/* delivery options*/}
              <div>
                <p className="text-base font-semibold">
                  How do you want your item?
                </p>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <Image
                      className="w-10"
                      src="/assets/images/shipping.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                    <p className="font-bold">Shipping</p>
                    <p>Tomorrow</p>
                    <p>Free</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <Image
                      className="w-10"
                      src="/assets/images/pickup.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                    <p className="font-bold">Pickup</p>
                    <p>Tomorrow</p>
                    <p>Free</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <Image
                      className="w-10"
                      src="/assets/images/delivery.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                    <p className="font-bold">Delivery</p>
                    <p>In 2-5 days</p>
                  </div>
                </div>
                <p className="font-bold text-xs">
                  Gurugram, 122018
                  <span className="font-normal underline underline-offset-2 ml-1 cursor-pointer hover:text-blue">
                    change
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
