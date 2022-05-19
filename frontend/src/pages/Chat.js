import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import BackImage from "../images/backImageChat.jpg";
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import {User_GetOne} from "../services/User";
import {User_GetAll} from "../services/User";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '90%',
    minHeight: '80vh',
    backgroundColor: "#00121f"
  },
  headBG: {
      backgroundColor: 'white',
  },
  borderRight500: {
      border: '1px solid white',
      minWidth: '20vh'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const Spacing={margin: '60px', minWidth: '90%'}

const BackgroundStyle={ backgroundColor: "#294C60",
height: "100%", 
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover"
// //minWidth: '100vh'
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFC49B",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    height:"48px",
    width:"180px",
    borderBottomLeftRadius: "3px",
    borderTopLeftRadius: "3px",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
  
    },
  }));
  

const BoxMessageOneStyle={
      backgroundColor: "#FFFFFF",
      padding:"5px",
      borderRadius:"12px",
      maxWidth:"250px",
      color: "black"
  }

  const BoxMessageTwoStyle={
    backgroundColor: "#FFC49B",
    padding:"5px",
    borderRadius:"12px",
    maxWidth:"250px",
    color: "black"
}
const textFieldStyle = {style: {color : 'white'} }

export default function Chat() {
  const classes = useStyles();
  const params = useParams();
  
 //Aqui guardamos info del usuario
 const [user1, setUser]= useState([]);
 //Aqui guardamos info de todos los usuarios
 const [users, setUsers]= useState([]);

useEffect(()=>{
    async function fetchData(){
     
   //Tuve que convertir el objeto a string
   const myJSON = JSON.stringify(params.id);
   //Despues separarlo para que solo me quedara el numero y no exista un error
   const idFinal= myJSON.slice(2,26);
  //Me traigo la info de ese post con ese id
  console.log(idFinal);
   
    //Obtengo la info del usuario que subio ese post
    const dataUser= await User_GetOne(idFinal);
    setUser(dataUser);
    console.log("infosi",dataUser);

    //Obtengo la info de todos los usuarios
    const dataUsers= await User_GetAll(idFinal);
    setUsers(dataUsers);
    console.log("usuarios", dataUsers)
     }

    fetchData();
    
   }, []);
    
  return (
      <div>
        <Grid container style={BackgroundStyle}>
        <Grid container component={Paper} className={classes.chatSection} style={Spacing} >
            <Grid item xs={12} md={3} className={classes.borderRight500} style={{color: "white"}}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={user1.name}></ListItemText>
                    </ListItem>
                </List>
                <Divider style={{backgroundColor: "white"}}/>
                <List>
                {users.map((user, index)=>(
                     <ListItem button key={index} value={user._id}>
                        <ListItemIcon>
                            <Avatar alt={user.name} src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={user.name}>{user.name}</ListItemText>
                     </ListItem>
                ))}
                </List>
            </Grid>
            <Grid item xs={12} md={9} style={{ width: '100%', color: "white", border: '1px solid white'}}>
                <List >    
                <ListItem button key={user1.name} >
                        <ListItemIcon>
                            <Avatar alt={user1.name} src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={user1.name}>{user1.name}</ListItemText>
                </ListItem>
                </List>
                <Divider  style={{backgroundColor: "white"}}/>
                <List className={classes.messageArea} >
                    <ListItem key="1">
                            <Grid container justifyContent="flex-end">
                            <Box style={BoxMessageOneStyle}>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hola, que tal?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Box>
                            </Grid>
                    </ListItem>   
                    <ListItem key="2">
                        <Box style={BoxMessageTwoStyle} justifyContent="flex-end">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hola, realice la compra de un servicio."></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </Box>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '10px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" InputLabelProps= {textFieldStyle}
                    InputProps={textFieldStyle} label="Escribe tu mensaje..." fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
      </div>
  );
}
