import { Element } from 'react-scroll';




export function ContactMe() {




    return (

        <Element name='contact-me' className="contact-container">
            <h2>Contact me </h2>
            <form className="contact-form" data-aos="fade-down">

                <div className="input-container">
                    <input type="text" placeholder="your name" />
                    <input type="email" placeholder="your email" />
                </div>
                <div>
                    <textarea name="content" placeholder="your messege"></textarea>
                </div>


            </form>

        </Element>
    )
}