import { motion } from "framer-motion";

export function CommentCard({ user, text, img }) {
    return (
        <motion.div
            className="comment-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="img-card">
                <img src={img} alt={user} />
            </div>
            <div className="comment-text-container">
                <h3>{user}</h3>
                <p>{text}</p>
            </div>
        </motion.div>
    );
}
