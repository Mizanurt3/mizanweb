import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import {MdClose} from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../hooks/context";
const CartItem = () => {

    
    

    const {cartItems,handleAddToCart,handleRemoveFromCart,handleCartProductQuantity}=useContext(Context);


    return <div className="cart-products">
        {cartItems.map(item=>(
            <div key={item.id} className="cart-product">
            <div className="img-container">
                <img src={`${item.attributes.img.data[0].attributes.url}`} alt="" />
            </div>
            <div className="prod-details">
                <>
                <span className="name">{item.attributes.title}</span>
                <MdClose onClick={()=>{
                    handleRemoveFromCart(item)
                }} className="close-btn"/>
                </>
                
                <div className="quantity-buttons">
                    <span onClick={()=>{handleCartProductQuantity("dec", item)}}>-</span>
                    <span>{item.attributes.quantity}</span>
                    <span onClick={()=>{handleCartProductQuantity("inc", item)}}>+</span>
                </div>
                <div className="text">
                    <span>{item.attributes.quantity}</span>
                    <span>x</span>
                    <span className="highlight">{item.attributes.price}&#2547;</span>
                    <span>=</span>
                    <span className="highlight">{item.attributes.quantity * item.attributes.price}&#2547;</span>
                </div>
            </div>
        </div>
        ))}
        
    </div>;
};

export default CartItem;
