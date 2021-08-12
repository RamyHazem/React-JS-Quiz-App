import React from "react";
import AnswerContainer from "./AnswerContainer";
import NextButton from "./NextButton";
import QuestionContainer from "./QuestionContainer";

const Questionaire = ({
  data: { question, correct_answer, difficulty, category, answers },
  setButtonClicked,
  buttonClicked,
  questionIndex,
  setQuestionIndex,
  setScore,
  score,
}) => {
  return (
    <div className="container">
      <QuestionContainer
        question={question}
        difficulty={difficulty}
        category={category}
      />
      <AnswerContainer
        question={question}
        correct_answer={correct_answer}
        setButtonClicked={setButtonClicked}
        buttonClicked={buttonClicked}
        answers={answers}
        setScore={setScore}
        score={score}
      />
      <NextButton
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        setButtonClicked={setButtonClicked}
        buttonClicked={buttonClicked}
      />
    </div>
  );
};

export default Questionaire;
