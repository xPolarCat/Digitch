
import React,{ Fragment, useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Comm_Register } from '../services/Comment';import {
  FormControl,
  TextField} from "@mui/material";
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
import {Rate_GetByPost} from "../services/Rate"
import {Post_GetById} from "../services/Post";
import {User_GetOne} from "../services/User"
import {Price_GetByPostAll} from "../services/Price"
import {Comm_GetByPost} from "../services/Comment"
import BackImage from "../resources/details-background.jpg"
import Cookie from 'cookie-universal';

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

const textFieldStyle = { style: { color: "white" } };
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
          )}`}</Typography>
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
   
const cookies = Cookie();
const user_id = cookies.get('user_id');
  const params = useParams();
 const [post, setPost]= useState([]);
 //Aqui guardamos info del usuario
 const [user, setUser]= useState([]);
 //Aqui guardamos info de los precios de los servicios
 const [prices, setPrice]= useState([]);
 //Aqui guardamos info de los comentarios des servicio
 const [comments, setComment]= useState([]);

 const [rates, setRate]=useState([]);
 //Aqui guardo la suma de las calificaciones
 const [sum, setSum]=useState();

 useEffect(()=>{
   async function fetchData(){
    
  //Tuve que convertir el objeto a string
  const idFinal = (params.id);
  console.log("aver",idFinal);

  //Despues separarlo para que solo me quedara el numero y no exista un error
 //Me traigo la info de ese post con ese id
 const data= await Post_GetById(idFinal);
 setPost(data);

 
  //Obtengo la info del usuario que subio ese post
  const dataUser= await User_GetOne(data._user);
  setUser(dataUser);
  console.log("infosi",dataUser);

  
   //Obtengo la info de los precios
   const dataPrices= await Price_GetByPostAll(idFinal,1);
   setPrice(dataPrices);
   console.log("prices", prices)
  
    //Obtengo la info de los comentarios
    const dataComments= await Comm_GetByPost(idFinal);
    setComment(dataComments);
    console.log("comm", dataComments);

    }
  
   fetchData();

  }, []);

  
 //Variable para saber si sube comentarios 
 const [newMessage, setNew]= useState({valor:""});

  const [cmm, setCmm] = useState({
    description : "",
    _user: user_id,
    _post: params.id
   })

   
  const isFirstM = useRef(false);

   useEffect(()=>{

    if(isFirstM.current){
    
    async function fetchData(){
        
    //Obtengo la info de los comentarios
    const dataComments= await Comm_GetByPost(params.id);
    setComment(dataComments);
    console.log("comm", dataComments);
    }
    fetchData();
   }
   
   isFirstM.current = true;
  },[newMessage])


  const onSubmitComment= async(event)=>{
    event.preventDefault();

    console.log(cmm)

    const obj = await Comm_Register(cmm);
    setNew({
      valor: obj
    })


  }

  const onChangeCmm= (event) => {
    setCmm({ 
      ...cmm, 
      description: event.target.value})
  }
  return (

    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <Grid container spacing={2} columnSpacing={2} >
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
              image="https://www.hint.mx/hubfs/Imported_Blog_Media/Hint_P2020_49-2.jpg"
            />
    
              <Typography gutterBottom variant="h5" component="div" style={{color:"white", marginTop: "15px"}}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color:"white"}}>
              {user.description}
              </Typography>
              <Button contained fullWidth style={{height: "35px", color: "white", backgroundColor: "#294C60", marginTop: "15px", borderRadius: "10px"}} href={`../userProfile/${user._id}`}> Contáctame</Button>
             
        </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
      {prices.map((price, index)=>(
        <Grid item xs={12} md={6} key={index}>
            <Grid fullWidth
              item
              key={price.name}
              xs={12}
              md={12}

            >
              <Card>
                <CardHeader
                  title={price.name}
                  subheader={price.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={price.name === 'Pro' ? <StarIcon /> : null}
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
                      ${price.price}
                    </Typography>
                  </Box>
                  <ul>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        sx={{color: 'white'}}
                      >
                        {price.description}esta es la descripcion del precio
                      </Typography>
                  </ul>
                </CardContent>
                <CardActions style={{ backgroundColor: "#ADB6C4"}}
                  sx={{
                    backgroundColor: (theme) =>
                     "#ADB6C4",
                  }}>
                  <Button fullWidth href={`../payment/ ${price._id}`}>
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
          ))}
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
                  <LinearProgressWithLabel color="primary" value={3} value2={4}/>
                  <LinearProgressWithLabel color="primary" value={0} value2={3}/>
                  <LinearProgressWithLabel color="primary" value={0} value2={2}/>
                  <LinearProgressWithLabel color="primary" value={0} value2={1}/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={3}> 
      {comments.map((comment, index)=>(
        <CardReview key={index} prop={comment._id}/>  
      ))}
       </Grid>

       {
            user_id != post._user ?
            (
            <form onSubmit={onSubmitComment}>
            <FormControl fullWidth>
              <TextField
                id="outlined-multiline-static"
                label="Escribe tu comentario aquí"
                fullWidth
                multiline
                rows={3}
                sx={{ mb: 2 }}
                InputLabelProps={textFieldStyle}
                InputProps={textFieldStyle}
                value={cmm.description}
                onChange={onChangeCmm}
                required
              />
              <Typography
                component="legend"
                style={{ color: "white", textAlign: "center"}}
              >
                Califica el servicio
              </Typography>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#001B2E", color: "white", marginBottom: '10px'}}
              >
                Enviar
              </Button>
            </FormControl>
          </form>
            ) : <p></p>
          }

    </React.Fragment>
  )
}