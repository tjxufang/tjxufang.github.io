import React from 'react';
import './index.scss';
import Typewriter from 'typewriter-effect';

function IntroTypewriter() {
  return (
    <div className="intro-typewriter">
      <Typewriter
        options={{
          // strings: ['Hello', 'World!'],
          autoStart: true,
          // loop: true,
          delay: 30,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('My name is <strong>Fang Xu</strong>. ')
            .pauseFor(500)
            .typeString('I am a <strong>full-stack developer</strong>. ')
            .pauseFor(500)
            .typeString('I am into <strong>music</strong> and great <strong>designs</strong>, ')
          // .deleteChars(9)
          // .typeString("UX designer")
            .pauseFor(500)
            .typeString('and I enjoy <strong>life</strong>. ')
            .pauseFor(500)
            .typeString('<br/>Thank you for visiting!')
          // .deleteAll()
            .start();
        }}
      />
    </div>
  );
}

export default IntroTypewriter;
