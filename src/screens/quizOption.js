import React from "react";
import styled from "styled-components";

import { LayoutScreen } from "./layout.screen";
import { Button } from "../components/button.component";
import { DefaultNavContent } from "../components/default-nav-content.component";
import { DifficultyChooser } from "../components/difficulty-chooser.component";
import { Link } from "react-router-dom";
import "../styles/quizOption.css";

const Heading = styled.h1`
  text-align: center;
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 1em;
  padding-bottom: 0;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const DifficultyLevelScreenQuiz = () => {
  return (
    <Container>
      <Heading>Difficulty Level</Heading>

      <Link to="/quiz" className="links-opt links">
        Easy
      </Link>
      <Link to="/quiz-m" className="links-opt links">
        Medium
      </Link>
      <Link to="/quiz-h" className="links-opt links">
        Hard
      </Link>
    </Container>
  );
};
