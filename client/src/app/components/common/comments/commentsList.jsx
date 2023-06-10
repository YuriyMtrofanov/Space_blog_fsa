import React from "react";
import PropTypes from "prop-types";
import CommentCard from "../cards/CommentCard";

const CommentsList = ({ comments, onRemove }) => {
    return comments.map((comment) => (
        <CommentCard key={comment._id} {...comment} onRemove={onRemove}/>
    ));
};
CommentsList.propTypes = {
    comment: PropTypes.array,
    onRemove: PropTypes.func
};

export default CommentsList;
