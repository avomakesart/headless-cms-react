import React, { Component } from "react";

import { ContactContainer } from "./contact.styles";

import ContactForm from "../../components/contact-form/contact-form";

class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <ContactForm />
      </ContactContainer>
    );
  }
}

export default Contact;
