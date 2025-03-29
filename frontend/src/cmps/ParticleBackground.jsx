import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ color }) => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <div className="particles">
            <Particles
                id="tsparticles"
                init={particlesInit}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "100vw",
                    height: "100vh",
                }}
                options={{

                    fullScreen: { enable: false },
                    background: { color: { value: `${color}` } },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: 100 },
                            push: { quantity: 4 },
                        },
                    },
                    particles: {
                        number: { value: 70 },
                        color: { value: "#fff" },
                        links: { enable: true, distance: 150, color: "#fff", opacity: 0.5 },
                        move: { enable: true, speed: 1.5 },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "bounce" },
                        random: true,
                        straight: false,
                    },


                }}
            />
        </div>

    );
};

export default ParticleBackground;
