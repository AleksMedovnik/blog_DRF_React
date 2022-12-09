const GET_POSTS = 'GET_POSTS';
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST'
const DELETE_POST = 'DELETE-POST';

let initialState = { posts: [] }

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.posts };
        case ADD_POST:
            return { ...state, posts: [...state.posts, action.post] };
        default:
            return state;
    }
};

export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const addPost = (post) => ({ type: ADD_POST, post })

export default postReducer;