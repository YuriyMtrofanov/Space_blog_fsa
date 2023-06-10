import React from "react";
import { useSelector } from "react-redux";
import { getUsersList, getUsersLoadingStatus } from "../../../store/users";
import UsersLoader from "../../ui/HOC/usersLoader";
import UsersTable from "../../ui/usersTable";

const UsersListPage = () => {
    const users = useSelector(getUsersList());
    const isLoading = useSelector(getUsersLoadingStatus());
    return (
        <div
            className="users-list-page-container mx-100"
            style={{
                height: "auto",
                minHeight: "65rem"
            }}
        >
            {!isLoading && users &&
                <div className="container pb-5">
                    <div className="row">
                        <UsersLoader>
                            <UsersTable { ...{ users }}/>
                        </UsersLoader>
                    </div>
                </div>}
        </div>
    );
};

export default UsersListPage;
