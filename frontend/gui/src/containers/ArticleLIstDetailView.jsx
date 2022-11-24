import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { useParams } from "react-router-dom";

const ArticleDetail = props => {
    const [state, setState] = useState({
        article: {}
    })

    const articleID = useParams().id

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/postlist/${articleID}`)
            .then(result => setState({
                article: result.data
            }))
    })

    return (
        <Card title={state.article.title}>
            <p>{state.article.content}</p>
        </Card>
    )
}

export default ArticleDetail