import { CircularProgress, TextField } from '@mui/material'
// import React from 'react'
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';

export const Form = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState<undefined | boolean>(undefined)

    const [name, setName] = useState('')
    const [nameValid, setNameValid] = useState<string>('')

    const [surname, setSurname] = useState('')
    const [surnameValid, setSurnameValid] = useState<string>('')

    const [phone, setPhone] = useState('')
    const [phoneValid, setPhoneValid] = useState<string>('')

    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState<string>('')


    const isPhoneValid = (p: string) => {
        var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
        var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
    }

    const isEmailValid = (p: string) => {
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRe.test(p);
    }

    const sendEmail = () => {
        if (name.length < 1) {
            setNameValid('Prosím zadejte své jméno')
        }
        if (surname.length < 1) {
            setSurnameValid('Prosím zadejte své příjmení')
        }
        if (!isPhoneValid(phone)) {
            setPhoneValid('Prosím zadejte telefon ve správném formátu')
        }
        if (!isEmailValid(email)) {
            setEmailValid('Prosím zadejte email ve správném formátu')
        }
        if (name.length > 1 && surname.length > 1 && isPhoneValid(phone) && isEmailValid(email)) {
            setIsLoading(true)
            setIsSent(undefined)
            const data = JSON.stringify({
                "Messages": [
                    {
                        "From": {
                            "Email": "jakub.psenicka@devcity.tech",
                            "Name": "Jakub"
                        },
                        "To": [
                            {
                                "Email": "jakub.psenda@gmail.com",
                                "Name": "JakubPsenda"
                            }
                        ],
                        "Subject": "Zpráva z webu PickIt",
                        "TextPart": "Na stránce Pickit.cz někdo vyplnil formulář s dotazem!",
                        "HTMLPart": `<h3>${name} ${surname}</h3><br />telefon: ${phone}<br/> email: ${email}`,
                    }
                ]
            })

            const config = {
                method: 'post',
                url: 'https://api.mailjet.com/v3.1/send',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic MjljOWU1NTZiMzYxMzJlMzg5M2U1NzRjY2YxMzk3NmI6ODE4ZjkwYThlOGQ3ZGZiMTQwYWY5YzNkYWFlOTY5ZDA='
                },
                data: data
            }
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    setIsLoading(false)
                    setIsSent(true)
                    reset(true)
                })
                .catch(function (error) {
                    console.log(error);
                    setTimeout(() => {
                        setIsLoading(false)
                        setIsSent(false)
                    }, 3000);
                    reset(false)

                });
        }

    }

    const reset = (wasSuccessful: boolean) => {
        setTimeout(() => {
            setIsLoading(false)
            setIsSent(undefined)
            if (wasSuccessful) {
                setName('')
                setSurname('')
                setPhone('')
                setEmail('')
            }

        }, 8000);
    }



    return (
        <section className="light-background col-10 col-md-9 custom-form text-center flex-column">
            <h2 className="mt-3">Kontaktujte nás</h2>
            <TextField error={nameValid.length > 0} helperText={nameValid} label="Jméno" variant="outlined" value={name} onChange={e => { setNameValid(''), setName(e.target.value) }} className="custom-form col-11 col-md-9 mx-3" />
            <TextField error={surnameValid.length > 0} helperText={surnameValid} label="Příjmení" variant="outlined" value={surname} onChange={e => { setSurnameValid(''), setSurname(e.target.value) }} className="custom-form col-11 col-md-9 mx-3 my-3" />
            <TextField error={phoneValid.length > 0} helperText={phoneValid} label="Telefon" variant="outlined" value={phone} onChange={e => { setPhoneValid(''), setPhone(e.target.value) }} className="custom-form col-11 col-md-9 mx-3" />
            <TextField error={emailValid.length > 0} helperText={emailValid} label="Vaše e-mailová adresa" variant="outlined" value={email} onChange={e => { setEmailValid(''), setEmail(e.target.value) }} type="email" className="custom-form col-11 col-md-9 mx-3 my-3" />
            {/* Přidat ještě pole pro samotnou zprávu ???? */}
            {/* <TextField error={emailValid.length > 0} helperText={emailValid} label="Vaše e-mailová adresa" variant="outlined" value={email} onChange={e => { setEmailValid(''), setEmail(e.target.value) }} type="email" className="custom-form col-11 col-md-9 mx-3 my-3" /> */}
            <LoadingButton
                size="small"
                onClick={() => sendEmail()}
                loading={isLoading}
                color={isLoading ? "primary" : isSent === undefined ? "primary" : isSent === true ? "success" : "error"}
                loadingIndicator={<CircularProgress color="primary" size={26} thickness={5} />}
                variant="contained"
                className='order-button custom-button  text-white py-3 px-5 w-75 w-md-50 mb-3'
            >
                {isLoading ? <div style={{ color: 'rgba(0, 0, 0, 0.12)' }}>&zwnj;  </div> :
                    isSent === undefined ? "Odeslat" : isSent === true ? "Odesláno" : "Nepodařilo se odeslat"}
            </LoadingButton>
        </section>
    )
}