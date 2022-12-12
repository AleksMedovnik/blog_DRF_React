import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import CustomForm from "../components/Form";
import FormHOC from "./FormHOC";

const ArticleDetail = props => {
    const [state, setState] = useState({
        article: {}
    })

    const getPost = () => {
        axios.get(`http://127.0.0.1:8000/api/v1/postlist/${articleID}`)
            .then(result => setState({
                article: result.data
            }))
    }

    const articleID = useParams().id

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            <Card title={state.article.title}>
                <p>{state.article.content}</p>
            </Card>
            <h1>Update this post</h1>
            <FormHOC requestType='put' articleID={articleID} getPost={getPost} />
        </div>
    )
}

export default ArticleDetail