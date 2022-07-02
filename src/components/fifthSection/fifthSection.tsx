import map from '../../assets/images/map.png'
import envelope from '../../assets/images/envelope.png'
import { Form } from './form'
import React from 'react';
import { BlurElipse3, BlurElipse4 } from '../utils/blurElipse';


export const FifthSection = () => {
    return (
        <section className='mb-5'>
            <div id="fifthSection" className="row mt-0 mt-md-5 pt-5 d-flex align-items-center position-relative">
                <BlurElipse4 />
                <BlurElipse3 />
                <div data-aos="fade-right" className="col-12 col-lg-6 d-flex justify-content-center">
                    <img src={map} className="w-75" />
                </div>
                <div data-aos="fade-up" className="col-12 col-lg-6 flex-column text-center">
                    <h1 className='text-white mb-2 mb-md-5 mt-5 mt-md-0'> Naše kontakty</h1>
                    <p className='text-white opacity-75 '><i className="fa fa-phone fa-2x opacity-100 icon-color align-middle pe-2"></i> +420 123 456 789</p>
                    <p className='text-white opacity-75 py-0 py-md-3'><i className="fa fa-envelope fa-2x opacity-100 icon-color align-middle pe-2"></i>devcity@devcity.tech</p>
                    <p className='text-white opacity-75 '><i className="fa fa-map fa-2x opacity-100 icon-color align-middle pe-2"></i>Vítkova 197/11, 186 00 Praha 8-Karlín</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6"></div>
                <div className="col-12 col-lg-6">
                    <hr className='hr-gradient-light mx-5' />
                </div>
            </div>
            <div id="contactForm" className="row mt-0 mt-md-5 pt-5 d-flex align-items-center">
                <div data-aos="fade-right" data-aos-delay="300" className="col-12 col-lg-6 d-flex justify-content-center">
                    <Form />
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="col-12 col-lg-6 flex-column text-center mt-5 mt-md-0">
                    <h1 className='text-white mb-5'> Máte ještě <br /> nějaké otázky?</h1>
                    <p className='text-white opacity-75 '>Vyplňte krátký formulář pro <br /> zpětnou vazbu a my se vám do <br />jednoho dne ozveme.</p>
                    <img src={envelope} className="w-50" />
                </div>
            </div>

        </section>
    )
}