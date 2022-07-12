import React from 'react';

export const SectionItem = (props: { number: string, imgSrc: string, headline: string, text: string, delay: number, imgAlt: string }) => {

    return (
        <div data-aos="fade-up" data-aos-delay={props.delay} className="col-12 col-lg-4 my-5 my-md-5 my-lg-0 px-0">
            <div className=" m-0 mx-lg-4 mx-xl-5 card text-center border-0 ">
                <div className="card-number text-white display-3 bold-text ">
                    {props.number}
                </div>
                <div className="card-img">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>

                <h3 className="text-white mt-auto display-6 bold-text">
                    {props.headline}
                </h3>
                <p className="text-white opacity-75 mb-5 mt-3 mx-4">
                    {props.text}
                </p>
            </div>
        </div>
    )
}