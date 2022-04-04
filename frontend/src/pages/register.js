import React, {Component, Fragment} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
import { makeStyles } from "@material-ui/core/styles";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{
    //opacity: 0.7
    const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}
    const paperStyle={padding :20, margin:"20px auto", backgroundColor: '#001B2E' }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0', backgroundColor: '#294C60'}
    const registerStyle = {margin: '5px'}
    const loginTextStyle = {color: 'white'} 
    const textFieldStyle = {style: {color : 'white'} }
    return(
        // Los grids sirven para centrar mi login. 
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={backgroundStyle}> 
            <Grid item xs={3}>
                <Paper elevation={10} style={paperStyle} sx={{ display: 'flex' }}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2 style={loginTextStyle}>Registro</h2>
                    </Grid>
                    <TextField InputLabelProps= {textFieldStyle} label='Nombre de usuario' placeholder='Ingresa tu nombre de usuario' fullWidth required/>
                    <TextField InputLabelProps= {textFieldStyle} label='Contraseña' placeholder='Ingresa tu contraseña' type='password' fullWidth required/>
                    
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Iniciar sesión</Button>

                    <Typography style={loginTextStyle}> ¿Ya tienes una cuenta? 
                        <Link href="#" style={registerStyle}>
                            Regístrate
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
            </Grid>
    )
}

export default Login