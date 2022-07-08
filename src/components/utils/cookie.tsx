import React from "react"
import { Button, Modal } from "react-bootstrap"
import CookieConsent from "react-cookie-consent"


export const Cookie = () => {

    return (
        <CookieConsent
            location="bottom"
            buttonText="Rozumím"
            cookieName="cookieConsent"
            style={{ background: "#0D2638" }}
            buttonStyle={{ color: "#ffffff", fontSize: "13px", background: "#1E87DF", borderRadius: '20px', margin: 'auto 15px' }}
            expires={150}
        >
            Tyto webové stránky používají k poskytování služeb a analýze návštěvnosti soubory cookie. Informace o tom, jak tyto webové stránky používáte, jsou sdíleny se společností Google. Používáním těchto webových stránek souhlasíte s použitím souborů cookie.
            {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}


        </CookieConsent>
    )
}

export const ModalCookie = (props: { show: boolean, onHide: any }
) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cookie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Tyto webové stránky používají k poskytování služeb a analýze návštěvnosti soubory cookie. Informace o tom, jak tyto webové stránky používáte, jsou sdíleny se společností Google. Používáním těchto webových stránek souhlasíte s použitím souborů cookie.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="order-button custom-button  text-white  rounded-pill" onClick={() => props.onHide()}>Rozumím</Button>
            </Modal.Footer>
        </Modal>
    )
}