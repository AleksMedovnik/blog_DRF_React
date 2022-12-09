import axios from 'axios';
import { useEffect } from 'react';
import Article from "../components/Article";
import FormHOC from "./FormHOC";

const Articles = props => {
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/postlist/')
            .then(response => props.getPosts(response.data))
    }, [])

    return (
        <div>
            <h2>Create an article</h2>
            <FormHOC requestType='post' />
            <Article data={props.posts} />
        </div>
    )
}


export default Articles