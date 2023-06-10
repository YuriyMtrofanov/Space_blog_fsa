import React, { useState } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../common/forms/textField";
import SelectField from "../../common/forms/selectField";
import TextAreaField from "../../common/forms/textAreaField";
import CheckBoxField from "../../common/forms/checkBoxField";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "../../../store/users";
import { createArticle } from "../../../store/articles";
import { useHistory } from "react-router-dom";
import { getCategories } from "../../../store/categories";
import useValidate from "../../../hooks/useValidate";
import randomInt from "../../../utils/randomInt";

const ArticleCreatePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserId = useSelector(getCurrentUserId());
    const categories = useSelector(getCategories());

    const [inputData, setInputData] = useState({
        name: "",
        author: "",
        date: "",
        img: "",
        category: "",
        content: "",
        rate: 0,
        licence: false
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
        },
        licence: {
            isRequired: {
                message:
                    "Материал может быть опубликован только при условии согласия с лицензионным соглашением"
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const outputData = {
            ...inputData,
            rate: randomInt(0, 50),
            date: Date.now(),
            author: currentUserId
        };
        dispatch(createArticle(outputData));
        history.replace("/articles");
    };

    if (categories) {
        const categoriesList = categories.map(item => ({
            value: item._id,
            label: item.name
        }));
        return (
            <div
                className="article-create-container mx-100"
                style={{
                    height: "auto",
                    minHeight: "65rem"
                }}
            >
                <div className="container">
                    <div className="row">
                        <a
                            role="button"
                            className="col-3 text-secondary h5"
                            onClick={handleBack}
                        >
                            <i className="bi bi-caret-left">Назад</i>
                        </a>
                        <div className="col-md-8 offset-md-2 p-4 article-form-container">
                            <h1 className="text-center text-secondary">Добро пожаловать в редактор статей</h1>
                            <h5 className="text-center text-secondary">Здесь ты можешь добавлять материалы на сайт и публиковать их.</h5>
                            <h5 className="text-center text-secondary">Заполни поля и отправь данные на модерацию.</h5>
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
                                    label="Выбери тему статьи"
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
                                <CheckBoxField
                                    value={inputData.licence}
                                    onChange={handleChange}
                                    name="licence"
                                    error={errors.licence}
                                >
                                    Подтвердить <a>лицензионное соглашение</a>
                                </CheckBoxField>
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-secondary justify-center mt-2 w-50"
                                        style={{
                                            color: "rgb(10, 24, 44)"
                                        }}
                                        type="submit"
                                        disabled={!isAbled}
                                    >
                                        <b>Сохранить</b>
                                    </button>
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
};

export default ArticleCreatePage;
