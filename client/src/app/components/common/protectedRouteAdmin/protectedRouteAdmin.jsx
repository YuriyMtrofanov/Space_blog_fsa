import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUserAccoutnType, getIsLoggedIn } from "../../../store/users";
import PropTypes from "prop-types";

const ProtectedRouteAuthor = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const accountType = useSelector(getCurrentUserAccoutnType());
    return (<Route { ...rest} render={(props) => {
        if (!isLoggedIn) {
            return <Redirect to="/login"/>;
        } else if (accountType !== "admin") {
            return <Redirect to="/"/>;
        }
        return Component ? <Component { ...props }/> : children;
    }}/>);
};

ProtectedRouteAuthor.propTypes = {
    component: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRouteAuthor;
