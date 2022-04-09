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
const EditProfile=()=>{
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

    return(
        // Los grids sirven para centrar mi login. 
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
        <Grid style={gridPaperStyle}  item xs={12}>
            <Paper elevation={10} style={paperStyle} sx={{ display: 'flex'}}>
                <Grid align='center'>
                <Image  style={{height: '50%', width: '50%'}} src={logo} />
                    <h2 style={loginTextStyle}>Editar Perfil</h2>
                </Grid>

                <Grid container direction={"column"} spacing={5}>
                    <br></br>
                    <Grid container align='center' direction={"column"} spacing={2}>
                    <Grid item>
                    <img width="150px" src="https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg"/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" component="label" sx={{backgroundColor:"#294C60"}}>
                        Cambiar imagen
                        <input type="file" hidden/>
                        </Button>
                    </Grid> 
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Nueva contraseña' placeholder='Confirma tu contraseña' type='password' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Confirmar contraseña' placeholder='Confirma tu contraseña' type='password' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField multiline rows={3} inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Descripción' placeholder='Descríbete' type='password' fullWidth required/>
                    </Grid>
                    
                </Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Editar</Button>

            </Paper> 
        </Grid>
        </Grid>
    )
    
}

export default EditProfile