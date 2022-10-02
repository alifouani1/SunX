import React, { useState } from "react";
import "../styles/quiz.css";
import { Link } from "react-router-dom";

export const Quiz = () => {
  var questions = [
    {
      id: 0,
      questionText:
        "The telescope is named after ______________, was the administrator of NASA.",
      answerOptions: [
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Mahaveer Lal", isCorrect: false },
        { answerText: "James E. Web", isCorrect: true },
        { answerText: "None of these", isCorrect: false },
      ],
    },
    {
      id: 1,
      questionText: "When was James Webb Space Telescope launched?",
      answerOptions: [
        { answerText: "20 December, 2021", isCorrect: false },
        { answerText: "18 December, 2021", isCorrect: false },
        { answerText: "25 December, 2021", isCorrect: true },
        { answerText: "15 December, 2021", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText:
        "What shape is the James Webb Space Telescope Primary Mirror?",
      answerOptions: [
        { answerText: "Hexagonal-shaped", isCorrect: true },
        { answerText: "Rectangular", isCorrect: false },
        { answerText: "Circular", isCorrect: false },
        { answerText: "Square-shaped", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: " The James Webb Space Telescope will be orbiting:",
      answerOptions: [
        { answerText: "Nothing", isCorrect: false },
        { answerText: "Earth", isCorrect: false },
        { answerText: "Moon", isCorrect: false },
        { answerText: "Sun", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="links">
        <Link to="/puzzle-game">PuzzleGame</Link>
        <Link to="/quiz-option">New Quiz</Link>
      </div>
    </div>
  );
};
