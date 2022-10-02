import React, { useState } from "react";
import "../styles/quiz.css";
import { Link } from "react-router-dom";

export default function QuizH() {
  var questions = [
    {
      id: 0,
      questionText:
        "Which of the following type Transporter band used in JWST?",
      answerOptions: [
        {
          answerText: "S-band, telemetry, tracking, and control",
          isCorrect: false,
        },
        { answerText: "ka-band, data acquisition", isCorrect: false },
        { answerText: "Both of the above", isCorrect: true },
        { answerText: "L-band, acquisition", isCorrect: false },
      ],
    },
    {
      id: 1,
      questionText:
        "JWST in the Optical Telescope Element, consists of _____ hexagonal mirror segments.",
      answerOptions: [
        { answerText: "08 Hexagonal", isCorrect: false },
        { answerText: "18 Hexagonal", isCorrect: true },
        { answerText: "28 Hexagonal", isCorrect: false },
        { answerText: "78 Hexagonal", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "What is the mirror diameter of JWST?",
      answerOptions: [
        { answerText: "21 ft 4 inch", isCorrect: true },
        { answerText: "21 ft", isCorrect: false },
        { answerText: "31 ft 4 in", isCorrect: false },
        { answerText: "01 ft 4 in", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: " James Webb Space Telescope Development began in...",
      answerOptions: [
        { answerText: "2020", isCorrect: false },
        { answerText: "2000", isCorrect: false },
        { answerText: "1990", isCorrect: false },
        { answerText: "1996", isCorrect: true },
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
}
