import { Element } from 'react-scroll';
import { useState } from 'react';
import { emailMe } from '../services/comment.actions';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';
import { SendHorizontal } from 'lucide-react'


export function ContactMe() {

    const [content, setContent] = useState({ emailFrom: '', message: '', name: '' })


    function handleChange(e) {

        const { name, value } = e.target

        setContent((prev) => ({ ...prev, [name]: value }))

        console.log(content, ' controlled baby')

    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!content.message || !content.name || !content.emailFrom) {
            showErrorMsg('Please fill all the inputs ')
            return
        }

        const response = emailMe(content)

        setContent({ emailFrom: '', message: '', name: '' })
        showSuccessMsg(`Thank you for sending me a message ${content.name}!`)
    }



    return (

        <Element name='contact-me' className="contact-container">
            <h2>Contact me </h2>
            <form className="contact-form" data-aos="fade-down" onSubmit={handleSubmit}>

                <div className="input-container">
                    <input value={content.name} type="text" placeholder="your name" name='name' onChange={handleChange} />
                    <input value={content.emailFrom} type="email" placeholder="your email" name='emailFrom' onChange={handleChange} />
                </div>
                <div>
                    <textarea value={content.message} name="message" placeholder="your messege" onChange={handleChange}></textarea>
                </div>

                <div>

                    <button type="submit" className='contact-btn'>
                        <SendHorizontal className="icon" /> Submit
                    </button>

                </div>

            </form>

        </Element>
    )
}