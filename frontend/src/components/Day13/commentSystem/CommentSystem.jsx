import React, { useState, useEffect } from 'react';
import './CommentSystem.css'

export default function CommentSystem() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const addComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    useEffect(() => {
        // You can fetch comments from an API here or use static data.
        // For demonstration purposes, we'll use static data.
        const staticComments = ['This is the first comment.', 'Great work!', 'I like this component.'];
        setComments(staticComments);
    }, []);

    return (
        <section className="comment-system">
            <h2>Comments</h2>
            <div className="comment-input">
                <textarea
                    rows="4"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment}>Post</button>
            </div>
            <div className="comment-list">
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        {comment}
                    </div>
                ))}
            </div>
        </section>
    );
}
