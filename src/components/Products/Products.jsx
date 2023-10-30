import "./Products.scss";
import Product from "./Product/Product"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Products = ({innerPage, headingText, prod,}) => {
    
    const navigate=useNavigate();
   console.log(prod)


 
    
    

    return (
        <div className="products-container">
            {!innerPage &&<div className="sec-heading">{headingText}</div>}
            <div className="products">
                
               
                {prod?.data?.map((item)=>(
                        
                     
                        <Product key={item.id} id={item.id} data={item.attributes}/>
                     
                    
                ))}
                 

               
                    
            </div>
            
        </div>
    )
};

export default Products;