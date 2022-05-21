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

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



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


  
const mainFeaturedPost = {
  title: post.name,
  description:
    post.content,
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
        </main>
      </Container>
      </Grid>
    </React.Fragment>
  );
}