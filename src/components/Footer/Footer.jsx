import React from "react";
import { FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
import Newslatter from './Newsletter/Newsletter'
const Footer = () => {
    return (
        <>
        <Newslatter/>
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Voluptatem accusantium doloremque laudantium, totam rem Aperiam, eaque ipsa que av illo inventore veritatis et quasi architecto beatae bitae dicta sunt eplicabo eaque ipsa quee ahh illo</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">Mazadanga, Khokshabari hjkhfk halir Nilphamari.</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">01765653391, 01742734391</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">mizanurt3@gmaail/com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphone</div>
                    <div className="text">Smart Watch</div>
                    <div className="text">Bluetooth Speaker</div>
                    <div className="text">Wirless Yerbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projector</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Category</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Home</div>
                    <div className="text">Turms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Mizanur 20023 Created by Mizanur tech, Premium E-commerce
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Footer;
