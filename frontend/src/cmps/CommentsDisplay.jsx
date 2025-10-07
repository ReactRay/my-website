import { memo } from "react";
import { CommentCard } from "./CommentCard";

export const CommentsDisplay = memo(({ comments }) => (
    <div className="comment-container">
        <div className="comment-list">
            {comments.map((comment, index) => (
                <CommentCard key={comment.id || index} {...comment} />
            ))}
        </div>
    </div>
));
