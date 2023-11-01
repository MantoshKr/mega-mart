import React from "react";
import { useSelector } from "react-redux";
import { selectSaveForLaterItems } from "../slices/saveForLaterSlice";
import Cart from "../components/Cart";

const SaveForLater = () => {
  const SaveForLaterItems = useSelector(selectSaveForLaterItems);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 flex justify-between">
        <span>Items saved for later</span>{" "}
      </h1>

      {SaveForLaterItems.length === 0 ? (
        <p>You dont have any items saved for later yet</p>
      ) : (
        <div>
          {SaveForLaterItems.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              hideButton={true}
              rating={item.rating}
              ratingcount={item.ratingcount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SaveForLater;
