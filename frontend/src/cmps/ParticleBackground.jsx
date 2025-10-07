import { memo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = memo(({ color = "#ffffff" }) => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 45,
                detectRetina: true,
                interactivity: {
                    events: {
                        onHover: { enable: !isMobile, mode: "repulse" },
                        resize: true,
                    },
                    modes: { repulse: { distance: 100, duration: 0.3 } },
                },
                particles: {
                    number: { value: isMobile ? 25 : 60 },
                    color: { value: color },
                    links: {
                        enable: true,
                        distance: isMobile ? 90 : 150,
                        color: color,
                        opacity: 0.4,
                    },
                    move: { enable: true, speed: 0.4 },
                    size: { value: { min: 1, max: 2 }, random: true },
                    opacity: { value: 0.5 },
                },
            }}
        />
    );
});

export default ParticleBackground;
