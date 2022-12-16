import { useState } from "react";
import axios from 'axios';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;



const CustomForm = (props) => {

    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')
    const titleValueChange = (event) => {
        setTitleValue(event.target.value)
    }
    const contentValueChange = (event) => {
        setContentValue(event.target.value)
    };

    const [state, setState] = useState({
        catSelectedID: props.state.catSelected.id,
    })

    const handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value
        const content = event.target.elements.content.value

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/v1/postlist/',
                    {
                        title: title,
                        content: content,
                        cat: state.catSelectedID
                    },
                    {
                        headers: {
                            Authorization: 'Token ' + '169ad514cfe97a09ef0656fd7f2ac713f202996c'
                        }
                    })
                    .then((response) => console.log(response))
                    .then(() => props.getPosts())
                    .then(() => setTitleValue(''))
                    .then(() => setContentValue(''))


            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/v1/postlist/${articleID}/`, {
                    title: title,
                    content: content,
                    cat: state.catSelectedID
                },
                {
                    headers: {
                        Authorization: 'Token ' + '169ad514cfe97a09ef0656fd7f2ac713f202996c'
                    }
                })
                    .then((response) => console.log(response))
                    .then(() => props.getPost())
                    .then(() => setTitleValue(''))
                    .then(() => setContentValue(''))
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
                <Input
                    name='title'
                    placeholder="Put a title here"
                    required
                    value={titleValue}
                    onChange={titleValueChange} />
            </Form.Item>
            <Form.Item label="Content">
                <TextArea
                    name='content'
                    placeholder="Enter some content..."
                    rows={4}
                    value={contentValue}
                    onChange={contentValueChange} />
            </Form.Item>
            <Form.Item label="Select a category">
                <Select
                    defaultValue={props.state.catSelected.name}
                    onChange={handleChange}
                    options={props.state.cats.map(cat => ({
                        value: cat.id,
                        label: cat.name,
                    }))} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
export default CustomForm;