import React, {Component, Fragment} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import PersonIcon from '@material-ui/icons/Person';
import BackgroundImage from '../resources/login-background.jpg';
//import { makeStyles } from "@material-ui/core/styles";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const Home=()=>{
    //opacity: 0.7
    const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundSize: 'cover'}
    const homeStyle = {minHeight:'100vh', backgroundColor: '#202020'}
    return(
        <Fragment>
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
                
            </Grid>

            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={homeStyle}> 
                
            </Grid>
        </Fragment>


    )
}

export default Home