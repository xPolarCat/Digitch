import React from 'react'
import {Container , AppBar, Box, Button} from '@mui/material'

export default function Subnavbar() {
    const hola=(event)=>{
        console.log("hola");
    }
  return (
    <AppBar position="static" >
    <Container>
        <Box sx={{alignItems: "center", justifyContent: "center", display: { xs: 'none', md: 'flex' }}}>
            <Button variant="h6" style={{display: "inline-block"}} sx={{ m: 2}} onClick={hola}>
            Gráficas y diseño 
            </Button>
            <Button variant="h6" style={{display: "inline-block"}} sx={{ m: 2}} onClick={hola}>
            Animación 
            </Button>
            <Button variant="h6" style={{display: "inline-block"}} sx={{ m: 2}} onClick={hola}>
            Video 
            </Button>
            <Button variant="h6" style={{display: "inline-block"}} sx={{ m: 2}} onClick={hola}>
            Programación 
            </Button>
            <Button variant="h6" style={{display: "inline-block"}} sx={{ m: 2}} onClick={hola}>
            Bases de datos
            </Button>
        </Box>
        <Box sx={{display: { xs: 'flex', md: 'none' }}}>
           
        </Box>
    </Container>
  </AppBar>
  )
}