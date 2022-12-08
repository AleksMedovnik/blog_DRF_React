import Article from "../components/Article";
import { useEffect, useState } from 'react';
import axios from 'axios';
import FormHOC from "./FormHOC";


const ArticleList = () => {
    const [state, setState] = useState({
        articles: []
    })

    useEffect(() => {
        if (state.articles.length === 0) {
            axios.get('http://127.0.0.1:8000/api/v1/postlist/')
                .then(response => {
                    setState({
                        articles: response.data
                    });
                })
        }
    }, [])

    return (
        <div>
            <h2>Create an article</h2>
            <FormHOC requestType='post' />
            <Article data={state.articles} />
        </div>
    )
}

export default ArticleList





