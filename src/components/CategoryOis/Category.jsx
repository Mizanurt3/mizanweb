import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import fetchByReactQuery from "../../hooks/fetchByReactQuery";
const CategoryOis = () => {
    const {id}=useParams();
    const { data, isLoading, isError } = fetchByReactQuery(`/api/products?populate=*&[filters][categories][id]=${id}`); // Replace with your actual endpoint
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;
    
    

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
