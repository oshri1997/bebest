import React, { useState } from "react";
import bgHero from "../../images/UnDraw.svg";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";

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
  MouseWheelContainer,
  Mouse,
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
  const [navbar, setNavbar] = useState(false);

  const changeBgOnScorll = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBgOnScorll);
  return (
    <>
      <NavContainer className={navbar ? "active" : ""} id="in">
        <LogoLink onClick={() => scroll.scrollToTop()} to="in">
          The Best
        </LogoLink>
        <NavItems>
          <NavLink onClick={() => scroll.scrollToTop()}>Home</NavLink>
          <NavLink offset={-35} duration={1000} smooth={true} to="about">
            About
          </NavLink>
          <NavLink duration={1000} smooth={true} to="contact">
            Contact
          </NavLink>
        </NavItems>
      </NavContainer>

      <HeroContainer id="home">
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
          <MouseWheelContainer>
            <Mouse />
          </MouseWheelContainer>
        </ColumnRight>
      </HeroContainer>
    </>
  );
};

export default Home;
