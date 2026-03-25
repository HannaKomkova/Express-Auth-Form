import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './style.module.scss'
import { useState } from 'react';
import axios from 'axios'

function showRegister(){
    const [inputUserName, setInputUserName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPhoneNumber, setInputPhoneNumber] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    async function addUser(){
        const response = await axios.post('http://localhost:3000/api/register', 
            {
                userName: inputUserName,
                email: inputEmail,
                phone: inputPhoneNumber,
                pwd: inputPassword
  })
        console.log(response.data)
}

    return(
    <>
        
            <h1>Registration</h1>
            <div className={Style.container}>
                <TextField id="outlined-basic" label="User name" variant="outlined" className={Style.input} onChange={(e)=> setInputUserName(e.target.value)}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" className={Style.input} onChange={(e)=> setInputEmail(e.target.value)}/>
                <TextField id="outlined-basic" label="Phone number" variant="outlined" className={Style.input} onChange={(e)=> setInputPhoneNumber(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className={Style.input} onChange={(e)=> setInputPassword(e.target.value)}/>

                <Button variant="contained" className={Style.button} onClick={addUser}>Send</Button>
            </div>
    
    </>
)}

export default showRegister