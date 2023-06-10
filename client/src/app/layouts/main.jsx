import React from "react";
import ArticlesLoader from "../components/ui/HOC/articlesLoader";
import { useSelector } from "react-redux";
import { getDataStatus, getIsLoggedIn, getUsersList } from "../store/users";
import { Redirect } from "react-router-dom";
import {
    getArticlesDataStatus,
    getArticlesList
} from "../store/articles";
import MainPage from "../components/page/mainPage/mainPage";
import Loading from "../components/ui/loading";

const Main = () => {
    const articlesList = useSelector(getArticlesList());
    const isArticlesLoaded = useSelector(getArticlesDataStatus());
    const usersList = useSelector(getUsersList());
    const isUsersLoaded = useSelector(getDataStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <>
            {isLoggedIn
                ? (isArticlesLoaded && isUsersLoaded
                    ? (<ArticlesLoader>
                        <MainPage articles={articlesList} users={usersList}/>
                    </ArticlesLoader>)
                    : (<Loading />))
                : (<Redirect to={"/login"}/>)
            }
        </>
    );
};

export default Main;
