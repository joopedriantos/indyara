import React from 'react';
import Particles from 'react-tsparticles';
import teste from '../cefet.png';
import './ParticulesImage.css';

const ParticlesImage = () => {
  return (
    <div className="App-logo-container" style={{ position: 'relative', width: '300px', height: '300px' }}>
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              }
            }
          }
        }}
      />
      <img src={teste} className="App-logo" alt="Logo" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0 // A opacidade é controlada com a animação de partículas
      }} />
    </div>
  );
}

export default ParticlesImage;
