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
import {Fav_GetUser} from "../services/Favorite"
import {Post_GetById, Post_GetByUser} from "../services/Post"
import BackgroundImage from '../resources/mac.png';
import CardFavoriteUsers from '../components/UserProfile/CardFavoriteUsers'
import CardServicesProfile from '../components/UserProfile/CardServicesProfile'
import { Purchase_GetByUser } from '../services/Purchase'

export default function UserProfile() {
    const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }
    const params = useParams();
    //Aqui guardamos info del usuario
    const [user, setUser]= useState([]);
    const [posts, setPosts]=useState([]);
    const [favs, setFavs]=useState([]);

    const [purchases, setPurchases]=useState([]);
    const [purchasesPost, setPP] = useState([]); 

    useEffect(()=>{
        async function fetchData(){
       //Tuve que convertir el objeto a string
       const idFinal = (params.id);
       //Despues separarlo para que solo me quedara el numero y no exista un error
      //Me traigo la info de ese post con ese id
        console.log(idFinal);
       
        //Obtengo la info del usuario que subio ese post
        const dataUser= await User_GetOne(idFinal);
        setUser(dataUser);

        //Obtengo todos los servicios que ha subido el usuario del perfil
        const dataPosts= await Post_GetByUser(idFinal);
        setPosts(dataPosts);
        console.log("posts", dataPosts);

        //Obtengo todos los posts a los que le dio favorito
        const dataFav= await Fav_GetUser(idFinal);
        setFavs(dataFav);
        console.log("favs", dataFav);
 
        const dataPurchase = await Purchase_GetByUser(idFinal);
        setPurchases(dataPurchase);
        console.log("compras", dataPurchase.data);
        const array = dataPurchase.data;

        let pArrays = [];
        const data = array.map(async(item) => {
            console.log("no se que es esto", item._post)
            const dataTemp = await Post_GetById(item._post);
            console.log("Hola",dataTemp);
            pArrays.push(dataTemp);
        });
        setPP(pArrays)
        console.log("post comprados por id", purchasesPost);
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
                {posts.map((post, index)=>(
                    <Grid sx={{margin: "15px"}} key={index}>
                        <CardServicesProfile info={post._id}/>
                    </Grid >
                ))}
                </Grid>
            </Grid>
               
            <Grid item xs={12} direction="column" sx={{paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#00121f"}}>
                
                <Typography variant="h5" textAlign="center" style={{color : 'white', paddingBottom: "10px" }}>
                    Favoritos de {user.name}
                </Typography>   

                <Grid item container spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{display: "flex"}}>
                {favs.map((fav, index)=>(
                    <Grid >
                    <Box sx={{margin: "15px"}} key={index}>
                        <CardFavoriteUsers info={fav._id}/>
                    </Box>
                    </Grid>
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "10px", backgroundColor:"rgb(0,0,0, 0.5)"}}>
                <Typography textAlign='center' variant="h5" style={{color: "white"}}>
                Comprados por {user.name}
                </Typography>
                <Grid item spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{display: "flex"}}>
                {purchasesPost.map((item, index)=>(
                    <Grid sx={{margin: "15px"}} key={index}>
                        <CardServicesProfile info={item._id}/>
                    </Grid >
                ))}
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "20px",paddingRight: "20px", backgroundColor: "#00121f"}}>

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
