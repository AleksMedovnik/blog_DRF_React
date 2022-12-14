import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth'


const Login = props => {
    const onFinish = (values) => {
        props.onAuth(values.userName, values.password)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    let errorMessage = null
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        )
    }
    return (
        <div>
            {errorMessage}
            {
                props.loading ?
                    <Spin />
                    :
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button htmlType="submit">
                                Log in
                            </Button> Or <NavLink to='/signup/'>
                                Sign up
                            </NavLink>
                        </Form.Item>
                    </Form>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loding: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)