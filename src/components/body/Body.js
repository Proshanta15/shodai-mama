import React from 'react'
import Footer from '../footer/Footer';
import './body.css';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Body = () => {
    return (
        <>
        <div className="body">
            <LeftPart />
            <RightPart />
            <Footer />
        </div>
            
        </>
    )
}

export default Body
