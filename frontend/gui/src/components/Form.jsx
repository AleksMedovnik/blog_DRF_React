import { useState } from "react";
import axios from 'axios';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;


const CustomForm = (props) => {

    const [state, setState] = useState({
        catSelectedID: props.state.catSelected.id,
    })

    const handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/v1/postlist/', {
                    title: title,
                    content: content,
                    cat: state.catSelectedID,
                    user: 1

                })
                    .then((response) => console.log(response))


            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/v1/postlist/${articleID}/`, {
                    title: title,
                    content: content,
                    cat: state.catSelectedID,
                    user: 1

                })
                    .then((response) => console.log(response))
        }

    }

    const handleChange = (value) => {
        setState({
            catSelectedID: value,
        });
    };

    return (
        <Form name="basic" onSubmitCapture={event => handleFormSubmit(
            event,
            props.requestType,
            props.articleID,
        )}>
            <Form.Item label="Title">
                <Input name='title' placeholder="Put a title here" required />
            </Form.Item>
            <Form.Item label="Content">
                <TextArea name='content' placeholder="Enter some content..." rows={4} />
            </Form.Item>
            <Form.Item label="Select a category">
                <Select
                    defaultValue={props.state.catSelected.name}
                    onChange={handleChange}
                    options={[
                        {
                            value: props.state.cats[0].id,
                            label: props.state.cats[0].name,
                        },
                        {
                            value: props.state.cats[1].id,
                            label: props.state.cats[1].name,
                        }
                    ]} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
export default CustomForm;