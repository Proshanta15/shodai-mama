import React from 'react'

const ShodaiCatCard = (props) => {
    return (
        <>
            <a href="#">
                <div className="cat_item">
                    <img src={props.image} alt="" />
                    <p>{props.title}</p>
                </div>
            </a>
        </>
    )
}

export default ShodaiCatCard;
