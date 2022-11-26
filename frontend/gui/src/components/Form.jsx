import { Button, Form, Input } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {
    const handleFormSubmit = (event, requestType) => {
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

        }
    }

    return (
        <Form name="basic" onSubmitCapture={event => handleFormSubmit(
            event,
            props.requestType
        )}>
            <Form.Item label="Title">
                <Input name='title' placeholder="Put a title here" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name='content' placeholder="Enter some content..." />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
export default CustomForm;