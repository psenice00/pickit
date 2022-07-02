import React from 'react';

export const SectionItem = (props: { imgSrc: string, headline: string, text: string, extraMargin: boolean, isMultiline: boolean }) => {

    return (
        <div data-aos="fade-up" className="col-12 col-lg-6 px-2 px-md-5 py-3 py-md-0">
            <div className='d-inline-block d-md-none d-flex  justify-content-center'>
                <div className='d-flex flex-row justify-content-center align-items-center flex-nowrap'>
                    <div className="col-2 m-0 ms-5">
                        <img className='advantages-icon' src={props.imgSrc} />
                    </div>
                    <div className={!props.isMultiline ? "col-10 m-0 text-start" : "col-7 m-0 text-start"}>
                        <h3 className={props.extraMargin ? '  m-0 ms-3 bold-text  text-white' : ' m-0 bold-text  text-white'}>
                            {props.headline}
                        </h3>
                    </div>
                </div>
            </div>
            <img className='d-none d-md-block' src={props.imgSrc} />
            <h3 className='bold-text  text-white mt-3 d-none d-md-block'>
                {props.headline}
            </h3>
            <p className='text-white opacity-75 mt-3 text-center'>
                {props.text}
            </p>
        </div>
    )
}