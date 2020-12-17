import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;
export const CopyRight = styled.p`
  grid-column: 1/2;
  justify-self: center;
  color: #fff;
  font-size: 12px;
`;
export const SocialContainer = styled.div`
  grid-column: 3/4;
  justify-self: center;
  align-items: center;
  .MuiSvgIcon-root {
    color: #fff;
    font-size: 20px;
  }
`;
export const SocialLink = styled.a`
  cursor: pointer;
  margin-left: 1.2rem;
`;
