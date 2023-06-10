import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, onChange, heigh, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "text-secondary form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4 text-secondary">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <textarea
                    style={{
                        background: "rgb(10, 24, 44)",
                        borderColor: "grey",
                        height: heigh,
                        marginLeft: "12px"
                    }}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};
TextAreaField.defaultProps = {
    type: "text",
    height: "15rem"
};
TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    heigh: PropTypes.string,
    error: PropTypes.string
};

export default TextAreaField;
