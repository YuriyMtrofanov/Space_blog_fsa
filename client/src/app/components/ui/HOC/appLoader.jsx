import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList
} from "../../../store/users";
import { getArticlesLoadStatus, loadArticlesList } from "../../../store/articles";
import { loadCategoriesList } from "../../../store/categories";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const articlesStatusLoading = useSelector(getArticlesLoadStatus());
    useEffect(() => {
        dispatch(loadCategoriesList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
            dispatch(loadArticlesList());
        }
    }, [isLoggedIn]);
    if (usersStatusLoading && articlesStatusLoading) return "loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default AppLoader;
