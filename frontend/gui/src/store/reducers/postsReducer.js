const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST'
const DELETE_POST = 'DELETE-POST';

let initialState = { posts: [] }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, action.post] };
        default:
            return state;
    }
};

export const getPosts = (posts) => ({ type: GET_POSTS, posts })

export default postReducer;