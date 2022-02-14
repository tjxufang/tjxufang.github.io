import React from 'react';
import 'Components/Intro/index.scss'
import Typewriter from "typewriter-effect";
import MainButton from 'Components/UI/MainButton/MainButton';

const Intro = () => {
    return (
        <div className="intro-container row">
            <div className="intro-text">
                <h1>
                    Hello! Welcome to my page!
                </h1>
                <Typewriter
                    options={{
                        strings: ['Hello', 'World'],
                        autoStart: true,
                        // loop: true,
                        delay: 100,
                    }}
                    onInit={(typewriter)=> {
                        typewriter
                            .typeString("My name is Fang Xu. ")
                            .pauseFor(1000)
                            .typeString("I am a full-stack developer. ")
                            .pauseFor(1000)
                            .typeString("I am into music and beautiful designs, ")
                            // .deleteChars(9)
                            // .typeString("UX designer")
                            .pauseFor(1000)
                            .typeString("and I enjoy life.")
                            // .deleteAll()
                            .start();
                    }}
                />
                <div className="btn-container">
                    <MainButton>Learn more about me</MainButton>
                </div>
            </div>
            <div className="intro-avatar">
                <img src="assets/fx.jpeg" alt="avatar"/>
            </div>
        </div>
    );
};

export default Intro;
