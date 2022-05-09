import React, {Component, Fragment} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Switch, FormControlLabel, Checkbox} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
import { makeStyles } from "@material-ui/core/styles";
import logo from '../resources/logo.png';
import Image from 'mui-image';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Register=()=>{
    //opacity: 0.7
    const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}
    const paperStyle={padding :20, margin:"20px auto", backgroundColor: 'rgb(0, 27, 46, .95)', minWidth:'50vh'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0', backgroundColor: '#294C60'}
    const registerStyle = {margin: '5px'}
    const gridPaperStyle = {margin: '10px'}
    const loginTextStyle = {color: 'white', textAlign: 'center'} 
    const textFieldStyle = {style: {color : 'white'}}
    const switchStyle = {align: 'right'}

    const onSubmitRegister = (event) => { // Este event es un parámetro que se puede recibir en todas las funciones que sean desencadenadas por un evento de React.
        event.preventDefault() // Lo que hace es evitar el refresh que hace el form.

        console.log("Oal :wave:")
    }

    return(
        // Los grids sirven para centrar mi login. 
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
        <Grid style={gridPaperStyle}  item xs={12}>
            <Paper elevation={10} style={paperStyle} sx={{ display: 'flex'}}>
                <Grid align='center'>
                <Image  style={{height: '50%', width: '50%'}} src={logo} />
                    <h2 style={loginTextStyle}>Registro</h2>
                </Grid>
                <form onSubmit={onSubmitRegister}>
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
                   
                    <Grid item style= {{color : 'white'}}>
                    <Switch
                    //checked={state.checkedB}
                    //onChange={handleChange('checkedB')}
                    style={switchStyle}
                    value="checkedB"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> Registrarse como vendedor
                    </Grid>
                    <Grid item>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{backgroundColor:"#294C60"}}>
                    Añadir imagen
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                </Grid> 
                <Grid item>
                <img width="150px" src="https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg"/>
                </Grid>
                    <Grid item>
                    <FormControlLabel
                                    sx={{ mb: '16px' }}
                                    name="agreement"
                                    // onChange={(e) =>
                                    //     handleChange({
                                    //         target: {
                                    //             name: 'agreement',
                                    //             value: e.target.checked,
                                    //         },
                                    //     })
                                    // }
                                    control={
                                        <Checkbox
                                            size="small"
                                            style= {{color : 'white'}}
                                            //checked={agreement || false}
                                        />
                                    }
                                    style= {{color : 'white'}}
                                    label=  "He leído y acepto los términos y condiciones."
                    />
                    </Grid>
                
                </Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Registrarse</Button>
                </form>
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