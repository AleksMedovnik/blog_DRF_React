import { connect } from "react-redux";
import { getPosts } from "../store/reducers/postsReducer";
import Articles from "./Articles";


const mapStateToProps = state => ({ posts: state.posts.posts })

export default connect(
    mapStateToProps,
    { getPosts }
)(Articles);
