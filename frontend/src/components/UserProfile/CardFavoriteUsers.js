import React,{ Fragment, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, CardHeader, CardActions, Button, IconButton} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Fav_GetOne} from "../../services/Favorite"
import {Post_GetById} from "../../services/Post"
import {User_GetOne} from "../../services/User"

const useStyles = makeStyles({
  root: {
    width: "250px",
    backgroundColor: "#001B2E"
  },
  media: {
    height: "100px"
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
  const cardActionStyle= {backgroundColor: "#ADB6C4", color: "black", boxShadow: "0px 0px 0px 0px"}
  const classes = useStyles();

  const [post, setPost]= useState([])
  const [user, setUser]= useState([])

  useEffect(()=>{
    async function fetchData(){
      //Tuve que convertir el objeto a string
      const myJSON = JSON.stringify(props);
   
      //Despues separarlo para que solo me quedara el numero y no exista un error
      const splitString = myJSON.split(":");
      const splitString2= splitString[1].split("}");
      const splitString3 = splitString2[0].split(' " ');
      const idFinal= splitString3[0].slice(1,25);

   
      //Me traigo la info de ese fav
      const data = await Fav_GetOne(idFinal);
      console.log(data);
      console.log(idFinal)

      //Me traigo la info del post que le dio favorite
      const dataPost= await Post_GetById(data._favorite);
      setPost(dataPost);
      console.log(dataPost)

      //Obtengo la info del usuario que subio ese post
      const dataUser= await User_GetOne(dataPost._user);
      setUser(dataUser);
     }
   
    fetchData();
   }, []);



  return (
    <Card className={classes.root}>
    {post.images &&
        <CardMedia
          className={classes.media}
          image={post.images[0]}
          title="aa"
        />
    }
        <CardContent style={{padding: "0px"}}>
        <Typography gutterBottom variant="h6" component="h2" style={{padding: "10px", margin: "0px", color: "white"}}>
          {post.name}
        </Typography>
        <CardHeader style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px", color: "white"}}
          avatar={<Avatar style={{marginBottom: "5px"}} src={user.photo} >R</Avatar>}
          title={user.name}
        />
      </CardContent>

      <CardActions style={{padding: "0px", backgroundColor: "#ADB6C4"}}>
        <Button variant="contained" style={cardActionStyle} fullWidth href={`../details/${post._id}`} >Ver detalle</Button>
      </CardActions>
    </Card>
  );
}