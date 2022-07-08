import snowCap from '../../assets/images/snowCap.svg'
import tablet from '../../assets/images/tablet.png'
import React from 'react';
import { BlurElipse5 } from '../utils/blurElipse';

export const FourthSection = () => {

    return (
        <section id="fourthSection" className='light-background pt-4 pb-lg-5 pt-xl-5 pb-5 hide-overflow '>
            <img src={snowCap} alt="pozadí" className='snow-cap-transform pt-0 pt-md-2 pt-md-5 mt-0 mt-xl-1 w-100' />
            <div className='container mx-auto mt-5 pt-5'>
                <h1 data-aos="fade-up" className='text-center bold-text'>
                    Chytrý displej
                </h1>
                <p data-aos="fade-up" data-aos-delay="100" className='text-center my-5'>
                    Na displeji lednice vidíte veškerý sortiment s <br />
                    možností zobrazení detailního popisu produktu.
                </p>
                <div data-aos="fade-up" data-aos-delay="200" className='text-center mb-5 pb-5'>
                    <img src={tablet} alt="integrovaný tablet chytré lednice pickit" className=' col-12 col-md-8 col-lg-8' />
                </div>
            </div>
        </section>

    )
}