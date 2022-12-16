import Article from "../components/Article";
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormHOC from "./FormHOC";


const ArticleList = () => {
    const [state, setState] = useState({
        articles: []
    })

    const getPosts = () => {
        axios.get('http://127.0.0.1:8000/api/v1/postlist/', {
            headers: {
                Authorization: 'Token ' + '169ad514cfe97a09ef0656fd7f2ac713f202996c'
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
            <h2>Create an article</h2>
            <FormHOC requestType='post' getPosts={getPosts} />
            <Article data={state.articles} getPosts={getPosts} />
        </div>
    )
}

export default ArticleList





