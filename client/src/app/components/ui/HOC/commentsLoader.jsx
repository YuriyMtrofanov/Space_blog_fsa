import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { getCommentsLoadStatus, loadCommentsList } from "../../../store/comments";

const CommentsLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getCommentsLoadStatus());
    useEffect(() => {
        if (isLoading) {
            dispatch(loadCommentsList());
        }
    }, []);
    if (isLoading) return "Loading...";
    return children;
};

CommentsLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CommentsLoader;
