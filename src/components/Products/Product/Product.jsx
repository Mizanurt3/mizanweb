
import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { Navigate, useNavigate } from "react-router-dom";
const Product = ({id, data}) => {
// console.log(id)
    const navigate=useNavigate();
    return (
        
        <div  className="product-card" onClick={()=> navigate("/mizanweb/product/" + id)}>
            <div className="thumbnail" >
                <img src={data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">{data.price}&#2547;</span>
            </div>
        </div>
        
       

        
        
    )
};

export default Product;