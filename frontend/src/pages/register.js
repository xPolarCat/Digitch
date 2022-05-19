import React,  {Component, Fragment, useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, Switch, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
import { makeStyles } from "@material-ui/core/styles";
import logo from '../resources/logo.png';
import Image from 'mui-image';
import {User_Register} from '../services/User';
import { useNavigate } from 'react-router';

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Register=()=>{
    let navigate = useNavigate();
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


    const [user, setUser] = useState({  // Inicializo estas variables de estado con valores vacíos 
        name: "",
        email: "",
        desc: "",
        password: "",
        photo: "https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg",

    });
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        console.log("selected file: ", event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
          //setImage(URL.createObjectURL(event.target.files[0]));
          setImage(event.target.files[0]);
          setUser({
              photo: event.target.files[0]
          })
        }
      }
    
    const handleOnSubmitRegister = async (event) => { // Este event es un parámetro que se puede recibir en todas las funciones que sean desencadenadas por un evento de React.
        event.preventDefault() // Lo que hace es evitar el refresh que hace el form.
        user.photo = image;
        console.log(user);
        const us = await User_Register(user);
        console.log("my object:", us);
        // if(us != null){
        //     navigate('/');
        //   }else{
        //   }
    }

    const handleOnChangeInput = (event) => { // Esto se agrega porque al utilizar un valor como user.name, este no puede cambiar. Hay que utilizar el onChange para poder cambiar el valor de mi variable name
        const {name, value} = event.target; // Utilizo Destructuring, obtengo el name del input y el valor 
        setUser({
            ...user, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
            [name]: value
        }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo D: 
    }   

    // const onChangeEmail = (event) => { // Podría hacer esto uno por uno, pero es mejor utilizar la opción anterior 
    //     setUser({
    //         ...user,
    //         email: event.target.value
    //     })
    // }

    return(
        // Los grids sirven para centrar mi login. 
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
        <Grid style={gridPaperStyle}  item xs={12}>
            <Paper elevation={10} style={paperStyle} sx={{ display: 'flex'}}>
                <Grid align='center'>
                <Image  style={{height: '50%', width: '50%'}} src={logo} />
                    <h2 style={loginTextStyle}>Registro</h2>
                </Grid>
                <form onSubmit={handleOnSubmitRegister}>
                <Grid container direction={"column"} spacing={5}>
                
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} htmlFor="name" name="name" value={user.name} onChange={handleOnChangeInput} InputLabelProps= {textFieldStyle} label='Nombre de usuario' placeholder='Ingresa tu nombre de usuario' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} htmlFor="email" name="email" value={user.email} onChange={handleOnChangeInput} InputLabelProps= {textFieldStyle} label='Correo electrónico' placeholder='Ingresa tu correo electrónico' type='email' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} htmlFor="desc" name="desc" value={user.desc} onChange={handleOnChangeInput} InputLabelProps= {textFieldStyle} label='Descripción' placeholder='Habla un poco de ti...'  fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} htmlFor="password" name="password" value={user.password} onChange={handleOnChangeInput} minLength={8} maxLength={30} InputLabelProps= {textFieldStyle} label='Contraseña' placeholder='Ingresa tu contraseña' type='password' fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField  inputProps={{ style: { color: 'white'}}} InputLabelProps= {textFieldStyle} label='Confirmar contraseña' minLength={8} maxLength={30} placeholder='Confirma tu contraseña' type='password' fullWidth required/>
                    </Grid>
                   
                    {/*<Grid item style= {{color : 'white'}}>
                    <Switch
                    //checked={state.checkedB}
                    //onChange={handleChange('checkedB')}
                    style={switchStyle}
                    value="checkedB"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> Registrarse como vendedor
                    </Grid>*/}
                    <Grid container fullWidth>
                    <FormControl style={{display: "flex", margin: "auto" }}>
                        <Button
                        variant="contained"
                        component="label"
                        sx={{ backgroundColor: "#294C60" }}
                        >
                        Cambiar imagen
                        <input
                            type="file"
                            hidden
                            onChange={onImageChange}
                            accept="image/*"
                        />
                        </Button>
                    </FormControl>
                    </Grid>
                    <Grid item fullWidth sx={{my:1}} >
                        <img style={{display: "flex", margin: "auto" }} width="250px" src={user.photo}/>
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
                                            required
                                            //checked={agreement || false}
                                        />
                                        
                                    }
                                    style= {{color : 'white'}}
                                    label=  "He leído y acepto los términos y condiciones."
                                    required
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