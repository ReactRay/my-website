

export function CommentCard({ user, text, img }) {


    return (
        <div className="comment-card " >
            <div className="img-card">
                <img src={img} alt="img" />
            </div>
            <div className="comment-text-container">
                <h3>{user}</h3>
                <p>{text}</p>
            </div>

        </div>
    )
}