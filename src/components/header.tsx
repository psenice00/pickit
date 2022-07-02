import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import { BlurElipse1 } from './utils/blurElipse';
import { scroolToElement } from './utils/scrollTo';


export const Header = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Navbar data-aos="fade-down" expand="lg" className='mt-4 container p-0 position-relative'>
            <BlurElipse1 />
            <Navbar.Brand onClick={() => scrollToTop()}><img className='m-0 ms-3 ms-md-0' src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3 border-0' >
                <span className="" role="button" ><i className="fa fa-bars fa-2x text-white" aria-hidden="true"></i></span></Navbar.Toggle >
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end justify-content-lg-center">
                <Nav className="navbar-nav text-center d-flex align-items-center">
                    <Nav.Link onClick={() => scroolToElement("firstSection")} className="nav-item px-0 px-lg-3 px-xl-4 mt-4 mt-lg-0 my-2 my-lg-0" >Co nabízíme</Nav.Link>
                    <Nav.Link onClick={() => scroolToElement("secondSection")} className="nav-item px-0 px-lg-3 px-xl-4 my-2 my-lg-0">Benefity</Nav.Link>
                    <Nav.Link onClick={() => scroolToElement("thirdSection")} className="nav-item px-0 px-lg-3 px-xl-4 my-2 my-lg-0">Jak to funguje</Nav.Link>
                    <Nav.Link onClick={() => scroolToElement("fifthSection")} className="nav-item px-0 px-lg-3 px-xl-4 my-2 my-lg-0">O nás</Nav.Link>
                    <Nav.Link onClick={() => scroolToElement("contactForm")} className="nav-item px-0 px-lg-3 px-xl-4 my-2 my-lg-0">Kontakt</Nav.Link>
                    <div onClick={() => scroolToElement("contactForm")} className="nav-item mx-auto"><button className="border rounded-pill ms-lg-5  nav-link-last p-0 px-3 py-1 bg-transparent">Objednat</button></div>

                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className=' d-none d-lg-block'><img className=' me-3 me-lg-4 me-xl-0 opacity-0' src={logo} /></Navbar.Brand>
        </Navbar>
    )
}