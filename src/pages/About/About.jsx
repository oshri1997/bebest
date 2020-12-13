import React from "react";
import Card from "../../components/Card/Card";
import { CardsContainer, Title, TitleContainer } from "./AboutStyles";

const Main = () => {
  return (
    <>
      <TitleContainer>
        <Title>About Us</Title>
      </TitleContainer>
      <CardsContainer>
        <Card headerTitle="Personal Training" />
        <Card headerTitle="Training Camps" />
        <Card headerTitle="Adapted Nutrition Menu" />
      </CardsContainer>
    </>
  );
};

export default Main;
