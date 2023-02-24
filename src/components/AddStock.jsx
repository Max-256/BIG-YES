
import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';

const AddStock = () => {
    const [imageUrl, setImageUrl] = useState("");

    const formData = {
        good: "",
        price: "",
        description: "",
        condition: "",   
    };

    const formSchema = {
        good: Joi.string().trim().max(50).required(),
        price: Joi.number().min(0).required(),
        description: Joi.string().trim().required(),
        condition: Joi.string().trim().required()
    }


    const doSubmit = async () => {
        const product = {
            ...data,
            imageUrl
        };

        console.log(product);
    }



    const uploadImage = async (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "maxwell");

        const response = await axios.post("https://api.cloudinary.com/v1_1/dokrhaef5/image/upload", 
        formData);

        setImageUrl(response.data.url);
    }









    const {data, renderInput, renderButton, renderTextarea, handleSubmit} = 
    useForm(formData, formSchema, doSubmit);


    return (
        <div className='addStock'>

            <h2>Add Stock</h2>

            <Form onSubmit={handleSubmit} className="productForm" >
                {renderInput("good", "Product Name")}








                <div className='upload'>
                  <label htmlFor="camera">                    
                    <i className="fa fa-2x fa-camera"></i>
                    <input className='camera form-control'
                           onChange={e => uploadImage(e.target.files)}
                           id='camera' 
                           type="file" 
                           accept="image/png, image/jpg, image/gif, image/jpeg" 
                           required />
                  </label>
                </div>













                {renderInput("price", "Price", "Number")}
                {renderTextarea("description", "Product Description")}
                {renderTextarea("condition", "Product Condition")}
                {renderButton("Add to my shop")}
            </Form>

        </div>
    );
};

export default AddStock;