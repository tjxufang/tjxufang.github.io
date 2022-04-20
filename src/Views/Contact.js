import React from 'react';
import './Contact.scss';
import ContactForm from 'Components/Forms/ContactForm';

function Contact() {
  return (
    <div className="contact-container view-container">
      <div className="contact">
        <div className="contact-avatar flex-center">
          <img src={`${process.env.PUBLIC_URL}assets/fx.jpeg`} alt="avatar" />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
