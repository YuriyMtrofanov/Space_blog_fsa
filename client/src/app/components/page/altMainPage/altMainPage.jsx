import React from "react";
import LoginForm from "../../ui/loginForm";

const AltMainPage = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h5>Привет, посетитель!</h5>
                </div>
                <div className="col-md-4">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default AltMainPage;
