import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00587a;
  padding: 10px 0 5px;

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    margin-top: 4rem;
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
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 4.2rem;
  color: #e7e7de;
  padding: 2rem 0;
  margin-top: 2.5rem;

  @media screen and (min-width: 620px) {
    font-size: 5.4rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 5.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 6.8rem;
    margin-top: 10rem;
  }
`;
