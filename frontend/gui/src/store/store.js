import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";


const reducers = combineReducers({
    posts: postsReducer,
})
const store = createStore(reducers)
export default store