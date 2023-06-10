import React, { useState } from "react";
import TextAreaField from "../forms/textAreaField";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const clearForm = () => {
        setData({});
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        clearForm();
    };
    return (
        <>
            <h2 className="text-secondary">Оставить комментарий</h2>
            <form
                onSubmit={handleSubmit}>
                <TextAreaField
                    heigh= "5rem"
                    value={data.content || ""}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-secondary"
                        style={{
                            color: "rgb(10, 24, 44)"
                        }}
                    ><b>Опубликовать</b>
                    </button>
                </div>
            </form>
        </>
    );
};
AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;
