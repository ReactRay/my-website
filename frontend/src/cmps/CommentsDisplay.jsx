


export function CommentsDisplay({ comments = [] }) {



    return (
        <div className="comment-container">
            {comments?.map((comment, index) => {
                return (
                    <div key={comment.user + index}>
                        <h3>{comment.user}</h3>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
        </div>
    )
}