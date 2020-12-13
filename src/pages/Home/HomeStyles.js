import styled from "styled-components";
import { Link } from "react-scroll";
export const NavContainer = styled.nav`
  height: 80px;
  background: #00587a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem calc((100vw - 1300px) / 2);

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
  display: none;
  @media screen and (min-width: 960px) {
    display: block;
  }
`;
export const NavLink = styled(Link)`
  padding: 0 1.5rem;
  font-size: 1.7rem;
  color: #e7e7de;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const HeroContainer = styled.div`
  background: #00587a;
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    margin: 0 auto;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1600px) {
    width: 100%;
    padding: 3rem calc((100vw - 1600px) / 2);
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.img`
  width: 90%;
  height: 90%;
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
  }
`;
export const HeroHeader = styled.h2`
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
