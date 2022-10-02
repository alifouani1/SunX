import styled from "styled-components";

export const Button = styled.button`
  padding: 0.7em 1.5em;
  font-size: 1.4em;
  margin-bottom: 1em;
  cursor: pointer;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4);
  border-radius: 7px;
  border:solid 0;
  // background: linear-gradient(to bottom, dodgerblue, #03a9f4);
  background-color: #260136;
  transition: all 0.2s;
  color: white;
  outline: 0;
  max-width: 10rem;

  &:hover {
    // background: linear-gradient(to top, #260136, #6c1348);
    // border: solid 1px rgba(255, 255,255, 0.2);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    background:rgba(255, 255, 255, 0.4)
  }
`;
