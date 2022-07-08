import { TextField } from '@mui/material'
// import React from 'react'
import React, { useState } from 'react';
import Input from '@material-ui/core/Input';


export const Form = () => {
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
    }



    return (
        <section className="light-background col-10 col-md-9 custom-form text-center flex-column">
            <h2 className="mt-3">Kontaktujte nás</h2>
            <TextField error={nameValid.length > 0} helperText={nameValid} id="outlined-basic" label="Jméno" variant="outlined" value={name} onChange={e => { setNameValid(''), setName(e.target.value) }} className="custom-form col-11 col-md-9 mx-3" />
            <TextField error={surnameValid.length > 0} helperText={surnameValid} id="outlined-basic" label="Příjmení" variant="outlined" value={surname} onChange={e => { setSurnameValid(''), setSurname(e.target.value) }} className="custom-form col-11 col-md-9 mx-3 my-3" />
            <TextField error={phoneValid.length > 0} helperText={phoneValid} id="outlined-basic" label="Telefon" variant="outlined" value={phone} onChange={e => { setPhoneValid(''), setPhone(e.target.value) }} className="custom-form col-11 col-md-9 mx-3" />
            <TextField error={emailValid.length > 0} helperText={emailValid} id="outlined-basic" label="Vaše e-mailová adresa" variant="outlined" value={email} onChange={e => { setEmailValid(''), setEmail(e.target.value) }} type="email" className="custom-form col-11 col-md-9 mx-3 my-3" />
            <button onClick={() => sendEmail()} className='order-button custom-button  text-white py-3 px-5 w-50 mb-3'>
                Odeslat
            </button>
        </section>
    )
}