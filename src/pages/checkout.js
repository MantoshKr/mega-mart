import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Cart from "@/components/Cart";
import { signIn, useSession } from "next-auth/react";
// import partyImg from "/public/assets/images/partyImg.png";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
// import creditcard from "/public/assets/images/creditcard.png";
const stripePromise = loadStripe(process.env.stripe_public_key);
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// import flashSaleIcon from "/public/assets/images/flashSaleIcon.png";
import SaveForLater from "@/components/SaveForLater";

const Checkout = () => {
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
  const total = useSelector(selectTotal);
  const [offerMsg, setOfferMsg] = useState(false);
  const [offerCashback, setOfferCashback] = useState(false);
  const [offerFlashSale, setOfferFlashSale] = useState(false);
  const [offerDiscount, setOfferDiscount] = useState(false);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    // redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  useEffect(() => {
    setOfferCashback(true);
  }, []);

  useEffect(() => {
    setOfferMsg(true);
  }, []);

  useEffect(() => {
    setOfferFlashSale(true);
  }, []);

  useEffect(() => {
    setOfferDiscount(true);
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-contentContainer mx-auto">
        <div className="w-full py-10">
          {items.length === 0 ? (
            <div>
              <p className="text-3xl font-bold">Your cart is empty.</p>
              <div className="mt-60">
                <SaveForLater />
              </div>
            </div>
          ) : (
            <div className="w-full lgl2:flex gap-10">
              <div className="lgl2:w-2/3 flex flex-col gap-0 m-10 lgl2:m-0">
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
                      src={"/static/images/phone.webp"}
                      width={25}
                      height={25}
                      alt=""
                      loading="lazy"
                    />
                    <p> pickup and delivery options </p>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-4 text-xs">
                    <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                      <Image
                        className="w-10"
                        src={"/static/images/shipping.png"}
                        width={30}
                        height={30}
                        alt=""
                        loading="lazy"
                      />
                      <p className="font-bold">Shipping</p>
                      <p>Available</p>
                    </div>
                    <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                      <Image
                        className="w-10"
                        src={"/static/images/pickup.png"}
                        width={30}
                        height={30}
                        alt=""
                        loading="lazy"
                      />
                      <p className="font-bold">Pickup</p>
                      <p>Available</p>
                    </div>
                    <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                      <Image
                        className="w-10"
                        src={"/static/images/delivery.png"}
                        width={30}
                        height={30}
                        alt=""
                        loading="lazy"
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
                          rating={item.rating}
                          ratingcount={item.ratingcount}
                        />
                      ))}
                    </div>
                    <div className="mt-10">
                      <SaveForLater />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lgl:w-1/3 h-full lgl:sticky lgl:top-10 bottom-4 m-10 lgl:m-0">
                <div className="w-full p-4 mt-2  border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4 ">
                  {!session ? (
                    <div>
                      <button className="bg-gray-500  w-full text-gray-300 h-10 rounded-full font-semibold cursor-not-allowed">
                        Continue to checkout
                      </button>
                      <p className="text-sm text-center text-red-500 mt-2 font-semibold">
                        Please sign in to checkout
                      </p>
                    </div>
                  ) : (
                    <button
                      role="link"
                      onClick={createCheckoutSession}
                      className="bg-green-700 hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300"
                    >
                      Continue to checkout
                    </button>
                  )}

                  {offerMsg && (
                    <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                      <Image
                        src={"/static/images/partyImg.png"}
                        width={30}
                        height={30}
                        alt=""
                        loading="lazy"
                      />
                      <p className="text-sm">
                        Items in your cart have reduced prices. Check out now
                        for extra savings!
                      </p>
                      <IoMdClose
                        onClick={() => setOfferMsg(false)}
                        className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                      />
                    </div>
                  )}

                  {items.length > 0 && (
                    <>
                      <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
                        <div className="flex flex-col gap-1">
                          <div className="text-sm flex justify-between">
                            <p>
                              Subtotal <span>({items.length} items):</span>
                            </p>
                            <p className="line-through text-zinc-500 text-base">
                              Rs {(Math.floor(total * 83) * 1.17).toFixed(2)}
                            </p>
                          </div>
                          <div className="text-sm flex justify-between">
                            <p className="font-semibold">Savings</p>
                            <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                              - Rs {(Math.floor(total * 83) * 0.17).toFixed(2)}
                            </p>
                          </div>
                          <div className="text-sm flex justify-between">
                            <p className="font-semibold"></p>
                            <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                              Rs {Math.floor(total * 83).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="w-full flex flex-col gap-4 border-b-[1px] border-t-[1px] border-b-zinc-200 pb-4">
                    <div className="text-sm flex justify-between mt-2">
                      <p className="font-semibold">Shipping</p>
                      <p className="text-[#2a8703] font-bold">Free</p>
                    </div>

                    <div className="text-sm flex justify-between mt-2">
                      <p className="font-semibold">Taxes</p>
                      <p className="text-gray-500 font-bold">
                        Rs {(Math.floor(total * 83) * 0.12).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between item-center">
                    <p className="text-zinc-800 font-bold text-lg">
                      Estimated total
                    </p>
                    <p className="text-zinc-800 font-bold text-lg">
                      Rs {(Math.floor(total * 83) * 1.12).toFixed(2)}
                    </p>
                  </div>

                  <div className="text-sm text-black flex flex-col gap-1">
                    <p className="font-bold">No Cost EMI options available :</p>
                    <p>
                      <span className="font-semibold flex flex-col">
                        {Math.floor(total * 83) * 1.12 > 3000 && (
                          <span>
                            {((Math.floor(total * 83) * 1.12) / 6).toFixed(2)} /
                            month @{6} months
                          </span>
                        )}
                        {Math.floor(total * 83) * 1.12 > 10000 && (
                          <span>
                            {((Math.floor(total * 83) * 1.12) / 12).toFixed(2)}{" "}
                            / month @{12} months
                          </span>
                        )}
                        {Math.floor(total * 83) * 1.12 > 20000 && (
                          <span>
                            {((Math.floor(total * 83) * 1.12) / 24).toFixed(2)}{" "}
                            / month @{24} months
                          </span>
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
                </div>
                <div className="w-full p-4 mt-4  border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-1">
                  <label className="flex items-center gap-2 ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-black cursor-pointer"
                    />
                    New members get a free 30-day trial
                  </label>
                </div>
                <div className="w-full  p-4 mt-4  border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-1">
                  <label className="flex items-center gap-2 ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-black cursor-pointer"
                      style={{ backgroundColor: "green", borderColor: "green" }}
                    />
                    This order is a gift.
                  </label>
                </div>

                {offerFlashSale && (
                  <div className="lgl:w-full w-[400px] p-0 lgl:p-4 mt-4  border-[1px] border-zinc-400 rounded-md sml:flex hidden flex-col justify-center gap-1">
                    <div className="bg-white text-black p-2 rounded-lg flex items-center justify-between gap-4">
                      <Image
                        src={"/static/images/flashSaleIcon.png"}
                        width={60}
                        height={60}
                        alt=""
                        loading="lazy"
                      />
                      <p className="text-sm">
                        <span className="font-bold">Flash Sale Alert!</span>{" "}
                        Shop now at Megamart.com and enjoy huge discounts on
                        selected items for the next 24 hours only. Limited
                        quantities available.
                        <span className="underline cursor-pointer hover:text-blue text-zinc-500">
                          See deals
                        </span>
                      </p>
                      <IoMdClose
                        onClick={() => setOfferFlashSale(false)}
                        className="text-5xl hover:text-red-400 cursor-pointer duration-200"
                      />
                    </div>
                  </div>
                )}

                {offerCashback && (
                  <div className="lgl:w-full  w-[400px] p-0 lgl:p-4 mt-4  border-[1px] border-zinc-400 rounded-md hidden sml:flex flex-col justify-center gap-1">
                    <div className="bg-white text-black p-2 rounded-lg flex items-center justify-between gap-4">
                      <Image
                        src={"/static/images/creditcard.png"}
                        width={60}
                        height={60}
                        alt=""
                        loading="lazy"
                      />
                      <p className="text-sm">
                        <span className="font-bold"> Earn 5% cash back </span>{" "}
                        on Megamart.com See if you’re pre-approved with no
                        credit risk.{" "}
                        <span className="underline cursor-pointer hover:text-blue text-zinc-500 ">
                          {" "}
                          Learn how{" "}
                        </span>
                      </p>
                      <IoMdClose
                        onClick={() => setOfferCashback(false)}
                        className="text-5xl hover:text-red-400 cursor-pointer duration-200"
                      />
                    </div>
                  </div>
                )}
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
