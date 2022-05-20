import React,{ Fragment, useEffect, useState } from 'react'
import {Container, Grid, AppBar, Box, Typography} from "@mui/material"
import CardDescription from '../components/UserProfile/CardDescription'
//import Subnavbar from '../Search/components/Subnavbar'
import UserServices from '../components/UserProfile/UserServices'
import CardReview from '../components/UserProfile/CardReview'
import Review from '../components/UserProfile/Review'
import FavoriteUsers from '../components/UserProfile/FavoriteUsers'
import { useParams } from "react-router-dom";
import {User_GetOne} from "../services/User"
import BackgroundImage from '../resources/mac.png';
import CardServicesProfile from '../components/UserProfile/CardServicesProfile'

export default function UserProfile() {
    const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }
    const params = useParams();
    //Aqui guardamos info del usuario
    const [user, setUser]= useState([]);


    useEffect(()=>{
        async function fetchData(){
         
       //Tuve que convertir el objeto a string
       const myJSON = JSON.stringify(params.id);
       //Despues separarlo para que solo me quedara el numero y no exista un error
       const idFinal= myJSON.slice(2,26);
      //Me traigo la info de ese post con ese id
      console.log(idFinal);
       
        //Obtengo la info del usuario que subio ese post
        const dataUser= await User_GetOne(idFinal);
        setUser(dataUser);
        console.log("infosi",dataUser);
         }
       
        fetchData();
       }, []);




  return (
    <Grid container spacing={0} style={background.style}>
            
        <Grid container spacing={2} sx={{paddingRight: "0px", backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Grid item xs={12} sx={{marginTop: "50px", marginBottom: "50px"}}>
                <Box sx={{justifyContent: "center", display: 'flex' }}>
                    <CardDescription id={user._id} />
                </Box>
            </Grid>
            <Grid item xs={12} sx={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "10px", backgroundColor:"rgb(0,0,0, 0.5)"}}>
                <Typography textAlign='center' variant="h5" style={{color: "white"}}>
                Servicios de {user.name}
                </Typography>
                <Grid item spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{display: "flex"}}>
                    <Grid sx={{margin: "15px"}}>
                        <CardServicesProfile/>
                    </Grid >
                    <Grid sx={{margin: "15px"}}>
                        <CardServicesProfile/>
                    </Grid>
                    <Grid sx={{margin: "15px"}}>
                        <CardServicesProfile/>
                    </Grid>
                    
                </Grid>
            </Grid>
               
            <Grid item xs={12} direction="column" sx={{paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#00121f"}}>
                <Grid item lg={6} >
                    <Typography variant="h5" textAlign="center" style={{color : 'white', paddingBottom: "10px" }}>
                        Favoritos de {user.name}
                    </Typography>   
                </Grid>
                <Grid item lg={6} >
                    <Box sx={{display: 'flex' }}>
                        <FavoriteUsers/>
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "20px",paddingRight: "20px", backgroundColor:"rgb(0,0,0, 0.5)"}}>

                <Container style={{padding: "0px"}}>
                <Typography variant="h5" style={{color : 'white'}}>
                Reseñas
                </Typography>
                </Container>
                {/* <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/> */}
                <Container style={{padding: "0px"}}>
                    <Review/>
                </Container>
            </Grid>

        </Grid>

    </Grid>
  )
}
