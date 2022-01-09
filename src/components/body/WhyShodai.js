import React from 'react'


const WhyShodai = (props) => {
    return (
        <>
           
                <div className="why_item">
                    <div className="img">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="title">
                        <h6>{props.title}</h6>
                        <p>{props.description}</p>
                    </div>
                </div>
         
        </>
    )
}

export default WhyShodai;
