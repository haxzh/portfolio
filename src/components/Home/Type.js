import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "MERN Stack Specialist",
          "Python & Django Engineer",
          "Passionate Problem Solver",
          "Ai Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 50,
      }}
    />
  );
}

export default Type;
