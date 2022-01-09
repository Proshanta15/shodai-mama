import React from 'react'
import delivery from '../../images/same/fast-delivery.png';
import money_1 from '../../images/same/money-1.png';
import money_2 from '../../images/same/money-2.png';

const RegularCard = (props) => {
    return (
        <>
        <a href="#">
            <div className="item">
                <div className="fresh" style={{ background: '#0097E6'}}>
                    <small>{props.quality}</small>
                </div>
                <div className="img_descrip">
                    <img src={props.image} alt="" />
                    <p>{props.title}</p>
                    <p><small>{props.each}</small></p> 
                    <p>৳ <span>{props.tk}</span></p> 
                </div>
                <div className="details">
                    <a href="#">Details</a>
                </div>
                <div className="money">
                    <div className="time">
                        <img src={delivery} alt="" />
                        <span>{props.delivery}</span>
                    </div>
                    <div className="money_list">
                        <img src={money_1} alt="" />
                        <img src={money_2} alt="" />
                    </div>
                </div>
                <div className="cart_btn">
                    <a href="#"> Add To Cart</a>
                </div>
            </div>
        </a>
            
        </>
    )
}

export default RegularCard;
