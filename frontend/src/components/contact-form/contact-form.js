import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { Form, DisabledButton } from "./contact-form.styles";
import CustomButton from "../custom-button/custom-button.component";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = props => {
  const [userData, setData] = useState({
    fullname: "",
    email: "",
    telephone: "",
    subject: "",
    message: ""
  });

  const { fullname, email, telephone, subject, message } = userData;

  const handleSubmit = event => {
    event.preventDefault();
    const { fullname, email, telephone, subject, message } = userData;
    let templateParams = {
      from_name: fullname,
      email: email,
      to_email: "hola@nereabotanicals.com",
      to_name: "Nerea Botanicals",
      subject: subject,
      telephone: telephone,
      message: message
    };
    emailjs.send(
      "smtp_server",
      "template_NNp7q0uL",
      templateParams,
      "user_XLU0AAi2jcmS5Ug4bGAS1"
    );

    setTimeout(() => {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    }, 400);
    setTimeout(() => {
      props.history.push("/about");
    }, 3000);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setData({ ...userData, [name]: value });
  };

  const isEnabled =
    fullname.length > 0 &&
    email.length > 0 &&
    telephone.length > 0 &&
    subject.length > 0 &&
    message.length > 0;
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="fullname"
        type="fullname"
        handleChange={handleChange}
        value={fullname}
        label="Nombre Completo"
        required
      />
      <FormInput
        name="telephone"
        type="telephone"
        handleChange={handleChange}
        value={telephone}
        label="Teléfono"
        required
      />
      <FormInput
        name="email"
        type="email"
        handleChange={handleChange}
        value={email}
        label="Correo Electrónico"
        required
      />
      <FormInput
        name="subject"
        type="subject"
        handleChange={handleChange}
        value={subject}
        label="Asunto, Ej: Ayuda"
        required
      />
      <FormInput
        name="message"
        type="message"
        handleChange={handleChange}
        value={message}
        label="Mensaje"
        required
      />

      {isEnabled ? (
        <>
          <CustomButton type="submit">Enviar</CustomButton>
        </>
      ) : (
        <DisabledButton disabled={!isEnabled}>Enviar</DisabledButton>
      )}
    </Form>
  );
};

export default withRouter(ContactForm);
