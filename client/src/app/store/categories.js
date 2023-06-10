import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const ategorySlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoaded: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: categoriesReducer, actions } = ategorySlice;
const {
    categoriesRequested,
    categoriesReceived,
    categoriesRequestFailed
} = actions;

export const loadCategoriesList = () => async (dispatch, getState) => {
    dispatch(categoriesRequested());
    try {
        const { content } = await categoryService.get();
        dispatch(categoriesReceived(content));
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message));
    }
};

export const getCategories = () => (state) => state.categories.entities;
export const getCategoriesLoadStatus = () => (state) => state.categories.isLoading;
export const getCategoryById = (id) => (state) => state.categories.entities.find((p) => p._id === id);

export default categoriesReducer;
