import React, { useState } from "react";
import { useRouter } from "next/router";

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const router = useRouter();

  const togglePopup = () => {
    setIsOpen(!isOpen);
    // Reset the feedback form when opening the popup
    setFeedback("");
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    // console.log(feedback);

    // Show the thank you message
    setShowThankYou(true);

    // Automatically redirect to the homepage
    setTimeout(() => {
      togglePopup(); // Close the popup
      setShowThankYou(false); // Hide the thank you message
      router.push("/");
    }, 3000);

    // Hide the "Give Feedback" button after clicking
    setButtonClicked(true);
  };

  return (
    <div>
      {!buttonClicked && (
        <button
          onClick={togglePopup}
          className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded m-4"
        >
          Give Feedback
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/2 relative">
            <span
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 cursor-pointer text-3xl mr-2"
            >
              &times;
            </span>
            {showThankYou ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="mb-4">
                  Your feedback is valuable to us. Thank you for your precious
                  time.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Feedback
                </h2>
                <textarea
                  id="feedbackText"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Type your feedback here..."
                  className="w-full h-32 p-2 border border-gray-400 rounded resize-none mb-4"
                ></textarea>
                <button
                  onClick={submitFeedback}
                  className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackPopup;
