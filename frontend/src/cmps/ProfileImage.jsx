import myImage from '../assets/me.jpg'



export function ProfileImage() {



    return (
        <div className="image-box">

            <h2>memories never fade</h2>

            <img className='my-image' src={myImage} alt="me" />

        </div>
    )
}