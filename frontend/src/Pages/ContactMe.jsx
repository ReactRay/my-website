



export function ContactMe() {




    return (

        <div className="contact-container">
            <h2>Contact me </h2>
            <form className="contact-form">

                <div className="input-container">
                    <input type="text" placeholder="your name" />
                    <input type="email" placeholder="your email" />
                </div>
                <div>
                    <textarea name="content" placeholder="your messege"></textarea>
                </div>


            </form>

        </div>
    )
}