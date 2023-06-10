import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../common/forms/textField";
import SelectField from "../common/forms/selectField";
import { socialNetworksList } from "../../../references/socialNetworksList";

export default function AddLink({ memLink, index, changeLink }) {
    const [link, setLink] = useState(memLink);

    const handleChange = (target) => {
        setLink((prevState) => {
            const newState = { ...prevState, [target.name]: target.value };
            changeLink(newState);
            console.log("AddLink: ", newState);
            return newState;
        });
    };

    return (
        <>
            <p>Ссылка {index + 1}</p>
            <SelectField
                label="Выбери название"
                defaultOption="Выбери..."
                options={socialNetworksList}
                name="name"
                onChange={handleChange}
                value={link.label}
            />
            <TextField
                label="Ссылка"
                name="link"
                value={link.link}
                onChange={handleChange}
            />
        </>
    );
};

AddLink.propTypes = {
    memLink: PropTypes.object,
    changeLink: PropTypes.func,
    index: PropTypes.number
};
