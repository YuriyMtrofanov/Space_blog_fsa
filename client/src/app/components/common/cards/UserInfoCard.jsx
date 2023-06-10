import React from "react";
import PropTypes from "prop-types";

const UserInfoCard = ({ user }) => {
    const { about, firstName, lastName } = user;
    return (
        <div
            className="card user-info-card text-secondary"
            style={{
                background: "rgb(10, 24, 44)",
                border: "none",
                marginLeft: "12px"
            }}
        >
            <div className="card-header">
                <h3>
                    <b>{firstName}{" "}{lastName}</b>
                </h3>
            </div>
            <div className="card-body">
                <div className="card-about mb-2">
                    <h5> Об авторе: </h5>
                    <ul>
                        {about}
                    </ul>
                </div>
            </div>
        </div>
    );
};

UserInfoCard.propTypes = {
    user: PropTypes.object
};

export default UserInfoCard;
