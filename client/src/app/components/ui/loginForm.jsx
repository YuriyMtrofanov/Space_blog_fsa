import React, { useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/forms/textField";
import CheckBoxField from "../common/forms/checkBoxField";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";
import { useHistory } from "react-router-dom";
import useValidate from "../../hooks/useValidate";

const loginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
        stayOn: false
    });

    const validationConfig = {
        email: {
            isRequired: {
                message: `Поле Email обязательно к заполнению`
            },
            isEmail: {
                message: `Email введен некорректно`
            }
        },
        password: {
            isRequired: {
                message: `Поле Password обязательно к заполнению`
            },
            isCapitalSymbol: {
                message: `Password должен содержать заглавные буквы`
            },
            isConteinDigit: {
                message: `Password должен содержать цифры`
            },
            min: {
                message: `Password должен содержать минимум из восьми символов`,
                value: 8
            }
        }
    };

    const { errors, isAbled, validate } = useValidate({}, inputData, validator, validationConfig);
    const [enterError, setEnterError] = useState(null);

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        setEnterError(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(login({
            payload: inputData
        }));
        history.push("/");
    };

    return (
        <form onSubmit = { handleSubmit }>
            <TextField
                title = "Email"
                type = "text"
                name = "email"
                value = {inputData.email}
                onChange = {handleChange}
                error = {errors.email}
            />
            <TextField
                title = "Password"
                type = "password"
                name = "password"
                value = {inputData.password}
                onChange = {handleChange}
                error = {errors.password}
            />
            <CheckBoxField
                name = "stayOn"
                value = {inputData.stayOn}
                onChange = {handleChange}
            >
                Оставаться в системе
            </CheckBoxField>
            {enterError && <p className="text-danger">{enterError}</p>}
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-secondary justify-center mt-2 w-50"
                    style={{
                        color: "rgb(10, 24, 44)"
                    }}
                    type="submit"
                    disabled={!isAbled || enterError}
                >
                    <b>Подтвердить</b>
                </button>
            </div>
        </form>
    );
};

export default loginForm;
