import React from 'react' ;
import {useEffect, useState} from "react";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", () => {
                if(window.scrollY > 500) {
                setBackToTopButton(true);
                } else {
                setBackToTopButton(false);
                }
            });
        },[]);

    const scrollUp = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        };
        return (
            <div className="App">
                {backToTopButton && (
                <button className='backUp' onClick={scrollUp}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                )}
            </div>
        );
    }
export default BackToTopButton;