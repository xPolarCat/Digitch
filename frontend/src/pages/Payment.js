import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackImage from "../images/backImagePay.jpg";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function () {

    const BackgroundStyle={ backgroundImage: `url(${BackImage})`,
    height: "100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}

    const PositionStyle={
      position: "absolute",
    }

    const GridPayStyle={ 
      backgroundColor: "rgba(173, 182, 196,0.8)",
      maxHeight: "300px",
      borderRadius: "10px"

    }

    const GridStyle={ 
      backgroundColor: "rgba(173, 182, 196,0.8)",
      borderRadius: "10px"

    }

    const BorderStyle={
      borderBottom: "2px solid #FFC49B"
    }

    const IconStyle={
      width: "100px",
      color: "#FFC49B"
    }

    const TextStyle={
      color:"white"
    }

    const PaypalStyle={
      color:"white",
      backgroundColor:"#294C60"
    }

    const theme = createTheme({
      spacing: 4,
    });

    return (

      <Grid container style={BackgroundStyle}>
        <Grid container spacing={2}>
        <h1>.</h1>
        </Grid>
        <ThemeProvider theme={theme}>
        <Grid container spacing={2} columnSpacing={2}>
          
            <Box sx={{ flexGrow: .4 }} />
            <Grid item xs={6} style={GridPayStyle}>
              <Container maxWidth="sm" style={BorderStyle}>
              <Toolbar>
              <CreditScoreIcon style={IconStyle}/>
              <Box sx={{ flexGrow: .3 }} />
               <h1 style={TextStyle}>Opción de Pago</h1>
              </Toolbar>
              </Container>
              <Box textAlign="center">
              <p style={TextStyle}>¡Hola! Gracias por elegirnos, a continuacion realizaras el pago mediante PayPal.</p>
              <p style={TextStyle}> Da click al boton, ingresa a tu cuenta y paga el monto acordado en la informacion del servicio.</p>
              </Box>
              <Box sx={{ flexGrow: .3, p:2 }} />
              <Box textAlign="center">
              <Button variant="contained" style={PaypalStyle}>PAYPAL</Button>
              </Box>
            </Grid>
            <Box sx={{ flexGrow: .15 }} />
            <Grid item xs={3} style={GridStyle}>
            <h1>s</h1> <h1>s</h1><h1>s</h1><h1>s</h1><h1>s</h1>
            </Grid>
        </Grid>
        </ThemeProvider>
      </Grid>  

  );
}
