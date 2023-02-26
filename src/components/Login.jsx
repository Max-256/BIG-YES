
import React, { Fragment, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { login } from '../services/authService';

const Login = () => {
    const [error, setError] = useState({});

    const formData = {
        email: "",
        password: ""
    };

    const formSchema = {
        email: Joi.string().trim().email().max(255).required(),
        password: Joi.string().trim().max(255).required()
    };

    const doSubmit = async () => {
        try{
            const response = await login(data.email, data.password);
            localStorage.setItem("token", response.data);
            console.log(response.data);
        }catch(ex){
            if(ex.response && ex.response.status === 400)
            setError({message: ex.response.data});
        }    
    };

    const {data, renderInput, renderButton, handleSubmit } = 
    useForm(formData, formSchema, doSubmit);

    return (
        <Fragment>
        <div className='login'>
            
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
            {error && <p className='error' >{error.message}</p> }
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