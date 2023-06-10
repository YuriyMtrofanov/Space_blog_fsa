import React from "react";
import PropTypes from "prop-types";
import ArticleCardSmall from "../common/cards/articleCardSmall";
import _ from "lodash";
import UsersLoader from "./HOC/usersLoader";

const LatestArticles = ({ articles }) => {
    const sortBy = { iter: "date", order: "desc" };
    const latestArticles = _.orderBy(articles, [sortBy.iter], [sortBy.order]).slice(0, 4);
    return (
        <UsersLoader>
            {articles.length > 0 &&
                latestArticles.map(item =>
                    (<ArticleCardSmall key={item._id} article={item} />)
                )}
        </UsersLoader>
    );
};

LatestArticles.propTypes = {
    articles: PropTypes.array
};

export default LatestArticles;
