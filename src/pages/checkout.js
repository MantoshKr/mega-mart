import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Cart from "@/components/Cart";

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div>
      <Header />
      <div className="max-w-contentContainer mx-auto">
        <div className="w-full py-10">
          {items.length === 0 ? (
            <img
              
              src="/assets/images/emptycartimg1.png"
              className="w-full object-contain"
              alt=""
            />
          ) : (
            <div className="w-full flex gap-10">
              <div className="w-2/3 flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-black">
                  Cart{" "}
                  <span className="text-lightText font-normal">
                  ({ items.length } items)
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
                      <button className="px-2 py-[1px] text-blue text-sm border-[1px] border-blue rounded-sm">
                        Best Seller
                      </button>
                      <button className="px-2 py-[1px] text-red-500 text-sm border-[1px] border-red-500 rounded-sm">
                        Rollback
                      </button>
                    </div>
                    {/* Items */}
                    <div >
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
                      ))

                        }
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
                {/* right side total calcultion  */}
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
