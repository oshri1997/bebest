import React from "react";
import styled from "styled-components";
import ball from "../images/ballsvg.svg";

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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10px auto;
  background-color: #3f3d56;
  padding: 2rem 1rem;
  border-radius: 20px;

  @media screen and (min-width: 620px) {
    width: 65%;
  }
  @media screen and (min-width: 960px) {
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`;
const Header = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  padding: 10px 0;
  color: #f5f5f5;

  @media screen and (min-width: 620px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
  }
`;

const Content = styled.div`
  padding: 0 1rem;
  @media screen and (min-width: 620px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1600px) {
    padding: 0 6rem;
  }
`;

const Description = styled.p`
  padding: 0 15px;

  font-size: 1.2rem;
  letter-spacing: 0.8px;
  color: #f5f5f5;
  line-height: 1.8;
  @media screen and (min-width: 620px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`;
const BallImg = styled.img`
  padding: 15px 0 0;
  width: 50px;
  height: auto;
  align-self: center;
`;

export default Card;
