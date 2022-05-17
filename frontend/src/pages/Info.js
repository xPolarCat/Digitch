
import React,{ Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Divider from '@material-ui/core/Divider';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CardMedia from '@material-ui/core/CardMedia';
import CardReview from '../components/UserProfile/CardReview';
import { useParams } from "react-router-dom";
import {Post_GetById} from "../services/Post";
import {User_GetOne} from "../services/User"
import {Price_GetByPost} from "../services/Price"


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
const dividerStyle= {backgroundColor: 'white'}
function LinearProgressWithLabel(props) {


    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          
        <Box sx={{ minWidth: 30 }}>
          <Toolbar>
          <Typography variant="body2" color="white">{`${Math.round(
            props.value2,
          )}`}</Typography>
          <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
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



export default function Pricing() {
   //Aqui guardaremos info del post
  const params = useParams();
 const [post, setPost]= useState([]);
 //Aqui guardamos info del usuario
 const [user, setUser]= useState([]);
 //Aqui guardamos info de los precios de los servicios
 const [prices, setPrice]= useState([]);

 useEffect(()=>{
   async function fetchData(){
    
  //Tuve que convertir el objeto a string
  const myJSON = JSON.stringify(params.id);

  //Despues separarlo para que solo me quedara el numero y no exista un error
  const idFinal= myJSON.slice(2,26);
 //Me traigo la info de ese post con ese id
 const data= await Post_GetById(idFinal);
 setPost(data);
 console.log(data);

 
  //Obtengo la info del usuario que subio ese post
  const dataUser= await User_GetOne(data._user);
  setUser(dataUser);
  console.log(dataUser);
  
    }
  
   fetchData();
  }, []);
  return (

    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <Grid container spacing={2} columnSpacing={2}>
        <Grid>  
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
            {post.content}
            </Typography>
        </Container>
        <Divider style={dividerStyle}/>
        <Box my={3}>

            <CardMedia
              component="img"
              height="140"
              image="https://images.ecestaticos.com/DGokxoLjR8N_3GIdyO5vuCBd68I=/0x88:1694x1039/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1fe%2F160%2Fe7d%2F1fe160e7dd58d20124b71fb653c66c1d.jpg"
            />
    
              <Typography gutterBottom variant="h5" component="div" style={{color:"white", marginTop: "15px"}}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
              Miembro desde Octubre 2021. Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.
              Miembro desde Octubre 2021. Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.
              Miembro desde Octubre 2021. Soy diseñadora de WordPress entusiasta y profesional con 2 años de experiencia. Tengo mucha experiencia en WordPress, HTML, CSS, entre mas.
              </Typography>
              <Button contained fullWidth style={{height: "35px", color: "white", backgroundColor: "#001B2E", marginTop: "15px", borderRadius: "10px"}} href="/UserProfile"> Contáctame</Button>
             
        </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {tiers.map((tier) => (
            <Grid fullWidth
              item
              key={tier.title}
              xs={12}
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
                <CardActions style={{ backgroundColor: "#ADB6C4"}}
                  sx={{
                    backgroundColor: (theme) =>
                     "#ADB6C4",
                  }}>
                  <Button fullWidth href="/Payment">
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
              component="h4"
              variant="h4"
              align="center"
              color="white"
              gutterBottom
              >Reseñas
          </Typography>
          <Grid container>
              <Grid item xs={12}>
                  <LinearProgressWithLabel color="primary" value={0} value2={5}/>
                  <LinearProgressWithLabel color="primary" value={50} value2={4}/>
                  <LinearProgressWithLabel color="primary" value={0} value2={3}/>
                  <LinearProgressWithLabel color="primary" value={50} value2={2}/>
                  <LinearProgressWithLabel color="primary" value={0} value2={1}/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={3}> 
      <Divider/>
        <CardReview/>  
        <Divider/>
        <CardReview/>   
       </Grid>

    </React.Fragment>
  )
}