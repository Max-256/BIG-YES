
import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';

const Login = () => {

    const formData = {
        email: "",
        password: ""
    };

    const formSchema = {
        email: Joi.string().trim().email().max(255).required(),
        password: Joi.string().trim().max(255).required()
    };

    const doSubmit = () => {
        console.log(data);
    };

    
    const {data, renderInput, renderButton, handleSubmit } = 
    useForm(formData, formSchema, doSubmit);


    return (
        <Fragment>
        <div className='login'>
            
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
            {renderInput("email", "email")}
            {renderInput("password", "password", "password")}
            {renderButton("login")}
            </Form>
        </div>
            <p className='noAccount'>Don't have an account?
            <Link className='link' to="/register">sign-up</Link> 
            
            </p>
        </Fragment>
    );
};

export default Login;