import React from 'react';
import 'Components/Intro/Intro.scss'
import Typewriter from "typewriter-effect";
import MainButton from 'Components/UI/MainButton/MainButton';
import {Link} from 'react-router-dom';

const Intro = () => {
    return (
        <div className="intro-container row">
            <div className="intro-background"/>
            <div className="intro-text">
                <h1>
                    Hello there!
                </h1>
                <h1>
                    Welcome to my page!
                </h1>
                <div className="intro-typewriter">
                    <Typewriter
                        options={{
                            // strings: ['Hello', 'World!'],
                            autoStart: true,
                            // loop: true,
                            delay: 50,
                        }}
                        onInit={(typewriter)=> {
                            typewriter
                                .typeString("My name is <strong>Fang Xu</strong>. ")
                                .pauseFor(700)
                                .typeString("I am a <strong>full-stack developer</strong>. ")
                                .pauseFor(700)
                                .typeString("I am into <strong>music</strong> and great <strong>designs</strong>, ")
                                // .deleteChars(9)
                                // .typeString("UX designer")
                                .pauseFor(1000)
                                .typeString("and I enjoy <strong>life</strong>.")
                                // .deleteAll()
                                .start();
                        }}
                    />
                </div>
                <div className="btn-container">
                    <Link to={"/about"}>
                        <MainButton>Learn more about me</MainButton>
                    </Link>
                </div>
            </div>
            <div className="intro-avatar">
                <img src="assets/fx.jpeg" alt="avatar"/>
            </div>
        </div>
    );
};

export default Intro;
