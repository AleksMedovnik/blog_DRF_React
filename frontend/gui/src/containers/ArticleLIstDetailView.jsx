import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import CustomForm from "../components/Form";

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
        <div>
            <Card title={state.article.title}>
                <p>{state.article.content}</p>
            </Card>
            <h1>Update this post</h1>
            <CustomForm requestType='put' articleID={articleID} />
        </div>
    )
}

export default ArticleDetail