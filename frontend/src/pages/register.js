import React, {Component, Fragment} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
import { makeStyles } from "@material-ui/core/styles";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Register=()=>{
    //opacity: 0.7
    const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}
    const paperStyle={padding :20, margin:"20px auto", backgroundColor: '#001B2E', minWidth:'50vh'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0', backgroundColor: '#294C60'}
    const registerStyle = {margin: '5px'}
    const gridPaperStyle = {margin: '10px'}
    const loginTextStyle = {color: 'white', textAlign: 'center'} 
    const textFieldStyle = {style: {color : 'white'}}
    return(
        // Los grids sirven para centrar mi login. 
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
        <Grid style={gridPaperStyle}  item xs={12}>
            <Paper elevation={10} style={paperStyle} sx={{ display: 'flex'}}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={loginTextStyle}>Registro</h2>
                </Grid>

                <Grid container direction={"column"} spacing={5}>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Nombre de usuario' placeholder='Ingresa tu nombre de usuario' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Correo electrónico' placeholder='Ingresa tu correo electrónico' type='email' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Contraseña' placeholder='Ingresa tu contraseña' type='password' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Confirmar contraseña' placeholder='Confirma tu contraseña' type='password' fullWidth required/>
                    </Grid>
                </Grid>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Registrarse</Button>

                <Typography style={loginTextStyle} > ¿Ya tienes una cuenta? 
                    <Link href="/login" style={registerStyle}>
                        Inicia sesión
                </Link>
                </Typography>
            </Paper> 
        </Grid>
        </Grid>
    )
    
}

export default Register