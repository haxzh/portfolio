import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 65,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ["#e76f51", "#e9c46a", "#f4a261"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2.2,
            random: true,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#e76f51",
            opacity: 0.08,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 120,
              line_linked: {
                opacity: 0.35,
              },
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
      }}
    />
  );
}

export default React.memo(Particle);
