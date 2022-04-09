import React from 'react'
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, Button, Box, Divider} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';

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
  
  export default function CardDescription() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined" >
        <CardContent style={{ padding: "30px"}} >
          <Avatar style={{margin: "auto", height:"100px", width:"100px"}} 
          src="https://cdn.forbes.com.mx/2019/04/blackrrock-invertir-1-640x360.jpg" /> 
          <Typography variant="h4" style={{padding: "10px", margin: "0px", color: "white"}} textAlign="center">
            Edna Lecea
          </Typography>
          <Typography variant="h6" style={{padding: "5px", margin: "0px", color: "white"}} textAlign="center">
            Una mente soñadora
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{padding: "5px", color: "white"}} textAlign="center">
            Clasificación: 4 <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
          </Typography>
          <Box textAlign='center' sx={{m: 1}} >
            <Button variant='contained'style={{backgroundColor: "#294C60"}}>
              Enviar mensaje
            </Button>
          </Box>
          <Divider sx={{m:2}}/>
          <Typography component="p" textAlign="center" style={{color: "white"}}>
          Soy una desarrolladora Front End con experiencia en HTML, CSS y Javascript además de la utilización de diversos frameworks como Bootstrap, ReactJS y VueJS.
          </Typography>
        </CardContent>

      </Card>
    );
  }