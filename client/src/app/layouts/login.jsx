import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const changeFormType = () => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };

    return (
        <div
            className="login-form-container mx-100"
            style={{
                height: "auto",
                minHeight: "65rem"
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-4 login-form-container-body">
                        {formType === "register"
                            ? (<>
                                <h3 className="mb-4 text-secondary">Давайте зарегистрируем Ваш аккаунт</h3>
                                <RegisterForm />
                                <p className="text-secondary text-center mt-3">Уже зарегистрированы?{" "}
                                    <a className="text-secondary" role="button" onClick = {changeFormType}>
                                        <b>Войти</b>
                                    </a>
                                </p>
                            </>)
                            : (<>
                                <h3 className="mb-4 text-secondary">Рады видеть вас снова!</h3>
                                <LoginForm />
                                <p className="text-secondary mt-3">Нет аккаунта?{" "}
                                    <a className="text-secondary" role="button" onClick = {changeFormType}>
                                        <b>Зарегистрироваться</b>
                                    </a>
                                </p>
                            </>)}
                    </div>
                </div>
            </div>
            <div className="main-page-container-footer">
                <h5 className="text-secondary text-center">Created by Mitrofanov Yuriy</h5>
            </div>
        </div>
    );
};

export default Login;
