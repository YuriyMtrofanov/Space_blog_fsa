import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./navProfile";
import { useSelector } from "react-redux";
import { getCurrentUserAccoutnType, getIsLoggedIn } from "../../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const accountType = useSelector(getCurrentUserAccoutnType());
    return (
        <nav
            className="navbar navbar-light sticky-top mx-100"
            style={{
                backgroundColor: "rgb(10, 24, 44)"
            }}
        >
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active text-light" aria-current="page" to="/"><h3><b>Space Blog</b></h3></Link>
                    </li>
                    {isLoggedIn &&
                    <li className="nav-item mt-2">
                        <Link className="nav-link active text-light" aria-current="page" to="/articles"><h5>Публикации</h5></Link>
                    </li>}
                    {isLoggedIn &&
                        <li className="nav-item mt-2">
                            <Link className="nav-link active text-light" aria-current="page" to="/favorites"><h5>Закладки</h5></Link>
                        </li>
                    }
                    {isLoggedIn && accountType !== "reader" &&
                        <li className="nav-item mt-2">
                            <Link className="nav-link active text-light" aria-current="page" to="/create"><h5>Создать</h5></Link>
                        </li>
                    }
                    {isLoggedIn && accountType === "admin" &&
                        <li className="nav-item mt-2">
                            <Link className="nav-link active text-light" aria-current="page" to="/admin"><h5>Администратор</h5></Link>
                        </li>
                    }
                </ul>
                <div className="d-flex">
                    {isLoggedIn
                        ? (<NavProfile/>)
                        : (<Link
                            className="nav-link active text-light"
                            aria-current="page"
                            to="/login"
                        >
                            <h5>Login</h5>
                        </Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
