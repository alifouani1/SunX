import React, { useState } from "react";
import "../styles/quiz.css";
import { Link } from "react-router-dom";

export default function QuizM() {
  var questions = [
    {
      id: 0,
      questionText:
        "The James Webb Space Telescope (JWST) is a space telescope developed by NASA with contributions from the... was James Webb Space Telescope launched?",
      answerOptions: [
        { answerText: "European Space Agency", isCorrect: false },
        { answerText: "Canadian Space Agency", isCorrect: false },
        { answerText: "Both first and second", isCorrect: true },
        { answerText: "Japan Space Agency", isCorrect: false },
      ],
    },
    {
      id: 1,
      questionText: "Which rocket launched James Webb Space Telescope?",
      answerOptions: [
        { answerText: "Ariane 4", isCorrect: false },
        { answerText: "Ariane 5", isCorrect: true },
        { answerText: "Apollo 11", isCorrect: false },
        { answerText: "Apollo 17", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "Which of the following manufacturer of (JWST)?",
      answerOptions: [
        { answerText: "Northrop Grumman", isCorrect: false },
        { answerText: "Ball Aerospace", isCorrect: false },
        { answerText: "Space X", isCorrect: false },
        { answerText: "First and Second", isCorrect: true },
      ],
    },
    {
      id: 3,
      questionText: " What is the telescope’s primary mirror material?",
      answerOptions: [
        { answerText: "Iron", isCorrect: false },
        { answerText: "Metal", isCorrect: false },
        { answerText: "Aluminum", isCorrect: false },
        { answerText: "Beryllium coated with Gold", isCorrect: true },
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
