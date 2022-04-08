import React from 'react'
import { Fragment } from "react"
import {Container, Grid, AppBar, Box, Typography} from "@mui/material"
import CardDescription from '../components/UserProfile/CardDescription'
//import Subnavbar from '../Search/components/Subnavbar'
import UserServices from '../components/UserProfile/UserServices'
import CardReview from '../components/UserProfile/CardReview'
import Review from '../components/UserProfile/Review'

export default function UserProfile() {
    const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }

  return (
    <Grid container spacing={0} style={background.style}>
        {/* <AppBar position="sticky">
            <Subnavbar/>
        </AppBar> */}
        <Container>
        <Grid container spacing={2}>
            <Grid item lg={6} xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>
                <Box sx={{justifyContent: "center", display: 'flex' }}>
                    <CardDescription/>
                </Box>
            </Grid>
            <Grid item lg={6} xs={12} sx={{marginTop: "50px", marginBottom: "50px" }}>
                <UserServices/>
                <Typography variant="h5" style={{marginTop: "15px", marginBottom: "15px", color : 'white'}}>
                Reseñas
                </Typography>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
                <Review/>
            </Grid>

        </Grid>
        </Container>
    </Grid>
  )
}
