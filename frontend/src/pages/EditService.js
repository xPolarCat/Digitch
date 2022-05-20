import React, { Fragment } from 'react'
import { TextField, FormControl, Paper,  Box, Grid} from '@mui/material'
import { makeStyles } from '@mui/styles';
import EditServiceForm from '../components/EditService/EditServiceForm';
import { padding } from '@mui/system';
import BackgroundImage from '../resources/login-background.jpg';

const useStyles = makeStyles({
    boxCSS: {
        width: "70%",
        backgroundColor: "rgba(0,27,46,0.9)",
        padding:"20px",
        minWidth: '40vh'
    }
  });
  const backgroundStyle =  {minHeight:'100vh', backgroundColor: '#282c34', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover'}
  const gridPaperStyle = {margin: '10px'}

export default function CreateService() {
    const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }
    const classes = useStyles();
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={backgroundStyle}> 
    <Grid style={gridPaperStyle}  item xs={12}>
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Box className={classes.boxCSS} sx={{ boxShadow: 3, borderRadius: 1}}>
            <EditServiceForm/>
        </Box>
    </Grid>
  </Grid>
  </Grid>
  )
}
