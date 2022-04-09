import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, CardHeader, CardActions, Button, IconButton} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundColor: "#001B2E"
  },
  media: {
    height: "100px"
  },
  avatarImg: {
    padding: "0px"
  },
  costo: {
    backgroundColor: "#ADB6C4",
    padding: "5px"
  }
});

export default function CardServices() {
  const cardActionStyle= {backgroundColor: "#ADB6C4", color: "black", boxShadow: "0px 0px 0px 0px"}
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.forbes.com.mx/2019/04/blackrrock-invertir-1-640x360.jpg"
        title="aa"
      />
      <CardContent style={{padding: "0px"}}>
        <Typography gutterBottom variant="h6" component="h2" style={{padding: "10px", margin: "0px", color: "white"}}>
            JuliesRodriguez2
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{padding: "10px", color: "white"}}>
          Descripcion de julies
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{padding: "10px", color: "white"}}>
          Clasificación: 4 <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
        </Typography>
       
      </CardContent>

      <CardActions style={{padding: "0px", backgroundColor: "#ADB6C4"}}>
        <Button variant="contained" style={cardActionStyle} fullWidth >Ver detalle</Button>
        <IconButton aria-label="delete" style={{color: "pink", margin:"0"}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}