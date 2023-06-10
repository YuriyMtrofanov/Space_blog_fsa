import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCardSmall = ({ user }) => {
    return (
        <div
            className="col-lg-3 col-sm-6 p-1"
        >
            <div
                className="card user-card-sm"
                style={{
                    color: "grey",
                    textAlign: "center",
                    backgroundColor: "rgb(10, 24, 44)",
                    height: "24rem",
                    border: "none",
                    maxHeight: "40rem"
                }}
            >
                <div className="user-card-sm-image pt-3">
                    <img
                        src={user.img}
                        className="card-img-top w-100 p-2"
                        style={{
                            maxWidth: "17rem",
                            maxHeight: "17rem",
                            borderRadius: "50%",
                            margin: "auto"
                        }}
                        alt="image"/>
                </div>
                <div className="container mt-2">
                    <Link to={`/users/${user._id}/`}>
                        <h4 className="card-title text-secondary">
                            <b>{user.firstName}{" "}{user.lastName}</b>
                        </h4>
                    </Link>
                    <h6 className="card-title text-secondary mt-3">
                        <i className="bi bi-geo-alt p-1"></i>
                        {user.city}{", "}{user.country}
                    </h6>
                </div>
            </div>
        </div>
    );
};

UserCardSmall.propTypes = {
    user: PropTypes.object
};

export default UserCardSmall;
