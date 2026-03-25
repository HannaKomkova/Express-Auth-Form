import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './authstyle.module.scss';
import { useState } from 'react';
import axios from 'axios'

function showAuth(){

    const [inputUserEmail, setInputUserEmail] = useState('')
    const [inputUserPassword, setInputUserPassword] = useState('')

    async function logInUser(){
        const response = await axios.post('http://localhost:3000/api/authorize', 
            {
                email: inputUserEmail,
                pwd: inputUserPassword
  })
        console.log(response.data)
    }

    return(
    <>
        
            <h1>Authorization</h1>
             <div className={Style.container}>
                <TextField id="outlined-basic" label="Email" variant="outlined" className={Style.input} onChange={(e)=> setInputUserEmail(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className={Style.input} onChange={(e)=> setInputUserPassword(e.target.value)}/>

                <Button variant="contained" className={Style.button} onClick={logInUser}>Log in</Button>
            </div>
       
    </>
    )
}

export default showAuth