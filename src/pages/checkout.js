import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Cart from "@/components/Cart";
import { signIn, useSession } from "next-auth/react";
import Currency from "react-currency-formatter";
import partyImg from "/public/assets/images/partyImg.png";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import emptycartimg1 from "/public/assets/images/emptycartimg1.png";

const Checkout = () => {
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);
  const [offerMsg, setOfferMsg] = useState(false);

  useEffect(() => {
    setOfferMsg(true);
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-contentContainer mx-auto">
        <div className="w-full py-10">
          {items.length === 0 ? (
            <Image
              src={emptycartimg1}
              className="w-full object-contain"
              alt=""
            />
          ) : (
            <div className="w-full flex gap-10">
              <div className="w-2/3 flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-black">
                  Cart{" "}
                  <span className="text-lightText font-normal">
                    ({items.length} items)
                  </span>
                </h1>

                <div>
                  <div className="text-xl font-bold flex items-center gap-2 mb-2">
                    <Image
                      className="w-10"
                      src="/assets/images/phone.webp"
                      width={25}
                      height={25}
                      alt=""
                    />
                    <p> pickup and delivery options </p>
                  </div>
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
                      <p>Available</p>
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
                      <p>Available</p>
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
                      <p>Available</p>
                    </div>
                  </div>
                  {/* cart product */}
                  <div className="w-full p-5 border-[1px] border-zinc-400f nrounded-md flex-col gap-4">
                    <p className="font-semibold text-sm text-zinc-500">
                      {""}
                      Sold and shipped by {""}
                      <span className="text-black font-semibold">
                        MegaMart.com
                      </span>
                    </p>
                    <div className="flex gap-2">
                      <button className="px-2 py-[1px] text-green-600 text-sm border-[1px] border-green-600 rounded-sm">
                        Best Seller
                      </button>
                      <button className="px-2 py-[1px] text-red-500 text-sm border-[1px] border-red-500 rounded-sm">
                        Rollback
                      </button>
                    </div>
                    {/* Items */}
                    <div>
                      {items.map((item, i) => (
                        <Cart
                          key={i}
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          description={item.description}
                          category={item.category}
                          image={item.image}
                          popularity={item.popularity}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 p-4 mt-24 h-[400px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
                {!session ? (
                  <div>
                  <button
                   
                    className="bg-gray-500  w-full text-gray-300 h-10 rounded-full font-semibold cursor-not-allowed"
                  >
                     Continue to checkout
                  </button>
                  <p className="text-sm text-center text-red-500 mt-2 font-semibold">
                    Please sign in to checkout 
                  </p>
                  </div>

                ) : (
                  <button
                   className="bg-green-700 hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
                    Continue to checkout
                  </button>
                  
                )}

                {offerMsg && (
                  <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                  <Image src={partyImg} width={30} height={30} alt="" />
                  <p className="text-sm">
                  Items in your cart have reduced prices. Check out now for extra savings!
                  </p>
                  <IoMdClose onClick={()=> setOfferMsg(false)} className="text-3xl hover:text-red-400 cursor-pointer duration-200" />

                  </div>
                )

                }

                {items.length > 0 && (
                  <>
                    <h2 className="flex justify-between font-bold  text-gray-700">
                      Subtotal ({items.length} items):
                      {
                        <p>
                          Rs {Math.floor(total * 83)}
                        </p>
                      }
                    </h2>
                  </>
                )}

                <div className="w-full flex flex-col gap-4 border-b-[1px] border-t-[1px] border-b-zinc-200 pb-4">

                <div className="text-sm flex justify-between mt-2">
                    <p className="font-semibold">Shipping</p>
                    <p className="text-green-700 font-bold">Free</p>
                  </div>

                  <div className="text-sm flex justify-between mt-2">
                    <p className="font-semibold">Taxes</p>
                    <p className="text-gray-500 font-bold">Rs {(Math.floor(total * 83) * 0.12).toFixed(2)}</p>
                  </div>
                  
                </div>
                <div className="flex justify-between item-center">
                    <p  className="text-zinc-800 font-bold text-lg">Estimated total</p>
                    <p className="text-zinc-800 font-bold text-lg">Rs {(Math.floor(total * 83) + Math.floor(total * 83) * 0.12).toFixed(2)}</p>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
