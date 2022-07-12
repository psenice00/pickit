import React, { useState } from 'react'
import logo from '../assets/images/logo.webp'
import { ModalCookie } from './utils/cookie';

export const Footer = () => {
    const [modalShow, setModalShow] = useState<boolean>(false);

    return (
        <footer className='light-background d-flex align-items-center'>
            <div className='container d-flex justify-content-end  align-items-center px-0 my-5  mx-3 mx-md-auto'>
                <div className='px-0'><img src={logo} alt="logo pickit.cz" className="footer-img" /></div>
                <div className="ms-auto d-flex flex-column flex-md-row justify-content-end  align-items-center text-muted">
                    <p className='mb-0 me-2'>Všechna práva vyhrazena</p> <span className='d-none d-md-block'>|</span>
                    <div className='mx-2 dark-color my-3 my-md-0 cursor-pointer'>Ochrana osobních údajů</div>  <span className='d-none d-md-block'>|</span>
                    <div className='ms-2 dark-color cursor-pointer' onClick={() => setModalShow(true)}>Cookies</div>
                    <ModalCookie show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>

        </footer>
    )
}