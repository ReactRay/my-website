

export function CommentCard({ user, text }) {


    return (
        <div className="comment-card">
            <h3>{user}</h3>
            <p>{text}</p>
        </div>
    )
}