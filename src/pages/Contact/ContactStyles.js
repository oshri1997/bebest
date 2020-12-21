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

export const Container = styled.div`
  background-color: transparent;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    width: min(90%, 120rem);
    gap: 30px;
    background-color: rgba(0, 0, 0, 0.45);
    padding: 2rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    margin-inline: auto;
  }

  img {
    display: none;
    @media screen and (min-width: 1200px) {
      display: block;
      width: min(80%, 50rem);
    }
  }
`;
