import React from "react";

const AnswerContainer = ({
  correct_answer,
  buttonClicked,
  setButtonClicked,
  answers,
  setScore,
  score,
}) => {
  return (
    <div className="grid grid-cols-2 rows-2 gap-6 mt-6">
      {answers.map((answer, i) => (
        <button
          className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${
            buttonClicked
              ? answer === correct_answer
                ? `bg-green-400`
                : `bg-red-400`
              : ``
          }`}
          dangerouslySetInnerHTML={{ __html: answer }}
          key={answer}
          onClick={() => {
            setButtonClicked(true);
            if (answer === correct_answer) {
              setScore(score + 1);
            }
          }}
        />
      ))}
    </div>
  );
};

export default AnswerContainer;
