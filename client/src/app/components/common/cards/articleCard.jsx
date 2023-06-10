import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    editUserInfo,
    getCurrentUserData,
    getSelectedArticlesList,
    getSelectedArticlesStatus,
    getUserById
} from "../../../store/users";

const ArticleCard = ({ article }) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserById(article.author));
    const { firstName, lastName } = user;
    const currentUser = useSelector(getCurrentUserData());
    const [isSelected, setIsSelected] = useState(false);
    const selectedArticles = useSelector(getSelectedArticlesList(currentUser._id));
    const favorites = useSelector(getSelectedArticlesStatus(currentUser._id, article._id));

    useEffect(() => {
        favorites ? setIsSelected(false) : setIsSelected(true);
    }, []);

    const handleChange = () => {
        if (favorites) {
            setIsSelected(true);
            const outputData = {
                ...currentUser,
                selectedArticlesList: selectedArticles.filter(item => (item !== article._id))
            };
            dispatch(editUserInfo(outputData));
        } else {
            setIsSelected(false);
            const outputData = {
                ...currentUser,
                selectedArticlesList: [...selectedArticles, article._id]
            };
            dispatch(editUserInfo(outputData));
        }
    };
    const toggleBookmark = () => {
        return !isSelected ? "-fill" : "";
    };
    return (
        <div className="container m-2 article-card-lg">
            <div className="row">
                <div
                    className="col-xl-6 col-lg-12 article-card-content"
                    style={{
                        color: "grey",
                        textAlign: "justify"
                    }}
                >
                    <h3 className="card-title mb-3 mt-2">
                        <i className={"bi bi-bookmarks" + toggleBookmark()} onClick={handleChange}></i>{" "}
                        {article.name}
                    </h3>
                    <p className="card-content">{article.content.slice(0, 450) + "..."}</p>
                    <Link to={`/articles/${article._id}`}>
                        <p className="text-center text-secondary mb-4">Читать далее</p>
                    </Link>
                    <span className="card-subtitle mb-2 text-muted" style={{
                        color: "white",
                        justifyContent: "start",
                        alignItems: "baseline",
                        bottom: 0
                    }}>
                        <p>
                            {new Date(article.date).toLocaleDateString().toString()}
                            <b>{" by "}{ firstName }{" "}{ lastName }</b>
                        </p>
                    </span>
                </div>
                <div className="col-xl-6 col-lg-12 article-card-image">
                    <img
                        className="img-fluid"
                        alt="image"
                        src={article.img}
                        style={{
                            alignItems: "end",
                            height: "auto",
                            width: "100%"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object
};

export default ArticleCard;
