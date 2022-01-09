import React from 'react'
import logo from '../../images/logo.png';
import leftArrow from '../../images/leftArrow.svg';
import { BsSearch } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { FaClipboardList } from 'react-icons/fa';
import './header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="left">
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>    
                                
                </div>
            </div>
            <div className="right">
                <div className="search">
                   <a href="#"><BsSearch className='search_icon'/></a> 
                </div>
                <div className="location">
                    <a href="#"><HiLocationMarker className='loc_icon'/> <span>Select Delivery Location</span> </a>
                </div>
                <div className="sign_in">
                    <a href="#"><BsFillPersonFill className='sign_icon'/><span>Sign In</span> </a>
                </div>
                <div className="cart">
                    <a href="#"><TiShoppingCart className='cart_icon'/></a>
                </div>
                <a href="#">
                <div className="cart_details">
                   
                    <div className="arrow">
                        <img src={leftArrow} alt="arrow" />
                    </div>
                    <p><FaClipboardList /> <span>0</span> </p>
                    <p> ৳ <span>0</span> </p>
                  
                </div>
                </a>
            </div>
        </div>
            
        </>
    )
}

export default Header
