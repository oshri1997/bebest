import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10px auto;
  background-color: #0f3057;
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
export const Header = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  padding: 10px 0;
  color: #e7e7de;

  @media screen and (min-width: 620px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
  }
`;

export const Content = styled.div`
  padding: 0 1rem;
  @media screen and (min-width: 620px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1600px) {
    padding: 0 6rem;
  }
`;

export const Description = styled.p`
  padding: 0 15px;

  font-size: 1.2rem;
  letter-spacing: 0.8px;
  color: #e7e7de;
  line-height: 1.8;
  @media screen and (min-width: 620px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 1.6rem;
  }
`;
export const BallImg = styled.img`
  padding: 15px 0 0;
  width: 50px;
  height: auto;
  align-self: center;
`;
