import { orderBy } from "lodash";
import React, { useEffect } from "react";
import AddCommentForm from "../forms/addCommentForm";
import CommentsList from "./commentsList";
import CommentsLoader from "../../ui/HOC/commentsLoader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../ui/loading";
import { getCurrentUserId } from "../../../store/users";
import { createComment, getComments, getCommentsLoadStatus, loadCommentsList, removeComment } from "../../../store/comments";

const Comments = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const currentUserId = useSelector(getCurrentUserId());
    const comments = useSelector(getComments());
    const isLoading = useSelector(getCommentsLoadStatus());
    useEffect(() => {
        dispatch(loadCommentsList(params.articleId));
    }, [params.articleId]);

    const handleSubmit = (data) => {
        const comment = {
            ...data,
            pageId: params.articleId,
            created_at: Date.now(),
            userId: currentUserId
        };
        console.log("Comments: ", comment);
        dispatch(createComment(comment));
    };
    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div
                className="card mb-2"
                style={{
                    border: "none"
                }}
            >
                {" "}
                <div
                    className="card-body"
                    style={{
                        backgroundColor: "rgb(10, 24, 44)"
                    }}
                >
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div
                    className="card mb-3"
                    style={{
                        backgroundColor: "rgb(10, 24, 44)",
                        border: "none"
                    }}
                >
                    <div
                        className="card-body text-secondary h5"
                    >
                        <h2>Комментарии</h2>
                        <hr />
                        {!isLoading
                            ? (<CommentsLoader>
                                <CommentsList
                                    comments={sortedComments}
                                    onRemove={handleRemoveComment}
                                />
                            </CommentsLoader>)
                            : <Loading />
                        }
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
