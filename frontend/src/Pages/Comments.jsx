import { useEffect, useState } from "react"
import { CommentsDisplay } from "../cmps/CommentsDisplay"
import { query, post } from "../services/comment.actions"

export function Comments() {

    const [comments, setComments] = useState([])
    const [messege, setMessege] = useState({ user: '', text: '' })

    useEffect(() => {
        getComments()
    }, [])

    async function getComments() {
        const comments = await query();
        setComments(comments)
        console.log(comments, ' yay !')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const comment = await post(messege)
        setComments((prev) => [messege, ...prev,])

    }

    function reorder(list, startIndex, endIndex) {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    function onDragEnd(result) {
        if (!result.destination) return
        const newComments = reorder(
            comments,
            result.source.index,
            result.destination.index
        )
        setComments(newComments)
    }



    return (

        <div className="comment-section">
            <h2>say something nice 😊</h2>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div>


                    <input type="text" placeholder="your name" onChange={(e) => setMessege((prev) => ({ ...prev, user: e.target.value }))} />
                </div>
                <div>
                    <input type="text" placeholder="say something nice" onChange={(e) => setMessege((prev) => ({ ...prev, text: e.target.value }))} />
                </div>
                <div>
                    <button>click</button>
                </div>
            </form>

            <CommentsDisplay comments={comments} onDragEnd={onDragEnd} />
        </div>
    )
}