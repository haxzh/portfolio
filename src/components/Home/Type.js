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
          "Open Source Contributor",
          "Passionate Problem Solver"
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
