import React from 'react'
import { Fragment } from "react"
import {Container, Grid, AppBar, Box, Typography} from "@mui/material"
import CardDescription from '../components/UserProfile/CardDescription'
//import Subnavbar from '../Search/components/Subnavbar'
import UserServices from '../components/UserProfile/UserServices'
import CardReview from '../components/UserProfile/CardReview'
import Review from '../components/UserProfile/Review'
import FavoriteServices from '../components/UserProfile/FavoriteServices'

export default function UserProfile() {
    const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh', paddingLeft: "20px"} }

  return (
    <Grid container spacing={0} style={background.style}>
            
        <Grid container spacing={2} sx={{paddingRight: "25px"}}>
            <Grid item lg={6} xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>
                <Box sx={{justifyContent: "center", display: 'flex' }}>
                    <CardDescription/>
                </Box>
            </Grid>
            <Grid item lg={6} xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>
                <Typography variant="h5" style={{color: "white"}}>
                Servicios de SamanthaP
                </Typography>
                <UserServices/>
            </Grid>

            <Grid item xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>
                <Typography variant="h5" style={{color : 'white'}}>
                    Favoritos de SamanthaP
                </Typography>
                <FavoriteServices/>
            </Grid>

            <Grid item xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>

                <Container style={{padding: "0px"}}>
                <Typography variant="h5" style={{color : 'white'}}>
                Reseñas
                </Typography>
                </Container>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <Container style={{padding: "0px"}}>
                <Review/>
                </Container>
            </Grid>

        </Grid>

    </Grid>
  )
}
