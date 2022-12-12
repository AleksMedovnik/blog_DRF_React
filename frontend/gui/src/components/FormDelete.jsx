import axios from 'axios';
import { Button, Form } from 'antd';


const FormDelete = (props) => {

    const handleFormSubmit = (event, articleID) => {
        return axios.delete(`http://127.0.0.1:8000/api/v1/postdestroy/${articleID}/`)
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