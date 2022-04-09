import React, { Fragment, useState } from 'react'
import {Container, FormControl, InputLabel, Select, MenuItem, FormLabel, TextField} from '@mui/material'
//import Subnavbar from '../Search/components/Subnavbar'
import CardServices from '../components/Search/CardServices'
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
  const background = {style: {backgroundColor : '#294C60', backgroundSize: 'cover', minHeight: '100vh', paddingLeft: "20px"} }
  const textFieldStyle = {style: {color : 'white'} }
 
    const [age, setAge] = useState('');

    const handleChange= (event)=>{
        setAge(event.target.value);
    }

  return (

    <Grid  spacing={0} style={background.style}>
    {/* <AppBar position="sticky">
      <Subnavbar/>
    </AppBar> */}

      <div>
          <FormControl fullWidth sx={{my: 2}}>
                <TextField
                  id="inputTitulo"
                  InputLabelProps= {textFieldStyle}
                  InputProps={textFieldStyle}
                  autoComplete
                  label="Buscar"
                />
              </FormControl>
      </div>
      <div id="resultLegend">
          <Typography variant="h4" style={{padding: "10px", color: "white" }}>
          Resultados para: Diseño
          </Typography>
      </div>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
          <FormControl variant='filled' style={{width: "200px", marginRight: "20px", marginBottom: "30px"}} >
          <InputLabel id="demo-" style={{color: "white"}}>Categoría</InputLabel>
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
              style={{color:"white"}}
          >
              <MenuItem value={10}>Arte</MenuItem>
              <MenuItem value={20}>Programacion</MenuItem>
              <MenuItem value={30}>Llorar por las noches</MenuItem>
          </Select>
          </FormControl>
      </div>
      <div id="cardsServicesLayout">
          <Grid container spacing={3} style={{display: "flex", justifyContent: "center"}}>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item >
              <CardServices/>
            </Grid>
            <Grid item >
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
            <Grid item>
              <CardServices/>
            </Grid>
           
          </Grid>
          
      </div>
      <div id="paginationServices" >
          <Pagination count={10} shape="rounded"classes={{ ul: classes.ul }}sx={{alignItems: "center", justifyContent: "center", display: 'flex', marginTop: "50px", paddingBottom: "20px"}}></Pagination>
      </div>
    </Grid>
  )
}
