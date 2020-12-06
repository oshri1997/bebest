import React from "react";
import bgHero from "../images/UnDraw.svg";
import styled from "styled-components";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <HomeContainer>
      <LogoLink to="/">Be The Best</LogoLink>
      <NavContianer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
      </NavContianer>
      <Hero src={bgHero} alt="pic" />
      <MainHeader>Be The Best Player In The World</MainHeader>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #9eaffa;
  padding: 0 0 30px;

  @media screen and (min-width: 620px) {
    max-height: 55vh;
  }
  @media screen and (min-width: 960px) {
    max-height: 75vh;
  }

  @media screen and (min-width: 1200px) {
    max-height: 85vh;
  }
  @media screen and (min-width: 1600px) {
    height: 95vh;
  }
`;

const LogoLink = styled(Link)`
  margin-top: 1rem;
  grid-column: 2/6;
  font-size: 1.5rem;
  font-weight: 600;
  align-self: center;
  text-align: center;
  padding: 10px;
  padding-right: 3rem;
  letter-spacing: 1.1px;
  color: #9e1109;
  cursor: pointer;
  @media screen and (min-width: 620px) {
    font-size: 2.6rem;
    grid-column: 2/5;
  }
  @media screen and (min-width: 960px) {
    font-size: 3.1rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
    grid-column: 2/4;
  }
`;

const NavContianer = styled.nav`
  grid-column: 8/12;
  justify-self: end;
  align-self: center;
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
  }
`;
const NavLink = styled(Link)`
  margin-left: 10px;
  font-size: 1.5rem;
  color: #9e1109;
  font-weight: 600;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const Hero = styled.img`
  height: 18rem;
  width: auto;
  grid-column: 1/6;
  @media screen and (min-width: 620px) {
    height: 28rem;
  }
  @media screen and (min-width: 960px) {
    grid-column: 1/6;
    height: 40rem;
  }
  @media screen and (min-width: 1200px) {
    grid-column: 1/6;
    height: 50rem;
  }
  @media screen and (min-width: 1600px) {
    grid-column: 2/6;
    height: 55rem;
  }
`;

const MainHeader = styled.h2`
  text-align: center;
  align-self: center;
  font-size: 1.9rem;
  grid-row: 2;
  grid-column: 7/13;
  padding: 20px;

  letter-spacing: 1.2px;
  line-height: 1.2;
  color: #9e1109;

  @media screen and (min-width: 620px) {
    font-size: 3.7rem;
  }

  @media screen and (min-width: 960px) {
    grid-column: 7/12;
    font-size: 5rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 1200px) {
    grid-column: 7/12;
    font-size: 6.5rem;
  }

  @media screen and (min-width: 1600px) {
    grid-column: 6/12;
    font-size: 8rem;
  }
`;
export default Home;
