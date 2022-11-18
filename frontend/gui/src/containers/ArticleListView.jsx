import Article from "../components/Article";
import { useEffect, useState } from 'react';
import axios from 'axios';

const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

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

    return <Article data={state.articles} />
}

export default ArticleList