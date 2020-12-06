import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Main = () => {
  return (
    <Container>
      <Card headerTitle="Personal Training" />
      <Card headerTitle="Training Camps" />
      <Card headerTitle="Adapted Nutrition Menu" />
    </Container>
  );
};

const Container = styled.div`
  border-top: 2px solid #9e1109;
  border-bottom: 2px solid #9e1109;
  background-color: #9eaffa;
  padding: 10px 0 5px;

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
  }
  & > :nth-child(1) {
    grid-column: 2/7;
    grid-row: 1;
    justify-self: center;
  }
  & > :nth-child(2) {
    grid-column: 7/12;
    grid-row: 1;
    justify-self: center;
  }
  & > :nth-child(3) {
    grid-column: 4/10;
    grid-row: 2;
    justify-self: center;
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;

    & > :nth-child(1) {
      grid-column: 1/5;
      grid-row: 1;
      justify-self: center;
    }
    & > :nth-child(2) {
      grid-column: 9/13;
      grid-row: 1;
      justify-self: center;
    }
    & > :nth-child(3) {
      grid-column: 5/9;
      grid-row: 2;
      justify-self: center;
      transform: translateY(-200px);
    }
  }
  @media screen and (min-width: 1200px) {
    & > :nth-child(3) {
      grid-column: 5/9;
      grid-row: 2;
      justify-self: center;
      transform: translateY(-250px);
    }
  }
`;

export default Main;
