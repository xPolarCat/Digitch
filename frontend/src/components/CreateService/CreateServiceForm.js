import { Container, FormControl, FormLabel, TextField, Select, MenuItem, IconButton, Box, Button, Grid, Typography, Divider } from '@mui/material'
import React, { Fragment, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

export default function CreateServiceForm() {
  const textFieldStyle = {style: {color : 'white'} }
  const styles = {helper: {color: 'grey'}}
  const dividerStyle= {backgroundColor: 'white'}

  const [age, setAge] = useState('');

    const handleChange= (event)=>{
        setAge(event.target.value);
    }

  return (
    <Fragment>
        <Container>
            <form>
              <Typography variant="h4" style={textFieldStyle.style} sx={{my:1}}>Creación de servicio</Typography>
              <Divider style={dividerStyle}/>
              <FormControl fullWidth sx={{my: 1}}>
              <FormLabel id="labelTituloService" style={textFieldStyle.style} sx={{my:1}}>Titulo</FormLabel>
                <TextField
                  id="inputTitulo"
                  InputLabelProps= {textFieldStyle}
                  InputProps={textFieldStyle}
                  autoComplete
                />
              </FormControl>
              <FormControl fullWidth sx={{my: 1}}>
                <FormLabel id="labelTituloService" style={textFieldStyle.style}> Categoria</FormLabel>
                <Box sx={{display: "flex"}}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                    sx={{ flexGrow: 1, color: "#ffffff" }}
                >
                    <MenuItem value={10}>Seleccionar</MenuItem>
                    <MenuItem value={20}>Programacion</MenuItem>
                    <MenuItem value={30}>Llorar por las noches</MenuItem>
                </Select>
                </Box>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}}>
                <FormLabel id="labelTituloService" style={textFieldStyle.style}>Descripcion del servicio</FormLabel>
                <TextField
                    id="inputTitulo"
                    multiline
                    rows={3}
                    helperText="Minimo de caracteres: 150"
                    FormHelperTextProps={{  style: styles.helper}}
                    InputLabelProps= {textFieldStyle}
                    InputProps={textFieldStyle}
                    autoComplete
                  />
              </FormControl>
              <FormControl fullWidth sx={{my: 1}}>
              <FormLabel id="labelRequisitos" style={textFieldStyle.style}>Requisitos</FormLabel>
                <TextField
                    id="inputTitulo"
                    multiline
                    rows={3}
                    InputLabelProps= {textFieldStyle}
                    InputProps={textFieldStyle}
                    autoComplete
                  />
              </FormControl>
              <FormControl>
              <Button
                  variant="contained"
                  component="label"
                  sx={{my: 1, backgroundColor:"#294C60"}}
                >
                  Añadir imagen
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </FormControl>
              <Grid container xs={12} spacing={2}>
                <Grid item>
                <img width="150px" src="https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg"/>
                </Grid>
                <Grid item>
                <img width="150px" src="https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg"/>
                </Grid>
                <Grid item>
                <img width="150px" src="https://penworthy.com/Image/Getimage?id=ContactUs\Penworthy%20Group%20Photo.jpg"/>
                </Grid>
              </Grid>
              <Button variant="contained" component="label" sx={{my: 1, backgroundColor:"#294C60", color: "#ffffff"}} endIcon={<SendIcon/>}>Enviar</Button>
            </form>
        </Container>
    </Fragment>
  )
}
