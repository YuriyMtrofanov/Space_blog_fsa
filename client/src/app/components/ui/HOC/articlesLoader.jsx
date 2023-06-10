import { useDispatch, useSelector } from "react-redux";
import { getArticlesDataStatus, loadArticlesList } from "../../../store/articles";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ArticlesLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getArticlesDataStatus());
    useEffect(() => {
        if (!dataStatus) {
            dispatch(loadArticlesList());
        }
    }, []);
    if (!dataStatus) return "Loading...";
    return children;
};

ArticlesLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ArticlesLoader;
