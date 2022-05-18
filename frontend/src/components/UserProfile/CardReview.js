import { Divider, Container, Card } from '@mui/material'
import React, { Fragment, useEffect, useState} from 'react'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star';
import {Comm_GetById} from "../../services/Comment"
import {User_GetOne} from "../../services/User"
import {Rate_GetByUser} from "../../services/Rate"

export default function CardReview(props) {
    const textFieldStyle = {style: {color : 'white'} }
    const dividerStyle= {backgroundColor: 'white'}
   //Aqui guardamos comentario
   const [comment, setComment]= useState([]);
   //Aqui guardamos info del usuario
   const [user, setUser]= useState([]);
   //Aqui guardamos info de la calificacion
   const [rate, setRate]= useState();
   //Aqui guardamos la calificacion
   const [rateFinal, setRate2]= useState();



     useEffect(()=>{
        async function fetchData(){
          //Tuve que convertir el objeto a string
            const myJSON = JSON.stringify(props);
            //Despues separarlo para que solo me quedara el numero y no exista un error
            const idFinal= myJSON.slice(9,33);
            console.log(idFinal);

            //Obtenemos la info de ese comentario
            const dataComments= await Comm_GetById(idFinal);
            setComment(dataComments);
            console.log(dataComments);
            
            //Obtengo la info del usuario que subio ese post
            const dataUser= await User_GetOne(dataComments._user);
            setUser(dataUser);
            console.log(dataUser);

            //Obtengo la calificacion que dio ese usuario
            const dataRate= await Rate_GetByUser(dataComments._user);
            setRate(dataRate);
            setRate2(dataRate.rate);
            
               
         }
       
        fetchData();
       }, []);

  return (
    <Fragment>
 
        <Container style={{padding: "0px", marginBottom: "15px", backgroundColor: "#001B2E", padding: "15px", borderRadius: "10px"}}>
            <Typography variant="h6" style={{color: "white"}}>
                {user.name}
            </Typography>
            <Typography  style={{color: "white"}}>
                Calificación: {rateFinal}  <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
            </Typography>
            <Typography style={{color: "white"}}>
               {comment.description}
            </Typography>
        </Container>
    </Fragment>
  )
}
