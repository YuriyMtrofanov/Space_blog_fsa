import { createAction, createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";

const commentSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoaded: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentCreateSucceeded: (state, action) => {
            state.entities.push(action.payload);
        },
        commentRemoveSuccessed: (state, action) => {
            state.entities = state.entities.filter(comment => comment._id !== action.payload);
        }
    }
});

const { reducer: commentsReducer, actions } = commentSlice;
const {
    commentsRequested,
    commentsReceived,
    commentsRequestFailed,
    commentCreateSucceeded,
    commentRemoveSuccessed
} = actions;

const commentCreateRequested = createAction("comments/commentCreateRequested");
const commentCreateFailed = createAction("comments/commentCreateFailed");
const commentRemoveRequest = createAction("comments/commentRemoveRequest");
const commentRemoveFailed = createAction("comments/commentRemoveFailed");

export const loadCommentsList = (pageId) => async (dispatch, getState) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.get(pageId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const createComment = (payload) => async (dispatch) => {
    dispatch(commentCreateRequested());
    try {
        const { content } = await commentService.create(payload);
        dispatch(commentCreateSucceeded(content));
    } catch (error) {
        dispatch(commentCreateFailed(error.message));
    }
};

export const removeComment = (commentId) => async (dispatch) => {
    dispatch(commentRemoveRequest());
    try {
        const { content } = await commentService.delete(commentId);
        if (!content) {
            dispatch(commentRemoveSuccessed(commentId));
        }
    } catch (error) {
        dispatch(commentRemoveFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadStatus = () => (state) => state.comments.isLoading;
export const getCommentsById = (id) => (state) => state.comments.entities.find((p) => p._id === id);

export default commentsReducer;
