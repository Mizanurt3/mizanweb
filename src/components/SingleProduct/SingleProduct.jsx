import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
}
from "react-icons/fa";
import { useContext, useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../hooks/context";
import FetchByMizan from "../../hooks/FetchByMizan";
const SingleProduct = () => {
    const {handleAddToCart,} = useContext(Context);



    const [quantity, setQuantity] = useState(1)
    const increment=()=>{
        setQuantity(prevState=>prevState + 1)
    }

    const decrement=()=>{
        setQuantity((prevState)=>{
            if(prevState==1) return 1
            return prevState -1
        })
        
    }


    const {id}=useParams();
    
    const {loading, error, data}= FetchByMizan('/api/products?populate=*')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>;
    // console.log(data)

    let product = data.data.filter(product=>product.id==id)

    product = product[0];

    console.log(product)




    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={product.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.attributes.title}</span>
                        <span className="price">{product.attributes.price}&#2547;</span>
                        <span className="desc">{product.attributes.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button onClick={()=>{
                                handleAddToCart(product, quantity)
                                setQuantity(1)
                            }} className="add-to-cart-button">
                                <FaCartPlus size={20}/>
                                Add to Cart
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-item">
                            <div className="category">
                            <span  className="text-bold">Category:</span>
                            <span className="catitem">{product.attributes.categories.data[0].attributes.title}</span>
                            </div>
                            
                            <div className="Share">
                            <span className="text-bold">Share:</span>
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                                <FaTwitter size={16}/>
                            </span>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product.attributes.categories
                .data[0].id}/>
            </div>
        </div>
    )
};

export default SingleProduct;
