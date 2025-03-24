import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100dvh",
                height: "100dvh",
            }}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "#333" } },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 2 },
                    },
                },
                particles: {
                    number: { value: 50 },
                    color: { value: "#fff" },
                    links: { enable: true, distance: 150, color: "#fff", opacity: 0.5 },
                    move: { enable: true, speed: 1.5 },
                },
            }}
        />


    );
};

export default ParticleBackground;
