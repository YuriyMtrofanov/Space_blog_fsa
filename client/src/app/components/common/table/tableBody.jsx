import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";
import { getCategoryById } from "../../../store/categories";

const TableBody = ({ article, onEdit, onDelete }) => {
    const author = useSelector(getUserById(article.author));
    const { firstName, lastName } = author;
    const category = useSelector(getCategoryById(article.category));
    const handleEdit = (id) => {
        onEdit(id);
    };
    const handleDelete = (id) => {
        onDelete(id);
    };

    if (!author && !category) return "loading...";
    return (
        <tr className="text-center">
            <td scope="col"><b>{article.name}</b></td>
            <td scope="col">{`${firstName} ${lastName}`}</td>
            <td scope="col">{category.name}</td>
            <td scope="col">{new Date(article.date).toLocaleDateString()}</td>
            <td scope="col">{article.rate}</td>
            <td scope="col">
                <a
                    role="button"
                    className="text-secondary"
                    onClick={() => handleEdit(article._id)}
                >
                    Редактировать
                </a>
            </td>
            <td scope="col">
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(article._id)}
                >Удалить</button>
            </td>
        </tr>
    );
};

TableBody.propTypes = {
    article: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default TableBody;
