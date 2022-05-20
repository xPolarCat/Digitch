import React,{ Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Info from './Info';
import Grid from '@mui/material/Grid';
import BackImage from '../images/fondo_UserProfile_.png';
import { useParams } from "react-router-dom";
import {Post_GetById} from "../services/Post"
import {
  FormControl,
  TextField,
  Button,
  Typography} from "@mui/material";
  import Cookie from 'cookie-universal';
import { Comm_Register } from '../services/Comment';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
const cookies = Cookie();
const user_id = cookies.get('user_id');

export default function Blog() {
  const classes = useStyles();
  const params = useParams();
  //Aqui guardaremos info del post
 const [post, setPost]= useState([]);

  useEffect(()=>{
    async function fetchData(){
     
    //Tuve que convertir el objeto a string
    const idFinal = (params.id)

    //Despues separarlo para que solo me quedara el numero y no exista un error
    
    //Me traigo la info de ese post con ese id
    const data= await Post_GetById(idFinal);
    setPost(data);
    console.log("details:",data);
   
     }
   
    fetchData();
   }, []);


   const [cmm, setCmm] = useState({
    description : "",
    _user: user_id,
    _post: params.id
   })
   const onChangeCmm= (event) => {
    setCmm({ 
      ...cmm, 
      description: event.target.value})
  }

   const onSubmitComment= async(event)=>{
    event.preventDefault();

    console.log(cmm)

    const obj = await Comm_Register(cmm);



  }
  const textFieldStyle = { style: { color: "white" } };

const mainFeaturedPost = {
  title: post.name,
  description:
    post.content,
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '',
  id: post._id
};
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container sx={{ backgroundColor : '#294C60',
      height: "100%", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"}}>
      <Container maxWidth="lg">
        <main >
          <MainFeaturedPost post={mainFeaturedPost} />
          <Info id={post._id} />

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

        </main>
      </Container>

      </Grid>
    </React.Fragment>
  );
}