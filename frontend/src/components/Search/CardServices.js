import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, CardHeader, CardActions, Button, IconButton} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Post_GetById} from "../../services/Post"
import {User_GetOne} from "../../services/User"
import {Price_GetByPost} from "../../services/Price"

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    backgroundColor: "#001B2E"
  },
  media: {
    height: "200px"
  },
  avatarImg: {
    padding: "0px"
  },
  costo: {
    backgroundColor: "#ADB6C4",
    padding: "5px"
  }
});


export default function CardServices(props) {
  const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }
  const textFieldStyle = {style: {color : 'white'} }
  const cardActionStyle= {backgroundColor: "#001B2E"}

  const classes = useStyles();



 //Aqui guardaremos info del post
 const [post, setPost]= useState([]);
 //Aqui guardamos info del usuario
 const [user, setUser]= useState([]);
 //Aqui guardamos info de los precios de los servicios
 const [prices, setPrice]= useState([]);

useEffect(()=>{
 async function fetchData(){
   //Tuve que convertir el objeto a string
   const myJSON = JSON.stringify(props);

   //Despues separarlo para que solo me quedara el numero y no exista un error
   const splitString = myJSON.split(":");
   const splitString2= splitString[1].split("}");
   const splitString3 = splitString2[0].split(' " ');
   const idFinal= splitString3[0].slice(1,25);

  //Me traigo la info de ese post con ese id
   const data= await Post_GetById(idFinal);
   setPost(data);

  //Obtengo la info del usuario que subio ese post
   const dataUser= await User_GetOne(data._user);
   setUser(dataUser);

   //Obtengo la info de los precios
   const dataPrices= await Price_GetByPost(idFinal);
   setPrice(dataPrices);
   
   console.log(idFinal);
   console.log(prices);

  }

 fetchData();
}, [props]);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.forbes.com.mx/2019/04/blackrrock-invertir-1-640x360.jpg"
        title="aa"
      />
      <CardContent style={{padding: "0px"}}>
        <Typography gutterBottom variant="h6" component="h2" style={{padding: "10px", margin: "0px", color: "white"}}>
          {post.name}
        </Typography>
        <CardHeader style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px", color: "white"}}
          avatar={<Avatar style={{marginBottom: "5px"}}>R</Avatar>}
          title={user.name}
        />
        <Typography component="p" textAlign="center" className={classes.costo}>
         <Typography  gutterBottom variant="h6" component="h2" style={{padding: "10px", margin: "0px", color: "black"}} > Desde ${prices.price} MXN</Typography>
          
        </Typography>
      </CardContent>

      <CardActions style={{padding: "0px", backgroundColor: "#001B2E"}}>
        <Button variant="contained" style={cardActionStyle} fullWidth href={`../details/ ${post._id}`} >Ver detalle</Button>
        <IconButton aria-label="delete" style={{color: "pink", margin:"0"}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}