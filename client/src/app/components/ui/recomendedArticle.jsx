import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../common/cards/articleCard";
import _ from "lodash";
import UsersLoader from "./HOC/usersLoader";

const RecomendedArticle = ({ articles }) => {
    const sortBy = { iter: "rate", order: "desc" };
    const recomendedArticle = _.orderBy(articles, [sortBy.iter], [sortBy.order])[0];
    return (
        <UsersLoader>
            {articles.length > 0 &&
                <ArticleCard article={recomendedArticle} />}
        </UsersLoader>
    );
};

RecomendedArticle.propTypes = {
    articles: PropTypes.array
};

export default RecomendedArticle;
