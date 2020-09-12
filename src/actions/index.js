import {
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    IS_EDITING,
    CANCEL_EDIT,
} from "../constants/action-types";

//action creation
export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});

export const deletePost = (post) => ({
    type: DELETE_POST,
    payload: post,
});

export const editPost = (post) => ({
    type: EDIT_POST,
    payload: post,
});

export const isEditing = (post) => ({
    type: IS_EDITING,
    payload: post,
});

export const cancelEdit = (post) => ({
    type: CANCEL_EDIT,
    payload: post,
});
