import React from 'react';
import './Contact.scss';
import {isProdEnv} from 'Utils/constants';

const Contact = () => {
    return (
        <div className="contact-container view-container">
            {isProdEnv==="production" ?
                <div style={{textAlign: 'center', marginTop: '30%'}}>Coming soon...</div>
                :
                <div className="contact">
                    <div className="contact-avatar">
                        <img src="assets/fx.jpeg" alt="avatar"/>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    );
};

export default Contact;
