import React, { Fragment, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControl from '@material-ui/core/FormControl';
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
import {Mssg_GetByUsers} from "../services/Message";
import {Mssg_Register} from "../services/Message";


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
  const isFirst = useRef(false);
  const isFirstM = useRef(false);
  
 //Aqui guardamos info del usuario
 const [user1, setUser]= useState([]);
 //Aqui guardamos info de todos los usuarios
 const [users, setUsers]= useState([]);
 //Aqui guardamos los dos usuarios del chat 
 const [chat, setChat]= useState({
     _sender:"",
     _receiver:""
 });
 const [message, setContent] = useState({
  content: "",
  _sender: "",
  _receiver: ""
});
 //Obtengo los mensajes de la conversacion
 const [messages, setMessage]= useState([]);
 //Aqui guardo la info del usuario con el que quiere chatearon
 const [userS, setUserS]=useState([]);
 //Variable para saber si sube mensajes 
 const [newMessage, setNew]= useState({valor:""});

useEffect(()=>{
      
   //Tuve que convertir el objeto a string
   const idFinal = params.id;
   //Despues separarlo para que solo me quedara el numero y no exista un error
    
    setChat ( 
        {
            _sender: idFinal,
            _receiver: idFinal
        }
    )
    

    async function fetchData(){
    //Obtengo la info del usuario que subio ese post
    const dataUser= await User_GetOne(idFinal);
    setUser(dataUser);

    //Obtengo la info de todos los usuarios
    const dataUsers= await User_GetAll(idFinal);
    setUsers(dataUsers);
     }

    fetchData();
    
   }, []);
    
useEffect(()=>{

    if(isFirst.current){
    
      setContent({
        ...message,
        _sender: chat._sender,
        _receiver: chat._receiver
    })


    async function fetchData(){
        
    //Obtengo los mensajes de ese chat
    const dataMessage = await Mssg_GetByUsers(chat);
    setMessage(dataMessage);

    //Obtengo el nombre del otro usuario.
    const dataUserM= await User_GetOne(chat._receiver);
    setUserS(dataUserM);
    console.log("info del chismos",dataUserM);
    }

    fetchData();
    }

    isFirst.current = true;
   },[chat])

   useEffect(()=>{

    if(isFirstM.current){
    
      console.log("jiji")
    async function fetchData(){
        
    //Obtengo los mensajes de ese chat
    const dataMessage = await Mssg_GetByUsers(chat);
    setMessage(dataMessage);
    }
    fetchData();
   }
   
   isFirstM.current = true;
  },[newMessage])

   function handleClick(value){

    setChat({
        ...chat,
        _receiver: value
    })

   }

   const onChangeRate=(event)=>{
    setContent({
      ...message,
      content : event.target.value
    });
  }

  const onSubmitRate= async (event)=>{
    event.preventDefault();
    setContent({
      ...message,
      _sender: chat._sender
    })
    const us = await Mssg_Register(message);
     
    setNew({
      valor: us
    })
    
    console.log(newMessage)

    

  }

  return (
      <div>
        <Grid container style={BackgroundStyle}>
        <Grid container component={Paper} className={classes.chatSection} style={Spacing} >
            <Grid item xs={12} md={3} className={classes.borderRight500} style={{color: "white"}}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src={user1.photo} />
                        </ListItemIcon>
                        <ListItemText primary={user1.name}></ListItemText>
                    </ListItem>
                </List>
                <Divider style={{backgroundColor: "white"}}/>
                <List>
                {users.map((user, index)=>(
                     <ListItem button key={index} onClick={()=>{handleClick(user._id)}}>
                        <ListItemIcon>
                            <Avatar alt={user.name} src={user.photo} />
                        </ListItemIcon>
                        <ListItemText primary={user.name}>{user.name}</ListItemText>
                     </ListItem>
                ))}
                </List>
            </Grid>
            <Grid item xs={12} md={9} style={{ width: '100%', color: "white", border: '1px solid white'}}>
                <List >    
                <ListItem button key={userS.name} >
                        <ListItemIcon>
                            <Avatar alt={userS.name} src={userS.photo} />
                        </ListItemIcon>
                        <ListItemText primary={userS.name}>{userS.name}</ListItemText>
                </ListItem>
                </List>
                <Divider  style={{backgroundColor: "white"}}/>
                <List className={classes.messageArea} >

                {messages.map((message, index)=> {

                  if(message._sender === params.id){
                    return(
                      <ListItem key={index}>
                                <Grid container justifyContent="flex-end">
                                <Box style={BoxMessageOneStyle}>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" primary={message.content}></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="09:30"></ListItemText>
                                    </Grid>
                                </Box>
                                </Grid>
                        </ListItem>   
                    )
                  } else {
                    return(
                      <ListItem key={index}>
                      <Box style={BoxMessageTwoStyle} justifyContent="flex-end">
                          <Grid container>
                              <Grid item xs={12}>
                                  <ListItemText align="left" primary={message.content}></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText align="left" secondary="09:31"></ListItemText>
                              </Grid>
                          </Grid>
                      </Box>
                      </ListItem>
                    )
                  }    
                })}
                
                </List>
                <Divider />
                <form onSubmit={onSubmitRate}>
                    <FormControl fullWidth 
                     onChange={onChangeRate}
                    value={message.content}
                    > 
                    <Grid container style={{padding: '10px'}}>
                   <Grid item xs={11}>
                        <TextField id="outlined-basic-email" InputLabelProps= {textFieldStyle}
                        InputProps={textFieldStyle} label="Escribe tu mensaje..." fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"  type="submit"><SendIcon /></Fab>
                    </Grid>
                  
                </Grid>
                </FormControl>
                </form>
            </Grid>
        </Grid>
        </Grid>
      </div>
  );
}
