import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute/protectedRoute";
import ProtectedRouteAuthor from "./components/common/protectedRoureAuthor";
import ProtectedRouteAdmin from "./components/common/protectedRouteAdmin";
import { ToastContainer } from "react-toastify";
import Articles from "../app/layouts/articles";
import Main from "./layouts/main";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import NavBar from "./components/ui/navBar";
import Users from "./layouts/users";
import Favorites from "./layouts/favorites";
import AppLoader from "./components/ui/HOC/appLoader";
import Admin from "./layouts/admin";
import Create from "./layouts/create";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar/>
                <Switch>
                    <Route path = "/" exact component={Main}/>
                    <ProtectedRoute path = "/users/:userId?/:edit?" component={Users}/>
                    <ProtectedRoute path = "/articles/:articleId?/:edit?" component={Articles}/>
                    <ProtectedRoute path = "/favorites/:articleId?" component={Favorites}/>
                    <ProtectedRouteAuthor path = "/create" component={Create} />
                    <ProtectedRouteAdmin path = "/admin" component={Admin}/>
                    <Route path = "/login/:type?" component={Login}/>
                    <Route path = "/logout" component={LogOut} />
                    <Redirect to = "/"/>
                </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
};

export default App;
