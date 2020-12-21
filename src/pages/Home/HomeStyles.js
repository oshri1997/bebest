import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  height: 80px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem calc((100vw - 1300px) / 2);
  margin-bottom: 2rem;

  &.active {
    background: #3b558c;
  }

  @media screen and (min-width: 1600px) {
    padding: 3rem calc((100vw - 1600px) / 2);
  }
`;
export const LogoLink = styled(Link)`
  color: #e7e7de;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 0 2rem;
  cursor: pointer;
`;
export const NavItems = styled.div`
  display: block;
`;
export const NavLink = styled(Link)`
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #e7e7de;

  cursor: pointer;

  &:hover {
    color: #0f3057;
  }
  &:link,
  &:visited,
  &:active {
    color: #e7e7de;
  }
  @media screen and (min-width: 960px) {
    padding: 0 1.5rem;
    font-size: 1.7rem;
  }
`;

export const HeroContainer = styled.div`
  background: #6b9aff;
  display: grid;
  grid-template-columns: 1fr;
  height: calc(80vh - 80px);
  margin-top: 6rem;
  padding: 3rem calc((100vw - 1300px) / 2) 0;
  overflow: hidden;

  @media screen and (min-width: 620px) {
    height: calc(95vh - 80px);
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    margin: 0 auto;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    margin: 0 auto;
    height: calc(80vh - 80px);
  }
  @media screen and (min-width: 1600px) {
    height: calc(100vh - 80px);
    width: 100%;
    padding: 3rem calc((100vw - 1600px) / 2);
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
export const HeroImage = styled(motion.img)`
  width: 90%;
  height: auto;
  @media screen and (min-width: 620px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`;

export const ColumnRight = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 960px) {
    justify-self: start;
    grid-column: 2;
    width: 100%;
    flex-direction: column;
  }
`;
export const HeroHeader = styled(motion.h2)`
  color: #e7e7de;
  text-align: center;
  font-size: 4rem;
  font-family: "Open Sans Condensed", sans-serif;

  @media screen and (min-width: 620px) {
    font-size: 5.6rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 5.8rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 7.2rem;
  }
  @media screen and (min-width: 1600px) {
    font-size: 8.2rem;
  }
`;

const mouse = keyframes`
  from{
    opacity:1;
    top:8px;
  }

  to{
    opacity:0;
    top:8rem;
  }
`;

export const MouseWheelContainer = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    border: 1px solid #000;
    width: 5.5rem;
    height: 10rem;
    border-radius: 60px;
    position: relative;

    & ::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
      border-radius: 50%;
      animation: ${mouse} 2s infinite;
    }
  }
`;
export const Mouse = styled.div``;
