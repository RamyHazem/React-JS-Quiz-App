import React from "react";

const NextButton = ({
  setQuestionIndex,
  questionIndex,
  setButtonClicked,
  buttonClicked,
}) => {
  return buttonClicked ? (
    <div className="flex justify-center">
      <button
        className="bg-purple-700 rounded-lg shadow-md p-4 mt-4 text-white font-semibold w-40"
        onClick={() => {
          setButtonClicked(false);
          setQuestionIndex(questionIndex + 1);
        }}
      >
        Next Question
      </button>
    </div>
  ) : (
    ""
  );
};

export default NextButton;
