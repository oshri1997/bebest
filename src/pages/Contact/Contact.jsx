import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { TitleContainer, Title } from "./ContactStyles";

const Contact = () => {
  return (
    <div>
      <TitleContainer>
        <Title>Contact Us</Title>
      </TitleContainer>
      <ContactForm />
    </div>
  );
};

export default Contact;
