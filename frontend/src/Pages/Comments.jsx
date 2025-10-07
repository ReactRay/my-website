import { useEffect, useState, useCallback } from "react";
import { CommentsDisplay } from "../cmps/CommentsDisplay";
import { query, post } from "../services/comment.actions";
import { ImagePicker } from "../cmps/ImagePicker.jsx";
import { Popover } from "@mui/material";
import { Element } from "react-scroll";
import { showSuccessMsg } from "../services/event-bus.service.js";
import { SendHorizontal } from "lucide-react";

export function Comments() {
    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState({
        user: "",
        text: "",
        img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/4_dstrzt.png",
    });
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await query();
            setComments(data);
        })();
    }, []);

    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleImageClick = useCallback((img) => {
        setMessage((prev) => ({ ...prev, img }));
        handleClose();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.user.trim() || !message.text.trim()) return;
        const newComment = { ...message, id: Date.now() };
        setComments((prev) => [newComment, ...prev]);
        await post(message);
        showSuccessMsg(`Thanks for your message, ${message.user}!`);
        setMessage({
            user: "",
            text: "",
            img: "https://res.cloudinary.com/danlxus36/image/upload/v1742863576/4_dstrzt.png",
        });
    };

    return (
        <Element name="comments" className="comment-section">
            <h2>Say something nice</h2>

            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    value={message.user}
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setMessage((prev) => ({ ...prev, user: e.target.value }))}
                    required
                />
                <input
                    value={message.text}
                    type="text"
                    placeholder="Say something nice..."
                    onChange={(e) => setMessage((prev) => ({ ...prev, text: e.target.value }))}
                    required
                />
                <img
                    onClick={handleClick}
                    className="img-picker-btn"
                    src={message.img}
                    alt="avatar"
                    width="50"
                    height="50"
                />
                <button type="submit">
                    <SendHorizontal className="icon" /> Send
                </button>
            </form>

            <CommentsDisplay comments={comments} />

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <ImagePicker handleImageClick={handleImageClick} />
            </Popover>
        </Element>
    );
}
