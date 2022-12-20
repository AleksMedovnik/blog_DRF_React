import axios from 'axios';
import { Button, Form } from 'antd';
import * as actions from '../store/actions/auth'


const FormDelete = (props) => {

    const handleFormSubmit = (event, articleID) => {
        const token = actions.getToken()
        if (!token) return
        return axios.delete(`http://127.0.0.1:8000/api/v1/postdestroy/${articleID}/`, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
            .then((response) => console.log(response))
            .then(() => props.getPosts())
    }
    return (
        <Form name="basic" onSubmitCapture={event => handleFormSubmit(event, props.articleID)}>
            <Form.Item>
                <Button type="danger" htmlType="submit">Delete</Button>
            </Form.Item>
        </Form>
    );
};
export default FormDelete;