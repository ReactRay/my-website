


const images = [
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/8_dl4ntk.png" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/4_dstrzt.png" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/1_vpqirf.webp" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/5_nyvum6.png" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/7_j2kee1.png" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/6_nlsith.png" },
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/7_j2kee1.png" }, // repeated by request
    { img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863575/2_kzepiq.webp" }
];

export function ImagePicker() {

    return (
        <div className="image-picker">
            {images.map((img) => {
                return (
                    <div>
                        <img src={`${img.img}`} alt="img" width='50px' height='50px' />
                    </div>
                )
            })}
        </div>
    )

} 