import React from "react";

const RestartPage = ({ setQuestionIndex, score, questions }) => {
  return (
    <div>
      <h1 className="text-white font-extrabold text-2xl flex justify-center">
        {" "}
        {`Your Score Was: ${score} / ${questions.length}`}
      </h1>
      <button
        className="bg-white rounded-lg shadow-md p-4 mt-4 text-purple-800 font-semibold w-80"
        onClick={() => {
          setQuestionIndex(0);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default RestartPage;
