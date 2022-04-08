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
          <Typography variant="body2" color="black">{`${Math.round(
            props.value2,
          )}`}</Typography>
          <StarIcon sx={{color:"#FFC49B"}}/>
          </Toolbar>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="black">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const cards = [1];


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
            color="text.primary"
            gutterBottom
            >Acerca de este servicio
            </Typography>
            <Typography variant="p" color="text.secondary" component="p">
            Si estas buscando un desarrollador de sitios web HTML, CCS de WordPress
            profesional para  desarrollar el sitio web de su empresa, entonces esta en el 
            lugar correcto. Mi objetivo es ofrecer soluciones que causen una excelente  
            primera impresion. Ya he desarrollado mas de 50 sitios. Encontraras que si
            tengo confianza, trabajo duro, excelente para comunicarme, confiable y lista.
            </Typography>
        </Container>
        <Divider />
        <Container disableGutters maxWidth="lg" component="main" sx={{ margin:"20px" }}>
            <Grid container>
                    <Grid item xs={3}>
                        <img style={ImageVStyle} src="https://st.depositphotos.com/2069323/2156/i/600/depositphotos_21568765-stock-photo-casual-businessman-pointing.jpg"/>
                    </Grid>
                    <Grid item xs={8.5}>
                            <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            >Vendedor
                            </Typography> 
                        <Typography variant="p" color="text.secondary" component="p"> Soy Juan Portillo. Miembro desde Octubre 2021. Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.</Typography>
                        <IconButton aria-label="contact">
                        <ChatBubbleIcon style={IconStyle2} />
                        <p style={TextStyle}>Contactame</p>
                        </IconButton>
                    </Grid>
            </Grid>
        </Container>
        <Divider/>
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
                <CardActions sx={{
                    backgroundColor:"#294C60", 
                  }} >
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid>
          
      <Grid container spacing={2} columnSpacing={2}>
        <Grid item xs={6}>
                <h2 style={TextStyle}>Reseñas</h2>
                <Grid container>
                    <Grid item xs={10}>
                        <LinearProgressWithLabel color="inherit" value={0} value2={5}/>
                        <LinearProgressWithLabel color="inherit" value={50} value2={4}/>
                        <LinearProgressWithLabel color="inherit" value={0} value2={3}/>
                        <LinearProgressWithLabel color="inherit" value={50} value2={2}/>
                        <LinearProgressWithLabel color="inherit" value={0} value2={1}/>
                    </Grid>
                </Grid>
       </Grid>
       <Grid item xs={5}>
       </Grid>
     </Grid>
      <Divider />
      </Grid>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}