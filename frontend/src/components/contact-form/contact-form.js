import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { Form, DisabledButton } from './contact-form.styles';
import CustomButton from '../custom-button/custom-button.component';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function ContactForm(props) {
  const [userData, setData] = useState({
    fullname: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const { fullname, email, telephone, subject, message } = userData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullname, email, telephone, subject, message } = userData;
    let templateParams = {
      from_name: fullname,
      email: email,
      to_email: 'hi@bluecatencode.com',
      to_name: 'Bluecatencode Website',
      subject: subject,
      telephone: telephone,
      message: message,
    };
    emailjs.send(
      'smtp_server',
      'template_gZNCIK0u',
      templateParams,
      'user_oyZbnUPFuBoCCXcacNsMz'
    );

    setTimeout(() => {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
    }, 400);
    setTimeout(() => {
      props.history.push('/about');
    }, 3000);
  };

  const handleChange = (event) => {
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
        label="Full name"
        required
      />
      <FormInput
        name="telephone"
        type="telephone"
        handleChange={handleChange}
        value={telephone}
        label="Telephone"
        required
      />
      <FormInput
        name="email"
        type="email"
        handleChange={handleChange}
        value={email}
        label="Email Address"
        required
      />
      <FormInput
        name="subject"
        type="subject"
        handleChange={handleChange}
        value={subject}
        label="Subject, Ej: We need a website"
        required
      />
      <FormInput
        name="message"
        type="message"
        handleChange={handleChange}
        value={message}
        label="Message"
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
}

export default withRouter(ContactForm);
