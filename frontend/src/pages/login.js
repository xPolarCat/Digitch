import React, {Component, Fragment, useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
import { User_Login } from '../services/User';
import { useNavigate } from 'react-router'

//import { makeStyles } from "@material-ui/core/styles";
// import logo from '../resources/logo.png';
// import Image from 'mui-image';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{
    //opacity: 0.7
    const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}
    const paperStyle={opacity: '95%' , padding :20, margin:"20px auto", backgroundColor: '#001B2E', minHeight: "35vh", minWidth: "55vh", align: 'center', justify: "center" }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0', backgroundColor: '#294C60'}
    const registerStyle = {margin: '5px'}
    const loginTextStyle = {color: 'white', textAlign: 'center'} 
    const gridPaperStyle = {margin: '10px'}
    const textFieldStyle = {style: {color : 'white'} }
    let navigate = useNavigate();

    const [oUser, setoUser] = useState({
        email: "",
        password: ""
    });

    const handleEmail= (event)=>{
        const { name, value } = event.target;
        setoUser({
            ...oUser,
            email: value
        })
    };
    const handlePassword = (event)=>{
        const { name, value } = event.target;
        setoUser({
            ...oUser,
            password: value
        })
    };

    const onSubmitLogin = async (event) =>{
        event.preventDefault();
        console.log(oUser);
        const user = User_Login(oUser);
        if(user != null){
            navigate('/');
        }
    };
    return(
        // Los grids sirven para centrar mi login. 
        <form onSubmit={onSubmitLogin}>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
            <Grid style={gridPaperStyle}  item xs={12}>
                <Paper elevation={10} style={paperStyle} sx={{ display: 'flex'}}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2 style={loginTextStyle}>Iniciar sesión</h2>
                    </Grid>
                   
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} id= "email" name= "email" value={oUser.email} onChange={handleEmail} label='Correo electrónico' placeholder='Ingresa tu correo' type="email" fullWidth required/>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} id= "password" value={oUser.password} onChange={handlePassword} label='Contraseña' placeholder='Ingresa tu contraseña' type='password' fullWidth required/>
                    
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Iniciar sesión</Button>
                    
                    <Typography style={loginTextStyle}> ¿Ya tienes una cuenta? 
                        <Link href="/register" style={registerStyle}>
                            Regístrate
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
            </Grid>
        </form>
    )
}

export default Login