import {useEffect , useState , useContext} from "react";
import {useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import CartT from "../../components/Cart/Cart";
import { Context } from "../../hooks/context";
import "./Header.scss";


const Header = () => {
    const {cartCount}=useContext(Context);
    

    const navigate=useNavigate();
    const [ scrolled, setscrolled]=useState(false);
    const [ showCart, setshowCart]=useState(false);
    const [ showSearch, setshowSearch]=useState(false);
    const handleScroll=()=>{
        const offset=window.scrollY
        if (offset > 200){
            setscrolled(true);
        } else {
            setscrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[]);
  
    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>{navigate("/mizanweb/")}}>Home</li>
                <li onClick={()=>{navigate("/mizanweb/about")}}>About</li>
                <li onClick={()=>{navigate("/mizanweb/category")}}>Category</li>
            </ul>
            <div onClick={()=>{navigate("/mizanweb/")}} className="center">
                MIZANSTORE
            </div>
            <div className="right">
                <TbSearch onClick={()=>{
                    setshowSearch(true)
                }} />
                <AiOutlineHeart/>
                <span className="cart-icon" onClick={()=>{
                    setshowCart(true)
                }}>
                    <CgShoppingCart/>
                    {!!cartCount &&<span>{cartCount}</span>}
                </span>
                
            </div>
        </div>
    </header>
    {showCart && <CartT setshowCart={setshowCart}/> }
    {showSearch && <Search setshowSearch={setshowSearch}/> }
        </>
    )
};

export default Header;
