import React from "react";
import PropTypes from "prop-types";
import UserCardSmall from "../common/cards/userCardSmall";

const UsersTable = ({ users }) => {
    const authors = users.filter(u => u.accountType !== "resder");
    return (
        <>
            <h1 className="text-secondary">Авторы</h1>
            {authors.length > 0 &&
                authors.map(item =>
                    (<UserCardSmall key={item._id} user={item} />)
                )}
        </>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersTable;
