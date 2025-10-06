import myImage from '../assets/me1.png'



export function ProfileImage() {



    return (
        <div className="image-box">


            <img className='my-image' src={myImage} alt="me" />

        </div>
    )
}