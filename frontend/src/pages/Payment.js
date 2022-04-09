import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackImage from "../images/backImagePay.jpg";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Payment () {

    const BackgroundStyle={ backgroundImage: `url(${BackImage})`,
    height: "100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}

    const GridPayStyle={ 
      backgroundColor: "rgba(173, 182, 196,0.8)",
      maxHeight: "30vh",
      minWidth: "30vh",
      borderRadius: "10px",
      marginBottom: '70px'

    }

    const GridStyle={ 
      backgroundColor: "rgba(173, 182, 196,0.8)",
      maxHeight: "60vh",
      minHeight: "80vh",
      minWidth: "30vh",
      borderRadius: "10px"
    }

    const BorderStyle={
      borderBottom: "2px solid #FFC49B"
    }

    const IconStyle={
      width: "100px",
      color: "#FFC49B"
    }

    const IconStyle2={
        color: "#FFC49B"
      }

    const TextStyle={
      color:"white",
      textAlign: 'center'
    }

    const PaypalStyle={
      color:"white",
      backgroundColor:"#294C60",
      marginTop: '-20px'
    }

    const theme = createTheme({
      spacing: 4,
    });

    const Spacing={margin: '50px'}

    const ImagesStyle={
        width:"150px",
        height:"80px",
        borderRadius:"10px"
    }

    const PaddingStyle={
        padding :10
    }

    const buyButtonStyle={
        align: "right",
        marginTop: "1vh",
        backgroundColor:"#294C60"
    }

    return (

    <Grid container style={BackgroundStyle}>
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} columnSpacing={2} style={Spacing} direction="row" justifyContent="center">
                <Box sx={{ flexGrow: .4 }} />
                    <Grid item xs={11} lg={6} style={GridPayStyle} direction="row" justifyContent="center" >
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
                    <Grid item xs={10} lg={4} style={GridStyle} container spacing={2} columnSpacing={2} >
                    <Container maxWidth="sm" style={BorderStyle}>
                    <Toolbar>
                    <Box spacing={1} style={PaddingStyle}>
                    <img src="https://www.latevaweb.com/diseno-web/programacion-web-para-cuando-el-html5.jpg" style={ImagesStyle}/>
                    </Box>
                    <h4 style={TextStyle}>Voy a crear el diseño de tu pagina web.</h4>
                    </Toolbar>
                    </Container>
                    <Container maxWidth="sm" style={BorderStyle}>
                        <table>
                            <tbody>
                            <tr>
                                <td style={IconStyle2}><CheckCircleOutlineTwoToneIcon/></td>
                                <td><p style={TextStyle}>10 Paginas web.</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><CheckCircleOutlineTwoToneIcon/></td>
                                <td><p style={TextStyle}>Diseño adaptable.</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><CheckCircleOutlineTwoToneIcon/></td>
                                <td><p style={TextStyle}>Archivo fuente.</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><CheckCircleOutlineTwoToneIcon/></td>
                                <td><p style={TextStyle}>Carga de contenido.</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><WorkIcon/></td>
                                <td><p style={TextStyle}>Plan de trabajo.</p></td>
                                <td width="100px"></td>
                                <td><p style={TextStyle}>90US$</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><AttachMoneyIcon/></td>
                                <td><p style={TextStyle}>Cargos por servicio.</p></td>
                                <td width="100px"></td>
                                <td><p style={TextStyle}>4,4US$</p></td>
                            </tr>
                            </tbody>
                        </table>   
                    </Container>  
                    <Container maxWidth="sm">
                    <table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td><p style={TextStyle}>Total del pedido.</p></td>
                                <td width="100px"></td>
                                <td><p style={TextStyle}>94,4US$</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><p style={TextStyle}>Tiempo total de entrega:</p></td>
                                <td width="100px"></td>
                                <td><p style={TextStyle}>15 dias</p></td>
                            </tr>
                            </tbody>
                    </table>  
                    <Button variant="contained" sx={{float:'right'}}  style={buyButtonStyle}>Realizar compra</Button> 
                    </Container>  
                    </Grid>
            </Grid>
        </ThemeProvider>
    </Grid>  

            );
}
