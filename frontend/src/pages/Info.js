import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Divider from '@material-ui/core/Divider';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CardMedia from '@material-ui/core/CardMedia';


const Spacing={margin: '30px'}
const IconStyle2={
    color: "#FFC49B"
  }

const tiers = [
  {
    title: 'Plan de trabajo',
    price: '90',
    description: [
      'Sitio web responsivo de 6-10 paginas. Lo mejor para cualquier cosa que deseas realizar. Incluye:',
      '-10 paginas web',
      '-Diseño adaptable',
      '-Archivo fuente',
    ],
    buttonText: 'Comprar',
    buttonVariant: 'contained',
  }
];

const cardGrid= {
    paddingTop:"8px",
    paddingBottom: "8px"
  }

const TextStyle={
    color:"black"
  }

  
const ImageVStyle={
  width:"120px",
  height:"170px",
  borderRadius:"45%"


}

const card1= {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }

  
const cardContent= {
    flexGrow: 1,
  }

const cardMedia= {
    paddingTop: '56.25%', // 16:9
  }

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


  const GridStyle={ 
    backgroundColor: "rgba(173, 182, 196,0.8)",
    maxHeight: "300px",
    borderRadius: "10px"

  }

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={7}>  
        <Container disableGutters maxWidth="lg" component="main" sx={{ margin:"20px" }}>
            <Typography
            component="h4"
            variant="h4"
            align="center"
            color="white"
            gutterBottom
            >Acerca de este servicio
            </Typography>
            <Typography variant="p" 
            color="white" component="p">
            Si estas buscando un desarrollador de sitios web HTML, CCS de WordPress
            profesional para  desarrollar el sitio web de su empresa, entonces esta en el 
            lugar correcto. Mi objetivo es ofrecer soluciones que causen una excelente  
            primera impresion. Ya he desarrollado mas de 50 sitios. Encontraras que si
            tengo confianza, trabajo duro, excelente para comunicarme, confiable y lista.
            </Typography>
            <Typography variant="p" 
            color="white"component="p">
            Estás en el lugar ideal. Con mi licenciatura en publicidad y publicidad, estoy bien calificado para ayudarlo a asegurar un sitio web bien planificado. Actualmente soy diseñador de UI/UX que trabaja con el diseño de sitios web.


Me especializo en crear diseños para sitios web que comuniquen sus servicios de manera efectiva. Si necesita un nuevo diseño de maquetación que comunique de manera más efectiva lo que ofrece a sus clientes, puedo hacerlo por usted. Si tiene alguna pregunta, póngase en contacto conmigo en cualquier momento.
            </Typography>
        </Container>
        </Grid>
        <Grid item xs={5} >
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={12}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                     "#ADB6C4",
                  }}
                />
                <CardContent sx={{
                    backgroundColor: (theme) =>
                     "#001B2E",
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary" sx={{color: 'white'}}>
                      ${tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        sx={{color: 'white'}}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions 
                  sx={{
                    backgroundColor: (theme) =>
                     "#ADB6C4",
                  }}>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={7}>
        <Typography
            component="h4"
            variant="h4"
            align="center"
            color="white"
            gutterBottom
            >Reseñas
            </Typography>
                <Grid container>
                    <Grid item xs={10}>
                        <LinearProgressWithLabel color="primary" value={0} value2={5}/>
                        <LinearProgressWithLabel color="primary" value={50} value2={4}/>
                        <LinearProgressWithLabel color="primary" value={0} value2={3}/>
                        <LinearProgressWithLabel color="primary" value={50} value2={2}/>
                        <LinearProgressWithLabel color="primary" value={0} value2={1}/>
                    </Grid>
                </Grid>
       </Grid>
       <Grid item xs={5}>
       <Card sx={{ maxWidth: 500, marginTop:"50px"}}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.ecestaticos.com/DGokxoLjR8N_3GIdyO5vuCBd68I=/0x88:1694x1039/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1fe%2F160%2Fe7d%2F1fe160e7dd58d20124b71fb653c66c1d.jpg"
      />
      <CardContent sx={{backgroundColor:"#001B2E"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
          Juan Portillo
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
        Miembro desde Octubre 2021. Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.
        </Typography>
      </CardContent>
      <CardActions 
                  sx={{
                    backgroundColor: (theme) =>
                     "#ADB6C4",
                  }}>
        <Button fullWidth size="small"> Contáctame</Button>
      </CardActions>
    </Card>
       </Grid>
      </Grid>
      <Grid container>
      <Divider/>
        <Grid style={GridStyle} sx={{margin:"10px", padding:"10px"}} >
                <Toolbar>
                <h4 style={TextStyle}>Marian Solis</h4>
                <Box sx={{ flexGrow: .01 }} />
                <p style={TextStyle}>2.00</p>
                <StarIcon  sx={{color:"#FFC49B"}}/>
                </Toolbar>
                <p style={TextStyle}>Impresionante e increible. Es muy profesional y es muy facil hablar con el. Te hace saber como si fueras competente con la tecnologia. Esta desarolladora web supero mis expectativas.</p>
        </Grid>  
        <Divider/>
        <Grid  style={GridStyle} sx={{margin:"10px", padding:"10px"}} >
                <Toolbar>
                <h4 style={TextStyle}>Marian Solis</h4>
                <Box sx={{ flexGrow: .01 }} />
                <p style={TextStyle}>2.00</p>
                <StarIcon  sx={{color:"#FFC49B"}}/>
                </Toolbar>
                <p style={TextStyle}>Impresionante e increible. Es muy profesional y es muy facil hablar con el. Te hace saber como si fueras competente con la tecnologia. Esta desarolladora web supero mis expectativas.</p>
        </Grid>     
       </Grid>

    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}