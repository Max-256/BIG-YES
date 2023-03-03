
import React, { Fragment, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { login } from '../services/authService';

const Login = (props) => {
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

            const {state} = props.location;
            window.location = state ? state.from.pathname : "/myShop";
            
        }catch(ex){
            if(ex.response && ex.response.status === 400)
            setError({message: ex.response.data});
        }    
    };

    const {data, renderInput, renderButton, handleSubmit } = 
    useForm(formData, formSchema, doSubmit);

    return (
        <Fragment>

        <h2 className='login-shop-heading'>Login to your shop</h2>

        <div className='login'>
            
            <Form onSubmit={handleSubmit}>
            {error && <p className='error' >{error.message}</p> }
            {renderInput("email", "email")}
            {renderInput("password", "password", "password")}
            {renderButton("login")}
            </Form>
        </div>
            <p className='noAccount'>Don't have a shop yet?
            <Link className='link' to="/register">create one</Link> 
            
            </p>
        </Fragment>
    );
};

export default Login;