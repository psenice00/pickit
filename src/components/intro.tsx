import fridge from '../assets/images/Fridge.png'
import React from 'react';
import { scroolToElement } from './utils/scrollTo';

export const Intro = () => {
    return (
        <main className="container row mx-auto d-flex align-items-center  extra-margin  p-0">
            <div data-aos="fade-up" className="col-12 col-lg-6 p-0 text-center text-lg-start">
                <h1 className='intro-text-color display-3'>Chytrá lednice</h1>
                <p className='text-white opacity-75 my-3 intro-desc'>s řízeným přístupem k produktům, online
                    <br />  skladovým systémem a možností <br /> automatizovaného prodeje.</p>
                <button onClick={() => scroolToElement("contactForm")} className='order-button rounded-pill text-white py-3 px-5'>
                    Objednat
                </button>
            </div>
            <div className="col-12 col-lg-6 ">
                <div data-aos="fade-left" className="fridge-circle rounded-circle mx-auto">
                    <img src={fridge} alt="chytrá lednice pickit" />
                </div>
            </div>
        </main>
    )
}