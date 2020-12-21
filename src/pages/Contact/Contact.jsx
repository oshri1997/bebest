import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { TitleContainer, Title, Container } from "./ContactStyles";
import contact from "../../images/contactUs.svg";
const Contact = () => {
  return (
    <>
      <TitleContainer id="contact">
        <Title>Contact Us</Title>
      </TitleContainer>
      <Container>
        <ContactForm />

        <img src={contact} alt="contact" />
      </Container>
    </>
  );
};

export default Contact;
