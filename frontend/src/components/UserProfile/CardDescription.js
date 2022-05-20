import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, Button, Box, Divider} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';
import {User_GetOne} from "../../services/User"
import Cookie from 'cookie-universal';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      backgroundColor: "#001B2E",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    media: {
      height: "200px"
    },
    avatarImg: {
      padding: "0px"
    },
    costo: {
      backgroundColor: "#87CEEB",
      padding: "5px"
    }
  });
  
  export default function CardDescription(props) {
    const classes = useStyles();  
    //Aqui guardamos info del usuario
    const [user, setUser]= useState([]);
    const cookies = Cookie();
    const cookieTemp = cookies.get('user_id'); 

    
useEffect(()=>{
  async function fetchData(){
    //Tuve que convertir el objeto a string
    const myJSON = JSON.stringify(props);
 
    //Despues separarlo para que solo me quedara el numero y no exista un error
    const splitString = myJSON.split(":");
    const splitString2= splitString[1].split("}");
    const splitString3 = splitString2[0].split(' " ');
    const idFinal= splitString3[0].slice(1,25);
 
 
   //Obtengo la info del usuario que subio ese post
    const dataUser= await User_GetOne(idFinal);
    setUser(dataUser);
    console.log(dataUser);
 
   }
 
  fetchData();
 }, [props]);

  
    return (
      <Card className={classes.root} variant="outlined" >
        <CardContent style={{ padding: "30px"}} >
          <Avatar style={{margin: "auto", height:"100px", width:"100px"}} 
          src="https://cdn.forbes.com.mx/2019/04/blackrrock-invertir-1-640x360.jpg" /> 
          <Typography variant="h4" style={{padding: "10px", margin: "0px", color: "white"}} textAlign="center">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{padding: "5px", color: "white"}} textAlign="center">
            Calificación: 4 <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
          </Typography>
          { 
            user._id != cookieTemp ? (
          <Box textAlign='center' sx={{m: 1}} >
            <Button variant='contained'style={{backgroundColor: "#294C60"}} href={`../chat/${cookieTemp}`}>
              Enviar mensaje
            </Button>
           
          </Box>
           ) : ""
          }

          <Box textAlign='center' sx={{m: 1}} >
          { user._id == cookieTemp &&
              <Button variant='contained'style={{backgroundColor: "#294C60"}} href={`../editProfile/${cookieTemp}`}>
               Editar perfil
             </Button>
          }
          </Box>

          <Divider sx={{m:2}}/>
          <Typography component="p" textAlign="center" style={{color: "white"}}>
          {user.description}
          </Typography>
        </CardContent>

      </Card>
    );
  }