import "./Category.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchByMizan from "../../hooks/FetchByMizan";
import Products from "../Products/Products";
const CategoryOis = () => {
    const {id}=useParams();
    const {loading, error, data}= FetchByMizan(`/api/products?populate=*&[filters][categories][id]=${id}`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    
    
    

    return(
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {data?.data[0].attributes.categories.data[0].attributes.title}
                </div>
                <div className="products-container">
                <Products prod={data} innerPage="true"/>
                </div>

                
            </div>
        </div>
    ) 
};

export default CategoryOis;
