import React from "react";
import bgHero from "../../images/UnDraw.svg";
import { useInView } from "react-intersection-observer";

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

// const homeVariants = {
//   init: { opacity: 0.9 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//     },
//   },
// };

const headerVariants = {
  hidden: { opacity: 0, x: "100vh" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};
const imgVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};

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
          <HeroImage
            variants={imgVariants}
            initial="hidden"
            animate="show"
            src={bgHero}
            alt="pic"
          />
        </ColumnLeft>
        <ColumnRight>
          <HeroHeader variants={headerVariants} initial="hidden" animate="show">
            Be The Best Player In The World
          </HeroHeader>
        </ColumnRight>
      </HeroContainer>
    </>
  );
};

export default Home;
