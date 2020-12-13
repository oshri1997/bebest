import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  Container,
  CopyRight,
  SocialContainer,
  SocialLink,
} from "./FooterStyle";

const Footer = () => {
  return (
    <section>
      <Container>
        <CopyRight>CopyRight 2021</CopyRight>
        <SocialContainer>
          <SocialLink to="#">
            <FacebookIcon />
          </SocialLink>
          <SocialLink to="#">
            <TwitterIcon />
          </SocialLink>
          <SocialLink to="#">
            <InstagramIcon />
          </SocialLink>
        </SocialContainer>
      </Container>
    </section>
  );
};

export default Footer;
