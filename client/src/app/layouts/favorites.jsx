import React, { useEffect } from "react";
import ArticlePage from "../components/page/articlePage";
import FavoriteArticles from "../components/ui/favoriteArticles";
import { useParams } from "react-router-dom";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import UsersLoader from "../components/ui/HOC/usersLoader";
import { useDispatch, useSelector } from "react-redux";
import { getArticById, getArticlesList, loadArticlesList } from "../store/articles";

const Favorites = () => {
    const { articleId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);
    const articles = useSelector(getArticlesList());
    const article = useSelector(getArticById(articleId));

    return (
        <ArticlesLoader>
            <UsersLoader>
                <div
                    className="favorites-container mx-100 my-100"
                    style={{
                        height: "auto",
                        minHeight: "65rem"
                    }}
                >
                    {articleId
                        ? (<ArticlePage article={article}/>)
                        : (<FavoriteArticles articles={articles}/>)
                    }
                </div>
            </UsersLoader>
        </ArticlesLoader>
    );
};

export default Favorites;
