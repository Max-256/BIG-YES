import React, { Fragment, useState } from 'react';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';
import { register } from '../services/user';
import Joi from 'joi-browser';

const Register = () => {
    const [error, setError] = useState({});

    const formData = {
          username: "",
          email: "",
          phoneNumber: "",
          location: "",
          password: "",
    };

    const formSchema = {
          username: Joi.string().trim().max(255).required(),
          email: Joi.string().email().trim().max(255).required(),
          phoneNumber: Joi.number().required(),
          location: Joi.string().trim().max(255).required(),
          password: Joi.string().trim().max(255).required()
    };   

    const doSubmit = async () => {
        try{
            const response = await register(data);
            localStorage.setItem("token", response.data);
            window.location = '/myShop';

        }catch(ex){
            if(ex.response && ex.response.status === 400)
            setError({message: ex.response.data});
        }   
    };

    const {data, renderInput, renderButton, handleSubmit } = 
    useForm(formData, formSchema, doSubmit);

    return (
        <Fragment>
            <h2 className='register-head'>BIG YES SHOP</h2>

            <div className='register'>            
            <Form onSubmit={handleSubmit}>
            {error && <p className='error'>{error.message}</p> }   
            {renderInput("username", "Username / Shopname")}
            {renderInput("email", "email")}
            {renderInput("phoneNumber", "Phone (for business)", "number")}
            {renderInput("location", "location")}
            {renderInput("password", "password", "password")}
            {renderButton("Create Account")}
            </Form>
        </div>
        </Fragment>
    );
};

export default Register;