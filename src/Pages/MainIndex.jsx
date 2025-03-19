import { useEffect, useState } from "react";

export function MainIndex() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ position: "relative" }}>
            {/* Add a dynamic class based on scroll */}

            <div>
                <h3>Radwan</h3>
                <ul className={`nav ${scrolled ? "scrolled" : ""}`}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>


            <div id="goal1" className="page1">
                <a href="#goal">go</a>
            </div>

            <div id="goal" className="page2">

                <div className="box  blur"> <h1>something</h1></div>
                <div className="box blur"> <h1>something</h1></div>

                <div className="box blur"> <h1>something</h1></div>

                <div className="abs blur"><p>messege </p></div>

            </div>

            <div id="goal3" className="page1">
                <a href="#goal">go</a>
            </div>

            <div className="modal">
                <ul>
                    <li><a href="#goal">page2</a></li>
                    <li><a href="#goal1">page1</a></li>
                    <li><a href="#goal3">page1</a></li>

                </ul>
            </div>
        </div>
    );
}
