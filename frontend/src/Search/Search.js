import React, { Fragment, useState } from 'react'
import {Container, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import Subnavbar from './components/Subnavbar'
import CardServices from './components/CardServices'
import { AppBar, Grid, Pagination, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff"
    }
  }
}));

export default function CreateService() {
  const classes = useStyles();
  const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh'} }
  const textFieldStyle = {style: {color : 'white'} }
 
    const [age, setAge] = useState('');

    const handleChange= (event)=>{
        setAge(event.target.value);
    }

  return (

    <Grid  container spacing={0} style={background.style}>
    <AppBar position="sticky">
      <Subnavbar/>
    </AppBar>
    <Container>
      <div id="resultLegend">
          <Typography variant="h4" style={{padding: "10px", marginTop: "20px", color: "white" }}>
          Resultados para: Diseño
          </Typography>
      </div>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
          <FormControl variant='filled' style={{width: "200px", marginRight: "20px", marginBottom: "30px"}} >
          <InputLabel id="demo-simple-select-label" style={{color: "white"}}>Categoría</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Categoría"
              onChange={handleChange}
              style={{color:"white"}}
              
          >
              <MenuItem value={10}>Seleccionar</MenuItem>
              <MenuItem value={20}>Programacion</MenuItem>
              <MenuItem value={30}>Llorar por las noches</MenuItem>
          </Select>
          </FormControl>

          <FormControl variant='filled' style={{width: "200px"}}>
          <InputLabel id="demo-simple-select-label" style={{color: "white"}}>Precios</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Precios"
              onChange={handleChange}
          >
              <MenuItem value={10}>Arte</MenuItem>
              <MenuItem value={20}>Programacion</MenuItem>
              <MenuItem value={30}>Llorar por las noches</MenuItem>
          </Select>
          </FormControl>
      </div>
      <div id="cardsServicesLayout">
          <Grid container spacing={2}>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
            <Grid item md={3} xs={12} >
              <CardServices/>
            </Grid>
          </Grid>
          
      </div>
      <div id="paginationServices" >
          <Pagination count={10} shape="rounded"classes={{ ul: classes.ul }}sx={{alignItems: "center", justifyContent: "center", display: 'flex', marginTop: "50px", marginBottom: "50px"}}></Pagination>
      </div>
    </Container>
    </Grid>
  )
}