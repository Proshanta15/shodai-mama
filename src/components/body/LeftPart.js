import React from 'react'
import home from '../../images/left/home.png';
import fresh from '../../images/left/fresh.png';
import regular from '../../images/left/regular.png';
import preorders from '../../images/left/preorders.png';
import hygiene from '../../images/left/hygiene.png';
import breakfast from '../../images/left/breakfast.png';
import cooking from '../../images/left/cooking.png';
import meat from '../../images/left/meat.png';
import fruits from '../../images/left/fruits.png';
import dairy from '../../images/left/dairy.png';
import frozen from '../../images/left/frozen.png';
import beverages from '../../images/left/beverages.png';
import kids from '../../images/left/kids.png';
import personal from '../../images/left/personal.png';
import home_kitchen from '../../images/left/home_kitchen.png';
import stationary from '../../images/left/stationary.png';


const LeftPart = () => {
    return (
        <>
        <div className="left_part">
            <div className="top_link">
                <ul>
                    <li>
                        <a href="#"><img src={home} alt="" /> Home </a>
                    </li>
                    <li>
                        <a href="#"><img src={fresh} alt="" /> Fresh </a>
                    </li>
                    <li>
                        <a href="#"><img src={regular} alt="" /> Regular </a>
                    </li>
                    <li>
                        <a href="#"><img src={preorders} alt="" /> Preorder </a>
                    </li>
                </ul>
            </div>
            <div className="link_title">
                    <a href="#"><p>Explore <span>Shodai</span><span>Mama</span></p></a>
                </div>
            <div className="bottom_link">
                
                <ul>
                    <li>
                        <a href="#"><img src={hygiene} alt="" /> Hygiene </a>
                    </li>
                    <li>
                        <a href="#"><img src={breakfast} alt="" /> Breakfast & Snacks </a>
                    </li>
                    <li>
                        <a href="#"><img src={cooking} alt="" /> Cooking </a>
                    </li>
                    <li>
                        <a href="#"><img src={meat} alt="" /> Meat & Fish </a>
                    </li>
                    <li>
                        <a href="#"><img src={fruits} alt="" /> Fruits & Vegetables </a>
                    </li>
                    <li>
                        <a href="#"><img src={dairy} alt="" /> Dairy </a>
                    </li>
                    <li>
                        <a href="#"><img src={frozen} alt="" /> Frozen & Canned </a>
                    </li>
                    <li>
                        <a href="#"><img src={beverages} alt="" /> Beverages </a>
                    </li>
                    <li>
                        <a href="#"><img src={kids} alt="" /> Kids care </a>
                    </li>
                    <li>
                        <a href="#"><img src={personal} alt="" /> Personal Care </a>
                    </li>
                    <li>
                        <a href="#"><img src={home_kitchen} alt="" /> Home & Kitchen </a>
                    </li>
                    <li>
                        <a href="#"><img src={stationary} alt="" /> Stationary </a>
                    </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default LeftPart
