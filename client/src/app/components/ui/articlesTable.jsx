import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../common/cards/articleCard";
import ArticleCardMd from "../common/cards/articleCardMd";
import UsersLoader from "./HOC/usersLoader";

const ArticlesTable = ({ articles, displayType }) => {
    return (
        <UsersLoader>
            {displayType === "stack"
                ? articles.map(article => (
                    <ArticleCard key={article._id} {...{ article }}/>
                ))
                : (<div className="row">
                    {articles.map(article => (
                        <ArticleCardMd key={article._id} {...{ article }}/>
                    ))}
                </div>)
            }
        </UsersLoader>
    );
};

ArticlesTable.propTypes = {
    articles: PropTypes.array,
    displayType: PropTypes.string
};

export default ArticlesTable;
