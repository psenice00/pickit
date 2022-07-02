import { TextField } from '@mui/material'
// import React from 'react'
import React, { useState } from 'react';


export const Form = () => {
    const [phone, setPhone] = useState('')

    const handleOnChange = (e: any) => {
        // var re = /^\d{10}$/;
        // if (e.target.value === '' || e.target.value.match(re)) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (e.target.value.match(phoneno)) {
            setPhone(e.target.value)
        }
        // var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        // if (e.target.value.match(phoneno)) {
        //     console.log(e.target.value)
        // setPhone(e.target.value);
        // }

        // const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        // if (onlyNums.length < 10) {
        //     setPhone(onlyNums)
        // } else if (onlyNums.length === 10) {
        //     const number = onlyNums.replace(
        //         /(\d{3})(\d{3})(\d{4})/,
        //         '($1) $2-$3'
        //     );
        //     setPhone(number)
        // }
    }



    return (
        <section className="light-background col-10 col-md-9 custom-form text-center flex-column">
            <h2 className="mt-3">Kontaktujte nás</h2>
            <TextField id="outlined-basic" label="Jméno" variant="outlined" className="custom-form col-11 col-md-9 mx-3" />
            <TextField id="outlined-basic" label="Příjmení" variant="outlined" className="custom-form col-11 col-md-9 mx-3 my-3" />
            <TextField id="outlined-basic" label="Telefon" variant="outlined" value={phone} onChange={handleOnChange} className="custom-form col-11 col-md-9 mx-3" />
            <TextField id="outlined-basic" label="Vaše e-mailová adresa" variant="outlined" type="email" className="custom-form col-11 col-md-9 mx-3 my-3" />
            <button className='order-button custom-button  text-white py-3 px-5 w-50 mb-3'>
                Odeslat
            </button>
            {/* <MuiTelInput value={value} onChange={handleChange} /> */}
            {/* <MuiPhoneNumber defaultCountry={'us'} value={value} onChange={handleOnChange} />, */}
        </section>
    )
}