import React from "react";
import ball from "../../images/ballsvg.svg";
import {
  BallImg,
  CardContainer,
  Content,
  Description,
  Header,
} from "./CardStyles";

const Card = ({ headerTitle }) => {
  return (
    <CardContainer>
      <Content>
        <Header>{headerTitle}</Header>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </Description>
      </Content>
      <BallImg src={ball} alt="ball image" />
    </CardContainer>
  );
};

export default Card;
