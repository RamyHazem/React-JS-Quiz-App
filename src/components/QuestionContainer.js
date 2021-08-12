import React from "react";

const QuestionContainer = ({ category, question, difficulty }) => {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center mb-8 h-20 text-3xl font-extrabold">{`Category: ${category}`}</h1>
      <a
        className="absolute top-56 text-3xl"
        href="https://opentdb.com/api_config.php"
        target="blank"
      >
        <i className="fa fa-cog"></i>
      </a>
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md relative">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <h2 className="absolute -top-3 bg-white p-3 pb-0 rounded font-semibold">{`Difficulty: ${difficulty.toUpperCase()}`}</h2>
      </div>
    </div>
  );
};

export default QuestionContainer;
