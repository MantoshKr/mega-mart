import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import creditcard from "Public/assets/images/creditcard.png";
// import giftBox from "Public/assets/images/giftBox.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
// import flashSaleIcon from "Public/assets/images/flashSaleIcon.png";

const Success = () => {
  const router = useRouter();
  const [offerCashback, setOfferCashback] = useState(false);
  const [offerDiscount, setOfferDiscount] = useState(true);
  const [offerFlashSale, setOfferFlashSale] = useState(true);

  useEffect(() => {
    setOfferCashback(true);
  }, []);

  useEffect(() => {
    setOfferDiscount(true);
  }, []);

  useEffect(() => {
    setOfferFlashSale(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="max-w-screen-lg mx-auto flex-grow">
        <div className="flex flex-col p-10 bg-white gap-10">
          <div className="gap-4">
            <div className="flex items-center">
              <BsFillCheckCircleFill className="text-green-500 h-10 text-2xl mx-2" />
              <h1 className="text-3xl">Order Successfully Confirmed!</h1>
            </div>
            <p>
              Thank you for choosing us for your shopping needs. Your order has
              been successfully confirmed and is now in the process of being
              prepared for shipment. We're excited to have you as our valued
              customer, and we look forward to delivering an exceptional
              experience.{" "}
            </p>
          </div>

          <button
            onClick={() => router.push("/")}
            className="bg-green-700 hover:bg-hoverBg w-[50%] text-white h-10 rounded-full font-semibold duration-300"
          >
            Continue Shopping
          </button>
        </div>

        <div className="flex ">
          <div>
            {offerCashback && (
              <div className="md:w-[60%] hidden p-4 mt-4 mx-10 border-[1px] border-zinc-400 rounded-md md:flex flex-col justify-center gap-1">
                <div className="bg-white text-black p-2 rounded-lg flex items-center justify-between gap-4">
                  <Image
                    src={"/static/images/creditcard.png"}
                    width={60}
                    height={60}
                    alt=""
                    loading="lazy"
                  />
                  <p className="text-sm">
                    <span className="font-bold"> Earn 5% cash back </span> on
                    Megamart.com See if you’re pre-approved with no credit risk.{" "}
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

        <br />

        <div className="mx-10">
          <h3>What's Next?</h3>
          <ul>
            <li>
              <strong>Processing and Packaging:</strong> Our dedicated team is
              working diligently to carefully pack and prepare your items for
              their journey to you. Your order is in good hands, and we're
              committed to ensuring it's delivered in top condition.
            </li>
            <li>
              <strong>Shipping Confirmation:</strong> Once your order is ready
              to leave our facility, we will send you a shipping confirmation
              email. This will include tracking information so you can monitor
              the progress of your package as it makes its way to you.
            </li>
            <li>
              <strong>Stay Updated:</strong> To stay up-to-date with the status
              of your order and to track its delivery, please keep an eye on
              your email inbox. You can also visit the order tracking page on
              our website for real-time information.
            </li>
          </ul>
          <p>
            We appreciate your trust in us and your decision to shop with us. If
            you have any questions or need assistance, our customer support team
            is here to help.
          </p>
          <p>
            Thank you for being a valued customer!
            <br />
            The MegaMart Team
          </p>
        </div>
      </div>

      <Feedback />

      <Footer />
    </div>
  );
};

export default Success;
