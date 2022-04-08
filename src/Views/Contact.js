import React from 'react';
import './Contact.scss';
import {isProdEnv} from 'Utils/constants';
import ContactForm from 'Components/Forms/ContactForm';

const Contact = () => {
    return (
        <div className="contact-container view-container">
            {isProdEnv==="production" ?
                <div style={{textAlign: 'center', marginTop: '30%'}}>Coming soon...</div>
                :
                <div className="contact">
                    <div className="contact-avatar flex-center">
                        <img src="assets/fx.jpeg" alt="avatar"/>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            }
        </div>
    );
};

export default Contact;
