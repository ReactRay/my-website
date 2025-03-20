
import { ProfileImage } from "../cmps/ProfileImage"
export function Hero() {


    return (
        <div className="first-section">

            <div className="home-container">

                <div className="animated-text">

                    <h1>hello ,im Radwan a Web <span>Developer</span></h1>


                    <h3>welcome to my website</h3>

                    <div className="link-box">
                        <a href="/Radwan_Mansur_Resume.pdf" download="Radwan_Mansur_CV.pdf">Download CV</a>

                        <a href="">Projects</a></div>


                </div>

                <div className="profile-img">

                    <ProfileImage />



                </div>


            </div>

        </div>
    )
}