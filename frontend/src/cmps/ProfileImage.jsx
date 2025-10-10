import myImage from '../assets/me1.png'
import { showSuccessMsg } from '../services/event-bus.service'



export function ProfileImage({ count }) {



    return (
        <div className="image-box" onClick={() => showSuccessMsg(`${count} this week`)}>


            <img className='my-image' src={myImage} alt="me" />

        </div>
    )
}