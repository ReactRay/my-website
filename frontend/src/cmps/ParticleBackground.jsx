import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ color }) => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const isMobile = window.innerWidth <= 768; // Simple mobile check

    return (
        <div className="particles" >
            <Particles
                id="tsparticles"
                init={particlesInit}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: -1,
                    width: "100vw",
                    height: "100vh",
                }}
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: color } },
                    fpsLimit: 40,
                    interactivity: {
                        events: {
                            onHover: { enable: !isMobile, mode: "repulse" }, // Disable hover on mobile
                            onClick: { enable: false, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: 100 },
                            push: { quantity: 4 },
                        },
                    },
                    particles: {
                        number: { value: isMobile ? 20 : 100 },
                        color: { value: "#fff" },
                        links: {
                            enable: true,
                            distance: isMobile ? 70 : 150,
                            color: "#fff",
                            opacity: 0.5
                        },
                        move: { enable: true, speed: 1.5 },
                        size: { value: isMobile ? 1 : 2, random: true },
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
