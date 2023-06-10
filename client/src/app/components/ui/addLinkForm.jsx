import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import AddLink from "./addLink";

export default function AddLinksForm({ changeLink }) {
    const initialLink = {
        _id: nanoid(),
        name: "",
        link: "",
        img: ""
    };
    const [links, setLinks] = useState([initialLink]);

    const addLinkComponent = () => {
        setLinks([...links, { ...initialLink, _id: nanoid() }]);
    };

    return (
        <div className="mb-2">
            <h5>Ссылки на профиль</h5>
            {links.map((link, index) => (
                <AddLink
                    key={link._id}
                    memLink={link}
                    changeLink={changeLink}
                    index={index}
                />
            ))}
            <button className="btn btn-dark" onClick={addLinkComponent}>
                Добавить ссылку
            </button>
        </div>
    );
};

AddLinksForm.propTypes = {
    changeLink: PropTypes.func
};
