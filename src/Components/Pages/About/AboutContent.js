import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
    return (
        <div className='aboutMain'>
            <div className="container mt-50 mb-50">
                <div>
                    <div className="title justify-content-between">
                        <h1>About</h1> 
                    </div>
                    <div className="justify-content-start dFlex fWrap">
                        <p className='about'>Shopping Trendsetters is the number one detail oriented all-Egyptian clothes brand.</p>
                        <p className='about'>Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.</p>
                    </div>
                    <video></video>
                </div>
            </div>
        </div>
    )
}
export default AboutContent;
