import { CommentCard } from "./CommentCard"
import {
    DragDropContext,
    Droppable,
    Draggable,
} from "@hello-pangea/dnd"

export function CommentsDisplay({ comments = [], onDragEnd }) {
    return (
        <div className="comment-container">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="comments">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="comment-list"
                        >
                            {comments.map((comment, index) => (
                                <Draggable
                                    key={comment.user + index}
                                    draggableId={comment.user + index}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            className="draggable-card"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <CommentCard {...comment} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
