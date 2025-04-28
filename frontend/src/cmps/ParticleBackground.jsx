import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ color }) => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const isMobile = window.innerWidth <= 768; // Simple mobile check

    return (
        <div >
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
                    background: { color: { value: color } },
                    fpsLimit: 40, // Limit FPS for smoother performance
                    interactivity: {
                        events: {
                            onHover: { enable: !isMobile, mode: "repulse" }, // Disable hover on mobile
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: isMobile ? 50 : 100 },
                            push: { quantity: isMobile ? 2 : 4 },
                        },
                    },
                    particles: {
                        number: { value: isMobile ? 30 : 70 }, // Fewer particles on mobile
                        color: { value: "#fff" },
                        links: {
                            enable: !isMobile, // Disable links on mobile
                            distance: 150,
                            color: "#fff",
                            opacity: 0.5
                        },
                        move: { enable: true, speed: 1.5 },
                        size: { value: 2, random: true }, // Small particle sizes
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
