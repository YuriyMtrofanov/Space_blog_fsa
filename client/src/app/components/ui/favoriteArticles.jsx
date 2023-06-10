import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticlesTable from "./articlesTable";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import { getArticlesLoadStatus } from "../../store/articles";

const FavoriteArticles = ({ articles }) => {
    const isLoading = useSelector(getArticlesLoadStatus());
    const currentUser = useSelector(getCurrentUserData());
    const { selectedArticlesList } = currentUser;
    const favoriteArticles = selectedArticlesList.map(id => articles.find((article) => article._id === id));
    const [type, setType] = useState("stack");
    return (
        <>
            {!isLoading &&
                <div className="container">
                    <div className="row">
                        <div className="col-1 mt-4">
                            <b>
                                <i type="button" className="bi bi-hdd-stack text-secondary h2" onClick={() => setType("stack")}></i>
                                <b>{" | "}</b>
                                <i type="button" className="bi bi-grid text-secondary h2" onClick={() => setType("grid")}></i>
                            </b>
                        </div>
                        <div className="col-lg-10 mb-2">
                            <h1 className="text-secondary text-center mt-4">
                                Закладки
                            </h1>
                            <ArticlesTable { ...{ articles: favoriteArticles, displayType: type } }/>
                        </div>
                    </div>
                    <div className="main-page-container-footer mb-5">
                        <h5 className="text-secondary text-center">Created by Mitrofanov Yuriy</h5>
                    </div>
                </div>
            }
        </>
    );
};

FavoriteArticles.propTypes = {
    articles: PropTypes.array
};

export default FavoriteArticles;
