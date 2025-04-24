import myImage from '../assets/me2.jpg'



export function ProfileImage() {



    return (
        <div className="image-box">


            <img className='my-image' src={myImage} alt="me" />

        </div>
    )
}