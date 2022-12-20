import Article from "../components/Article";
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormHOC from "./FormHOC";
import * as actions from '../store/actions/auth'


const ArticleList = () => {
    const [state, setState] = useState({
        articles: []
    })

    const getPosts = () => {
        const token = actions.getToken()
        if (!token) return
        axios.get('http://127.0.0.1:8000/api/v1/postlist/', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
            .then(response => {
                setState({
                    articles: response.data
                });
            })
    }

    useEffect(() => {

        getPosts()
    }, [])

    return (
        <div>
            <FormHOC requestType='post' getPosts={getPosts} />
            <Article data={state.articles} getPosts={getPosts} />
        </div>
    )
}

export default ArticleList





