import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../hooks/context";
import { } from "../../hooks/context";
import { useState } from "react";
import { json } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";

const CartT = ({setshowCart}) => {

    const {cartSubTotal,cartItems}=useContext(Context)

//     const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

//     const handlePayment = async () => {

//     }
const [data, setData]= useState({
    name:"", currency:"", postCode:"",address:"", phone:""
});

let name , value;
const handleInputs=(e)=>{
    // setData(e.target.name = e.target.value)
    name=e.target.name;
    value=e.target.value
    setData({...data, [name]:value})

}
console.log(data)

const onSubmit = ()=>{
    console.log(data)
    data.productId = 1
    fetch("https://mizanapi.onrender.com/order",{
        method:"POST",
        headers:{"cotent-type":"application.json"},
        body: JSON.stringify(data),
    });

}



return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="user-form">
                <div className="content">
                    <form action="">
                        <label htmlFor="kk">Name:
                        <input type="text" id="kk" name="name"
                        value={data.name}
                        onChange={handleInputs}
                        />
                        </label>
                        <br />
                        <br />
                        <label htmlFor="dfd">currency:
                        <select id="dfd" name="currency" value={data.currency} onChange={handleInputs}>
                            <option  value="j">select</option>
                            <option  value="BDT">BDT</option>
                            <option value="inr">inr</option>
                        </select>
                        </label>
                        <br />
                        <br />
                        <label htmlFor="ghh">Post Code:
                        <input type="number" id="ghh" name="postCode"
                        value={data.postCode}
                        onChange={handleInputs}
                        />
                        </label>
                        <br />
                        <br />
                        <label htmlFor="uuu">Address:
                        <input type="text" id="uuu" name="address"
                        value={data.address}
                        onChange={handleInputs}
                        />
                        </label>
                        <br />
                        <br />
                        <label htmlFor="uuuuu">Phone:
                        <input type="number" id="uuuuu" name="phone"
                        value={data.phone}
                        onChange={handleInputs}
                        />
                        </label>
                    </form>

                </div>

            </div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=> setshowCart(false)} >
                    <MdClose/>
                    <span className="text">close</span>
                    </span>
                </div>
                {!cartItems.length && <div className="emty-cart">
                    <BsCartX/>
                    <span>No Products in the cart</span>
                    <button onClick={()=> setshowCart(false)} className="return-cta">Return to Shop</button>
                </div>}

                {!!cartItems.length &&<>
                    <CartItem/>
                    
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>
                            <span className="text total">{cartSubTotal}&#2547;</span>
                        </div>
                        <div className="button">
                            <button onClick={onSubmit}  className="checkout-cta"
                            
                            >Checkout</button>
                        </div>
                    </div>

                </>}

            </div>
        </div>
    )
};

export default CartT;
