import React from "react";
import { getAge } from "../../../utils/getAge";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../../store/users";

const UserImageCard = ({ user }) => {
    const history = useHistory();
    const currentUserId = useSelector(getCurrentUserId());
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    return (
        <div
            className="card user-imege-card"
            style={{
                background: "rgb(10, 24, 44)",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
                border: "none",
                shadow: "2px"
            }}
        >
            <div className="card-body">
                {currentUserId === user._id && (
                    <button
                        className="position-absolute top-0 end-0 btn btn-light btn-sm text-secondary"
                        style={{
                            background: "rgb(10, 24, 44)",
                            border: "none"
                        }}
                        onClick={handleClick}
                    >
                        <i className="bi bi-gear h3"></i>
                    </button>
                )}
                {user.accountType === "admin"
                    ? (<h3 className="text-secondary"><i className="bi bi-emoji-sunglasses"></i> Администратор</h3>)
                    : (user.accountType === "author"
                        ? (<h3 className="text-secondary"><i className="bi bi-emoji-smile"></i> Автор</h3>)
                        : (<h3 className="text-secondary"><i className="bi bi-emoji-smile"></i> Читатель</h3>))
                }
                <img
                    className="card-img-top rounded-circle p-2"
                    src={user.img}
                    alt="user image"
                    style={{
                        maxWidth: "20rem",
                        maxHeight: "20rem",
                        borderRadius: "50%",
                        margin: "auto"
                    }}
                />
                <div className="container">
                    <h4 className="card-title text-secondary">
                        <b>{user.firstName}{" "}{user.lastName}</b>
                    </h4>
                    <h5 className="card-title text-secondary">{`${getAge(user.birthDate)} года/лет`}</h5>
                    <h6 className="card-title text-secondary">
                        <i className="bi bi-geo-alt p-1"></i>
                        {user.city}{", "}{user.country}
                    </h6>
                </div>
            </div>
        </div>
    );
};

UserImageCard.propTypes = {
    user: PropTypes.object
};

export default UserImageCard;
