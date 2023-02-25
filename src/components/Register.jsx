
import React, { Fragment } from 'react';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';
import Joi from 'joi-browser';

const Register = () => {

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

    const doSubmit = () => {
          console.log(data);
    };

    
    const {data, renderInput, renderButton, handleSubmit } = 
    useForm(formData, formSchema, doSubmit);



    return (
        <Fragment>
            <h2 className='register-head'>BIG YES ACCOUNT</h2>

            <div className='register'>            
            <Form onSubmit={handleSubmit}>
            {renderInput("username", "Username")}
            {renderInput("email", "email")}
            {renderInput("phoneNumber", "Phone", "number")}
            {renderInput("location", "location")}
            {renderInput("password", "password", "password")}
            {renderButton("Create Account")}
            </Form>
        </div>
        </Fragment>
    );
};

export default Register;