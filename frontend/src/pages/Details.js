import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

export default function Details () {

const BackgroundStyle={ backgroundColor:"#294C60"}

const Spacing={margin: '30px'}
const Spacing2={margin: '10px'}

const theme = createTheme({
    spacing: 4,
  });

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          
        <Box sx={{ minWidth: 30 }}>
          <Toolbar>
          <Typography variant="body2" color="white">{`${Math.round(
            props.value2,
          )}`}</Typography>
          <StarIcon sx={{color:"#FFC49B"}}/>
          </Toolbar>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="white">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  const ImageStyle={
    width: '750px',
    height: '350px'
  }

  const GridStyle={ 
    backgroundColor: "rgba(173, 182, 196,0.8)"

  }
  
  const TextStyle={
    color:"white"
  }

  const BorderStyle={
    borderBottom: "2px solid #FFC49B"
  }
  
  const IconStyle2={
    color: "#FFC49B"
  }

  const ImageVStyle={
    width:"120px",
    height:"250px",
    borderRadius:"45%"


  }

    return (
        <Grid container style={BackgroundStyle}>       
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: .04 }} />
            <h1 style={TextStyle}>Voy a crear el diseño de tu pagina web.</h1>
            <Grid container spacing={2} columnSpacing={2}>
            <Box sx={{ flexGrow: .02 }} />
            <Toolbar>
            <Box
            sx={{ display: 'flex', alignItems: 'center',  width: 'fit-content', color: 'text.secondary', '& svg': {  m: 1.5, }, '& hr': {  mx: 0.5, },
            }}>
                <List>
                        <ListItem button key="RemySharp">
                            <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
                            </ListItemIcon>
                            <ListItemText style={TextStyle} primary="Juan Portillo"></ListItemText>
                        </ListItem>            
                        <Divider orientation="vertical" flexItem />
                </List>
            <Divider orientation="vertical" flexItem />
            <StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon/>
            <p style={TextStyle}>4.0</p>
        </Box>
            </Toolbar>
            </Grid>
            <Grid container spacing={2} columnSpacing={2} style={Spacing} >
              <Box sx={{ flexGrow: .05 }} />
              <Grid item xs={7} >
               <img style={ImageStyle} src="https://www.mejorconweb.com/images/programacion-web-barcelona.jpg"/>
               <h2 style={TextStyle}>Acerca de este servicio</h2>
               <p style={TextStyle}>Si estas buscando un desarrollador de sitios web HTML, CCS de WordPress
                profesional para  desarrollar el sitio web de su empresa, entonces esta en el 
                lugar correcto. Mi objetivo es ofrecer soluciones que causen una excelente  
                primera impresion. Ya he desarrollado mas de 50 sitios. Encontraras que si
                tengo confianza, trabajo duro, excelente para comunicarme, confiable y lista.</p>
              </Grid>
              <Box sx={{ flexGrow: .5 }} />
              <Grid item xs={4} style={GridStyle}>
              <Container maxWidth="sm" style={BorderStyle}>
                 <Toolbar>
                 <Box sx={{ flexGrow: .3 }} />
                 <h1 style={TextStyle}>Plan de Trabajo 90US$</h1>
                 </Toolbar>
              </Container>
              <Container style={Spacing2}>
                <p style={TextStyle}>Sitio web responsivo de 6-10 paginas.
                Lo mejor para cualquier cosa que deseas realizar.
                Incluye:</p>
                <p style={TextStyle}>-10 paginas web.</p>
                <p style={TextStyle}>-Diseño adaptable.</p>
                <p style={TextStyle}>-Archivo fuente.</p>
                <p style={TextStyle}>-Carga de contenido.</p>
                <table>
                            <tbody>
                            <tr>
                                <td style={IconStyle2}><AccessTimeIcon/></td>
                                <td><p style={TextStyle}>Entrega en 15 dias.</p></td>
                            </tr>
                            <tr>
                                <td style={IconStyle2}><CommentIcon/></td>
                                <td><p style={TextStyle}>Comunicación Inmediata.</p></td>
                            </tr>
                            </tbody>
                </table>
                <Divider/>
                <Grid container justifyContent="flex-start">
                <IconButton aria-label="contact" href="/Chat">
                <LocalPhoneIcon style={IconStyle2} />
                <p style={TextStyle}>Contactar</p>
                </IconButton>
                <Box sx={{ flexGrow: .5 }} />
                <Divider orientation="vertical" flexItem />
                <Box sx={{ flexGrow: .3 }} />
                <IconButton aria-label="buy" href="/payment">
                <PaidOutlinedIcon style={IconStyle2} />
                <p style={TextStyle}>Comprar</p>
                </IconButton>
                </Grid>
            </Container>
              </Grid>
            </Grid>
            <Grid container spacing={2} columnSpacing={2}>
            <Box sx={{ flexGrow: .07 }} />
                <Grid item xs={7}>
                <h2 style={TextStyle}>Vendedor</h2>
                <Grid container>
                <Grid item xs={3}>
                    <img style={ImageVStyle} src="https://st.depositphotos.com/2069323/2156/i/600/depositphotos_21568765-stock-photo-casual-businessman-pointing.jpg"/>
                </Grid>
                <Grid item xs={8.5}>
                <p style={TextStyle}>Juan Portillo.</p>
                <p style={TextStyle}>Miembro desde Octubre 2021.</p>
                <p style={TextStyle}>Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.</p>
                <IconButton aria-label="contact">
                <LocalPhoneIcon style={IconStyle2} />
                <p style={TextStyle}>Contactame</p>
                </IconButton>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} columnSpacing={2}>
            <Box sx={{ flexGrow: .07 }} />
                <Grid item xs={7}>
                <h2 style={TextStyle}>Reseñas</h2>
                <Grid container>
                    <Grid item xs={5}>
                        <LinearProgressWithLabel color="inherit" value={0} value2={5}/>
                        <LinearProgressWithLabel color="inherit" value={50} value2={4}/>
                        <LinearProgressWithLabel color="inherit" value={0} value2={3}/>
                        <LinearProgressWithLabel color="inherit" value={50} value2={2}/>
                        <LinearProgressWithLabel color="inherit" value={0} value2={1}/>
                    </Grid>
                    <Grid item xs={4}>
                        <p align="center" style={TextStyle}>Numero de reseñas: 2 </p>
                    </Grid>
                </Grid>
                <Box style={Spacing}>
                <Divider sx={{color:"#FFC49B"}}/>
                </Box>
                <Toolbar>
                <h4 style={TextStyle}>Marian Solis</h4>
                <Box sx={{ flexGrow: .07 }} />
                <p style={TextStyle}>2.00</p>
                <StarIcon  sx={{color:"#FFC49B"}}/>
                </Toolbar>
                <p style={TextStyle}>Impresionante e increible. Es muy profesional y es muy facil hablar con el. Te hace saber como si fueras competente con la tecnologia. Esta desarolladora web supero mis expectativas.</p>
                <Box style={Spacing}>
                <Divider sx={{color:"#FFC49B"}}/>
                </Box>
                <Toolbar>
                <h4 style={TextStyle}>Marian Solis</h4>
                <Box sx={{ flexGrow: .07 }} />
                <p style={TextStyle}>4.00</p>
                <StarIcon  sx={{color:"#FFC49B"}}/>
                </Toolbar>
                <p style={TextStyle}>Impresionante e increible. Es muy profesional y es muy facil hablar con el. Te hace saber como si fueras competente con la tecnologia. Esta desarolladora web supero mis expectativas.</p>
                <Box style={Spacing}>
                <Divider sx={{color:"#FFC49B"}}/>
                </Box>
                </Grid>
            </Grid>
        </ThemeProvider>      
        </Grid>
            );
}
