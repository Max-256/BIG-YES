import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {getProduct, putProduct} from '../services/marketService';
import Input from './Input';
import Textarea from './Textarea';

const EditGood = (props) => {
    const goodId = props.match.params.id;

    const [product, setProduct] = useState({});

    useEffect(() => {

        (async() => {
            try{
                const response = await getProduct(goodId);
                setProduct(response.data);

            } catch(ex){toast.error(ex.response.data)}            
        })();

    }, [goodId]);


    const handleSave = async () => {
      delete product._id;
      delete product.datePosted;
      delete product.__v;

      try{
        await putProduct(goodId, product);
        window.location = "/myShop";

      }catch(ex){toast.error(ex.response.data)}
    }


    return (
        <div className='editGood'>
            
            <div className='editImage' ><img src={product.image} alt="" /></div>

            <Input 
              name={"good"}  
              value={product.good} 
              label={"Product Name"} 
              product={product} setProduct={setProduct} />

            <Input 
              name={"price"}  
              value={product.price} 
              label={"Price"} 
              product={product} setProduct={setProduct} />

            
            <Textarea 
              name={"description"}
              value={product.description}
              label="Product Description"
              product={product} setProduct={setProduct} />

            <Textarea 
              name={"condition"}
              value={product.condition}
              label="Product Condition"
              product={product} setProduct={setProduct} /> 

            <button onClick={handleSave} className='btn btn-primary' >Save changes</button>  

        </div>
    );
};

export default EditGood;