import React from "react";
import PropTypes from "prop-types";
import Loading from "../../ui/loading";
import Comments from "../../common/comments/comments";
import UsersLoader from "../../ui/HOC/usersLoader";
import {
    useSelector
} from "react-redux";
import { getUsersLoadingStatus } from "../../../store/users";
import ArticleCardLg from "../../common/cards/articleCardLg";

const ArticlePage = ({ article }) => {
    const isLoading = useSelector(getUsersLoadingStatus());
    return (
        <>
            {!isLoading
                ? (
                    <UsersLoader>
                        <div
                            className="article-page-container mx-100"
                            style={{
                                height: "auto",
                                minHeight: "65rem"
                            }}
                        >
                            <div className='container article-page-container-body pb-5'>
                                <ArticleCardLg article={ article }/>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="col-8">
                                        <Comments/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </UsersLoader>
                )
                : (<Loading />)
            }
        </>
    );
};

ArticlePage.propTypes = {
    article: PropTypes.object
};

export default ArticlePage;
