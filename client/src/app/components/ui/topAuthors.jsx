import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import UsersLoader from "./HOC/usersLoader";
import UserCardSmall from "../common/cards/userCardSmall";

const TopAuthors = ({ users }) => {
    const sortBy = { iter: "rate", order: "desc" };
    const authors = users.filter(user => user.accountType !== "reader");
    const TopAuthors = _.orderBy(authors, [sortBy.iter], [sortBy.order]).slice(0, 4);
    return (
        <UsersLoader>
            {users.length > 0 &&
                TopAuthors.map(item =>
                    (<UserCardSmall key={item._id} user={item} />)
                )}
        </UsersLoader>
    );
};

TopAuthors.propTypes = {
    users: PropTypes.array
};

export default TopAuthors;
