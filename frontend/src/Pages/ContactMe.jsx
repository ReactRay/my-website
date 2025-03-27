import { Element } from 'react-scroll';
import { useState } from 'react';
import { emailMe } from '../services/comment.actions';


export function ContactMe() {

    const [content, setContent] = useState({ emailFrom: '', message: '', name: '' })


    function handleChange(e) {

        const { name, value } = e.target

        setContent((prev) => ({ ...prev, [name]: value }))

        console.log(content, ' controlled baby')

    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!content.message || !content.name)
            return

        const response = emailMe(content)

        setContent({ emailFrom: '', message: '', name: '' })
    }



    return (

        <Element name='contact-me' className="contact-container">
            <h2>Contact me </h2>
            <form className="contact-form" data-aos="fade-down" onSubmit={handleSubmit}>

                <div className="input-container">
                    <input type="text" placeholder="your name" name='name' onChange={handleChange} />
                    <input type="email" placeholder="your email" name='emailFrom' onChange={handleChange} />
                </div>
                <div>
                    <textarea name="message" placeholder="your messege" onChange={handleChange}></textarea>
                </div>

                <div>
                    <button className='contact-btn'>message me</button>
                </div>

            </form>

        </Element>
    )
}