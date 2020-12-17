import React from "react";
import Card from "../../components/Card/Card";
import { CardsContainer, Title, TitleContainer } from "./AboutStyles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import personal from "../../images/personal.svg";
import nutrition from "../../images/nutrition.svg";

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
    <motion.div
      variants={cardVariants}
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Main = () => {
  return (
    <>
      <TitleContainer>
        <Title>About Us</Title>
      </TitleContainer>
      <CardsContainer>
        <View>
          <Card headerTitle="Personal Training" />
        </View>
        <View></View>
        <View>
          <Card headerTitle="Training Camps" />
        </View>
        <View>
          <Card headerTitle="Adapted Nutrition Menu" />
        </View>
      </CardsContainer>
    </>
  );
};

export default Main;
