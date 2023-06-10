import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editUserInfo, getCurrentUserData, getCurrentUserId, getSelectedArticlesList, getSelectedArticlesStatus, getUserById } from "../../../store/users";

const ArticleCardLg = ({ article }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const author = useSelector(getUserById(article.author));
    const currentUserId = useSelector(getCurrentUserId());
    const currentUser = useSelector(getCurrentUserData());
    const { firstName, lastName } = author;
    const [isSelected, setIsSelected] = useState(false);
    const selectedArticles = useSelector(getSelectedArticlesList(currentUserId));
    const favorites = useSelector(getSelectedArticlesStatus(currentUserId, article._id));
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
    const handleEdit = () => {
        history.push(`/articles/${article._id}/edit`);
    };
    return (
        <>
            {author &&
                <div
                    className="card article-page-card text-secondary"
                    style={{
                        background: "rgb(10, 24, 44)",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "1rem",
                        border: "none"
                    }}
                >
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h5 className="card-title h2 mb-3 mt-2">
                                <i className={"bi bi-bookmarks" + toggleBookmark()} onClick={handleChange}></i>{" "}
                                {article.name}
                            </h5>
                            <p
                                className="card-content"
                                style={{
                                    textAlign: "justify"
                                }}
                            >{article.content}</p>
                            <span className="card-subtitle mb-2 text-secondary">
                                <p>
                                    {new Date(article.date).toLocaleDateString().toString()}
                                    <b>{" by "}{ firstName }{" "}{ lastName }</b>
                                </p>
                            </span>
                        </div>
                        <div className="col-lg-6 col-sm-12 article-card-image">
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
                            {currentUserId === author._id &&
                                <button
                                    className="position-absolute top-0 end-0 btn btn-light btn-sm text-secondary"
                                    style={{
                                        background: "rgb(10, 24, 44)",
                                        border: "none"
                                    }}
                                    onClick={handleEdit}
                                >
                                    <i className="bi bi-gear h3"></i>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

ArticleCardLg.propTypes = {
    article: PropTypes.object
};

export default ArticleCardLg;
