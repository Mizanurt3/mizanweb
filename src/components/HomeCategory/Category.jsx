import "./Category.scss";
import cat1 from "../../assets/category/cat-1.jpg";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { fetchDataFromApi } from "../../hooks/api";
import FetchByMizan from "../../hooks/FetchByMizan";
const Category = () => {
   const navigate=useNavigate();
    const {loading, error, data}= FetchByMizan('/api/categories?populate=*')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    let cate = data;
    console.log(cate)
    

    return (
        <div className="shp-by-category">
            
            <div className="categories">

            {cate?.data?.map((cat)=>
            
                <div key={cat.id}  className="category" onClick={()=>{
                    navigate(`/mizanweb/category/${cat.id}`)
                }}>
                    <h1>mikh</h1>
                     <img src={cat.attributes.img.data.attributes.url} alt="" /> 

                    
                </div>

            )}
            
            
                

                    
                
                
                
                
            </div>
        </div>
    )
};

export default Category
