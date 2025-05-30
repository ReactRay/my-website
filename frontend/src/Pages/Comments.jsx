import { useEffect, useState } from "react"
import { CommentsDisplay } from "../cmps/CommentsDisplay"
import { query, post } from "../services/comment.actions"
import { ImagePicker } from "../cmps/ImagePicker.jsx"
import { Popover } from "@mui/material"
import { Element } from "react-scroll"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { SendHorizontal } from 'lucide-react'

export function Comments() {

    const [comments, setComments] = useState([])
    const [messege, setMessege] = useState({ user: '', text: '', img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/4_dstrzt.png" })
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        getComments()
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function getComments() {
        const comments = await query();
        setComments(comments)
        console.log(comments, ' yay !')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const comment = await post(messege)
        setComments((prev) => [messege, ...prev,])
        showSuccessMsg(`thank you for posting ${messege.user} !`)
        setMessege({ user: '', text: '', img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/4_dstrzt.png" })

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
        showSuccessMsg('dragged successfully!')
    }

    function handleImageClick(img) {
        setMessege((prev) => ({ ...prev, img: img }))
        handleClose()

    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;





    return (

        <Element name="comments" className="comment-section">
            <h2>say something nice </h2>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="form-group">


                    <input value={messege.user} type="text" placeholder="your name" onChange={(e) => setMessege((prev) => ({ ...prev, user: e.target.value }))} required />
                </div>
                <div className="form-group">
                    <input value={messege.text} type="text" placeholder="say something nice" onChange={(e) => setMessege((prev) => ({ ...prev, text: e.target.value }))} required />
                </div>
                <div><img onClick={handleClick} className="img-picker-btn" src={messege.img} alt="img" width={'50px'} height={'50px'} /></div>
                <div>
                    <button type="submit">
                        <SendHorizontal className="icon" /> Submit
                    </button>
                </div>
            </form>

            <CommentsDisplay comments={comments} onDragEnd={onDragEnd} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ImagePicker handleImageClick={handleImageClick} />
            </Popover>
        </Element>
    )
}