import CommentForm from "./CommentForm";

const Comment = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId,
}) => {
    const isEditing =
        activeComment &&
        activeComment.id === comment.id &&
        activeComment.type === "editing";
    const isReplying =
        activeComment &&
        activeComment.id === comment.id &&
        activeComment.type === "replying";
    const replyId = parentId ? parentId : comment.id;
    return (
        <div key={comment.id} className="comment">
            <div className="comment-image-container">
                <img src="/ava.png" alt="ava" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                </div>
                {!isEditing && (
                    <div className="comment-text">{comment.body}</div>
                )}
                <div className="comment-actions">
                    <div
                        className="comment-action"
                        onClick={() =>
                            setActiveComment({
                                id: comment.id,
                                type: "replying",
                            })
                        }
                    >
                        Ответить
                    </div>

                    <div
                        className="comment-action"
                        onClick={() => deleteComment(comment.id)}
                    >
                        Удалить
                    </div>
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Отправить"
                        handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                parentId={comment.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;
