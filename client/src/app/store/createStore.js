import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import categoriesReducer from "./categories";
import commentsReducer from "./comments";
import articlesReducer from "./articles";

const rootReducer = combineReducers({
    users: usersReducer,
    articles: articlesReducer,
    categories: categoriesReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
