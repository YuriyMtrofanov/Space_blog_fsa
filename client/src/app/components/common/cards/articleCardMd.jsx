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

const ArticleCardMd = ({ article }) => {
    const dispatch = useDispatch();
    const user = useSelector(getUserById(article.author));
    const { firstName, lastName } = user;
    const currentUser = useSelector(getCurrentUserData());
    const selectedArticles = useSelector(getSelectedArticlesList(currentUser._id));
    const favorites = useSelector(getSelectedArticlesStatus(currentUser._id, article._id));
    const [isSelected, setIsSelected] = useState(false);

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
        <>
            {article &&
                <div
                    className="col-xl-4 col-lg-6 col-md-12"
                >
                    <div
                        className="card article-card-sm mt-4"
                        style={{
                            color: "grey",
                            textAlign: "center",
                            backgroundColor: "rgb(10, 24, 44)",
                            height: "30rem",
                            border: "none",
                            maxHeight: "40rem"
                        }}
                    >
                        <div className="article-card-sm-image">
                            <h4 className="position-absolute top-2 start-2">
                                <i className={"bi bi-bookmarks" + toggleBookmark()} onClick={handleChange}/>
                            </h4>
                            <img
                                src={article.img}
                                className="card-img-top w-100"
                                style={{
                                    maxWight: "15rem",
                                    height: "13rem"
                                }}
                                alt="image"/>
                        </div>
                        <div
                            className="card-body"
                            style={{
                                verticalAlign: "text-bottom"
                            }}
                        >
                            <h6 className="card-title h5"><b>{article.name.slice(0, 30) + "..."}</b></h6>
                            <p className="card-text">{article.content.slice(0, 150) + "..."}</p>
                            <Link to={`/articles/${article._id}`}>
                                <p className="card-title text-center text-secondary mb-2">Читать далее</p>
                            </Link>
                            <span
                                className="article-card-sm-subtitle text-secondary"
                            >
                                {new Date(article.date).toLocaleDateString()}{" "}
                                <b>{ firstName }{" "}{ lastName }</b>{" "}
                            </span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

ArticleCardMd.propTypes = {
    article: PropTypes.object
};

export default ArticleCardMd;
