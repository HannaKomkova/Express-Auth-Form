import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './authstyle.module.scss'

function showAuth(){
    return(
    <>
        
            <h1>Authorization</h1>
             <div className={Style.container}>
                <TextField id="outlined-basic" label="Email" variant="outlined" className={Style.input}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className={Style.input}/>

                <Button variant="contained" className={Style.button}>Send</Button>
            </div>
       
    </>
    )
}

export default showAuth