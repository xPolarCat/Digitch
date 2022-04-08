import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent";
import {Typography, Avatar, CardHeader, CardActions, Button} from "@mui/material"; 
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
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
  const cardActionStyle= {backgroundColor: "#001B2E"}
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://cdn.forbes.com.mx/2019/04/blackrrock-invertir-1-640x360.jpg"
        title="aa"
      />
      <CardContent style={{padding: "0px"}}>
        <Typography gutterBottom variant="h6" component="h2" style={{padding: "10px", margin: "0px", color: "black"}}>
          Enseño a programar en c#
        </Typography>
        <CardHeader style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px", color: "black"}}
          avatar={<Avatar style={{marginBottom: "5px"}}>R</Avatar>}
          title="Shrimp and Chorizo Paella"
        />
        <Typography variant="body2" color="textSecondary" component="p" style={{padding: "10px", color: "black"}}>
          Clasificación: 4 <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
        </Typography>
        <Typography component="p" textAlign="center" className={classes.costo}>
          <b>Desde 150 MXN</b> 
        </Typography>
      </CardContent>

      <CardActions style={{padding: "0px", backgroundColor: "#001B2E"}}>
        <Button variant="contained" style={cardActionStyle} fullWidth >Ver detalle</Button>
      </CardActions>
    </Card>
  );
}