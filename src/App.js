import { useEffect, useState } from "react";
import Questionaire from "./components/Questionaire";
import RestartPage from "./components/RestartPage";

const API_URL =
  "https://opentdb.com/api.php?amount=21&category=23&difficulty=hard&type=multiple";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  return questions.length > 0 ? (
    questionIndex >= questions.length - 1 ? (
      <RestartPage
        setQuestionIndex={setQuestionIndex}
        questions={questions}
        score={score}
      />
    ) : (
      <>
        <Questionaire
          data={questions[questionIndex]}
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          setQuestionIndex={setQuestionIndex}
          questionIndex={questionIndex}
          setScore={setScore}
          score={score}
        />
      </>
    )
  ) : (
    <h1 className="text-white font-extrabold">Loading Questions...</h1>
  );
};

export default App;
