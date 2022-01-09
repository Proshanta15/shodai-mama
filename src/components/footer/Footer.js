import React from 'react'
import logo from '../../images/logo.png';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

import { MdLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { RiCustomerServiceFill } from 'react-icons/ri';
import pay from '../../images/pay.png';
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_item">
                <div className="item">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="#"><AiFillFacebook className='social_icon'/></a></li>
                            <li><a href="#"><AiFillLinkedin className='social_icon'/></a></li>
                            <li><a href="#"><AiOutlineInstagram className='social_icon'/></a></li>
                            <li><a href="#"><AiFillYoutube className='social_icon'/></a></li>
                        </ul>
                    </div>
                    <div className="app">
                        <a href="#">SHODAIMAMA APP</a>
                        <div className="animation scroll_item"></div>
                    </div>
                    <div className="date">
                        <p>ShodaiMama © 2021</p>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h6>Useful Links</h6>
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="#">About ShodaiMama</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h6>Helpful Links</h6>
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="#">Why Choose ShodaiMama</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Delivery, Return & Refund</a></li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        <h6>Contact Us</h6>
                    </div>
                    <div className="address">
                        
                        <p><span><MdLocationOn className='add_icon'/></span><span>House 18, block: k, South Banasree, Dhaka</span> </p>
                        <p><span><FiMail className='add_icon'/></span><span>info@shodaimama.com</span> </p>
                        <p><span><RiCustomerServiceFill className='add_icon'/></span><span>support@shodaimama.com</span> </p>
                    </div>
                    <div className="phn">
                        <a href="#">Help : +8801894874999</a>
                    </div>               
                </div>
                </div>

                <div className="payment">
                    <div className="pay_img">
                    <img src={pay} alt="" />
                    </div>
                   
                </div>
                
            </div>
        </>
    )
}

export default Footer
