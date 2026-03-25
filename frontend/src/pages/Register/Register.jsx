import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './style.module.scss'

function showRegister(){
    return(
    <>
        
            <h1>Registration</h1>
            <div className={Style.container}>
                <TextField id="outlined-basic" label="User name" variant="outlined" className={Style.input}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" className={Style.input}/>
                <TextField id="outlined-basic" label="Phone number" variant="outlined" className={Style.input}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className={Style.input}/>

                <Button variant="contained" className={Style.button}>Send</Button>
            </div>
    
    </>
)}

export default showRegister