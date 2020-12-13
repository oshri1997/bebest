import styled from "styled-components";

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
