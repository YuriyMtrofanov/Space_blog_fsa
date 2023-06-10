import React from "react";
import PropTypes from "prop-types";

const DateField = ({
    label,
    name,
    value,
    onChange,
    error
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "text-secondary form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4 text-secondary">
            <label htmlFor="inputDate">{ label }</label>
            <div className="input-group date has-validation">
                <input
                    style={{
                        backgroundColor: "rgb(10, 24, 44)",
                        borderColor: "grey",
                        marginLeft: "auto"
                    }}
                    type = "date"
                    id = {name}
                    name = {name}
                    value = {value}
                    onChange = {handleChange}
                    className = {getInputClasses()}
                />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
                {error &&
                    <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

DateField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default DateField;
