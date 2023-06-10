import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/forms/textField";
import SelectField from "../../common/forms/selectField";
import TextAreaField from "../../common/forms/textAreaField";
import {
    editArticleInfo,
    getArticById
} from "../../../store/articles";
import { getCategories } from "../../../store/categories";
import useValidate from "../../../hooks/useValidate";
import ModalCard from "../../common/modal/modalCard";

const ArticleEditPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { articleId } = useParams();
    const article = useSelector(getArticById(articleId));
    const categories = useSelector(getCategories());
    const categoriesList = categories.map(item => ({
        value: item._id,
        label: item.name
    }));

    const [inputData, setInputData] = useState({
        name: article.name,
        img: article.img,
        category: article.category,
        content: article.content
    });

    const validationConfig = {
        name: {
            isRequired: {
                message: "Введите название статьи"
            },
            min: {
                message: "Название должно состоять минимум из 5 символов",
                value: 5
            },
            max: {
                message: "Название не должно превышать 100 символов",
                value: 100
            }
        },
        img: {
            isUrl: {
                message: "Данные введены не корректно"
            }
        },
        category: {
            isRequired: {
                message: "Выьерете тематику статьи"
            }
        },
        content: {
            isRequired: {
                message: "Добавьте текст статьи"
            }
        }
    };

    const { errors, isAbled, validate } = useValidate({}, inputData, validator, validationConfig);

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleBack = () => {
        history.goBack();
    };

    const [modalActive, setModalActive] = useState(false);

    const handleRemove = () => {
        setModalActive(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...article,
            name: inputData.name,
            img: inputData.img,
            category: inputData.category,
            content: inputData.content
        };
        dispatch(editArticleInfo(articleId, outputData));
        history.goBack();
    };

    return (
        <div
            className="article-edit-container mx-100"
            style={{
                height: "auto",
                minHeight: "65rem"
            }}
        >
            <div className="modal-container">
                <ModalCard active={modalActive} setActive={setModalActive}/>
            </div>
            <div className="container">
                <div className="row">
                    <a
                        role="button"
                        className="col-3 text-secondary mt-3 h5"
                        onClick={handleBack}
                    >
                        <i className="bi bi-caret-left">Назад</i>
                    </a>
                    <div className="col-md-8 offset-md-2 shadow p-4 article-form-container">
                        <h1 className="text-center text-secondary">Добро пожаловать в редактор статей</h1>
                        <h5 className="text-center text-secondary">Здесь ты можешь материал своей публикации</h5>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Название статьи"
                                type="name"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Ссылка на изображение"
                                type="img"
                                name="img"
                                value={inputData.img}
                                onChange={handleChange}
                                error={errors.img}
                            />
                            <SelectField
                                label="Тематика статьи"
                                defaultOption="Выбрать из списка..."
                                options={categoriesList}
                                name="category"
                                onChange={handleChange}
                                value={inputData.category}
                                error={errors.category}
                            />
                            <TextAreaField
                                heigh="15rem"
                                label="Текст статьи"
                                name="content"
                                value={inputData.content || ""}
                                onChange={handleChange}
                                error={errors.content}
                            />
                            <div className="text-center">
                                <button
                                    className="btn btn-secondary mx-2"
                                    style={{
                                        color: "rgb(10, 24, 44)"
                                    }}
                                    type="submit"
                                    disabled={!isAbled}
                                >
                                    <b>Сохранить</b>
                                </button>
                                <a role="button" className="start-50 text-secondary h5 mx-2" onClick={handleRemove}>Удалить</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="main-page-container-footer">
                <h5 className="text-secondary text-center">Created by Mitrofanov Yuriy</h5>
            </div>
        </div>
    );
};

export default ArticleEditPage;
