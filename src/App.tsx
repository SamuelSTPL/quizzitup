import React, { useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
import { fetchQuizzQuestions } from "./Api";

import BackgroundVideo from "./components/BeachBackground";
import ChooseBackground from "./components/ChooseBackground";
import PageError from "./components/PageError";
import Categories from "./components/Categories";

// types
import { QuestionState, Difficulty } from "./Api";

// styles
import { GlobalStyle, Wrapper } from "./app.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAsnwer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [background, setBackground] = useState("beach");
  const [category, setCategory] = useState(9);
  const [error, setError] = useState(false);

  // console.log(category);

  const startTrivia = async () => {
    try {
      setLoading(true);
      setGameOver(false);

      // Fetch new questions from the API
      const newQuestions = await fetchQuizzQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY,
        category
      );
      setQuestions(newQuestions);
      setScore(0);
      setNumber(0);
      setUserAsnwer([]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAsnwer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ChooseBackground setBackground={setBackground} />
      <BackgroundVideo background={background} />
      {error && <PageError error={error} />}
      <Wrapper>
        <h1>Quizz It Up</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
          <>
            <Categories setCategory={setCategory} />
            <button className="start" onClick={() => startTrivia()}>
              Let's Go!
            </button>{" "}
          </>
        ) : null}
        {!gameOver ? (
          <p className="score">
            Score <span className="score-span">{score}</span>
          </p>
        ) : null}
        {loading && <p>Loading...</p>}
        {!loading && !gameOver && (
          <QuestionsCard
            questionNbr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={() => nextQuestion()}>
            Next
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
