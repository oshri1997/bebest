import React from "react";
import Card from "../../components/Card/Card";
import {
  ContainerGrid,
  ContainerFlex,
  Title,
  TitleContainer,
} from "./AboutStyles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import personal from "../../images/personal.svg";
import nutrition from "../../images/nutrition.svg";
import camps from "../../images/camps.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const View = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <ContainerFlex
      variants={cardVariants}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </ContainerFlex>
  );
};

const Main = () => {
  return (
    <>
      <TitleContainer id="about">
        <Title>About Us</Title>
      </TitleContainer>
      <ContainerGrid>
        <View>
          <Card headerTitle="Personal Training" />
          <img className="cardImg" src={personal} alt="personal" />
        </View>
        <View>
          <Card headerTitle="Adapted Nutrition Menu" />
          <img className="cardImg" src={nutrition} alt="nutrition" />
        </View>
        <View>
          <Card headerTitle="Training Camps" />
          <img className="cardImg" src={camps} alt="camps" />
        </View>
      </ContainerGrid>
    </>
  );
};

export default Main;
