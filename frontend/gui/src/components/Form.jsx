import { Button, Form, Input } from 'antd';
import axios from 'axios';
const { TextArea } = Input;

const CustomForm = (props) => {
    const handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/v1/postlist/', {
                    title: title,
                    content: content,
                    cat: 1,
                    user: 1

                })
                    .then((response) => console.log(response))


                case 'put':
                    return axios.put(`http://127.0.0.1:8000/api/v1/postlist/${articleID}/`, {
                        title: title,
                        content: content,
                        cat: 1,
                        user: 1
    
                    })
                        .then((response) => console.log(response))
        }
    }

    return (
        <Form name="basic" onSubmitCapture={event => handleFormSubmit(
            event,
            props.requestType,
            props.articleID
        )}>
            <Form.Item label="Title">
                <Input name='title' placeholder="Put a title here" required />
            </Form.Item>
            <Form.Item label="Content">
                <TextArea name='content' placeholder="Enter some content..." rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
export default CustomForm;