import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/users";
import { useHistory } from "react-router-dom";

const LogOut = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
        history.replace("/login");
    }, []);
    return <h1>Log out</h1>;
};

export default LogOut;
