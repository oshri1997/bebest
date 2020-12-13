import React from "react";
import bgHero from "../../images/UnDraw.svg";
import {
  HeroContainer,
  LogoLink,
  NavContainer,
  NavItems,
  NavLink,
  ColumnLeft,
  HeroImage,
  ColumnRight,
  HeroHeader,
} from "./HomeStyles";

const Home = () => {
  return (
    <>
      <NavContainer>
        <LogoLink to="/">The Best</LogoLink>
        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </NavItems>
      </NavContainer>
      <HeroContainer>
        <ColumnLeft>
          <HeroImage src={bgHero} alt="pic" />
        </ColumnLeft>
        <ColumnRight>
          <HeroHeader>Be The Best Player In The World</HeroHeader>
        </ColumnRight>
      </HeroContainer>
    </>
  );
};

export default Home;
