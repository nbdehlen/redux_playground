import {ADD_POST, DELETE_POST, EDIT_POST, IS_EDITING, CANCEL_EDIT} from '../constants/action-types';

const initialState = {
    posts: [
        {
            id: 0.5570146319745093,
            title: 'Det tyckte han var så intressant',
            isEditing: false
        },
        {
            id: 0.6570146319745093,
            title: 'Så han gick och hämtade en annan elefant',
            isEditing: false
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            console.log(action, state)
            return {
                // ...state, posts: [...state.posts.find(post => post.id !== action.payload)]
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.payload)
                ]
            }
        case EDIT_POST:
            console.log(action.payload)
            return {
                ...state, posts: [...state.posts.map(post => {
                    console.log(action.payload)
                    return (
                        post.id === action.payload.id ? (console.log('Post: '+post+'     '),
                        {title: action.payload.title, id: action.payload.id, isEditing: false}) : post
                    )
                })]
            }
        case IS_EDITING:
            console.log('is editing')
            return {
                ...state, posts: [...state.posts.map(post => {
                    console.log(action.payload)
                    return (
                        post.id === action.payload.id ? (console.log('Post: '+post+'     '),
                        {id: action.payload.id, title: action.payload.title, isEditing: true}) : post
                    )
                })]
            }
        case CANCEL_EDIT:
            console.log('in CANCEL_EDIT reducer')
            return {
                ...state, posts: [...state.posts.map(post => {
                    console.log(action.payload)
                    return (
                        post.id === action.payload.id ? (console.log('Post: '+post.title+'     '),
                        {id: action.payload.id, title: post.title, isEditing: false}) : post
                    )
                })]
            }
        default:
            return state;
    }
}

export default rootReducer;