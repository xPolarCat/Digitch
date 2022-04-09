import React from 'react';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '90%',
    minHeight: '80vh',
    backgroundColor: "rgba(173, 182, 196,0.8)"
  },
  headBG: {
      backgroundColor: '#e0e0e0',
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0',
      minWidth: '20vh'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const Spacing={margin: '60px', minWidth: '90%'}

const BackgroundStyle={ backgroundImage: `url(${BackImage})`,
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
      maxWidth:"250px"
  }

  
  const BoxMessageTwoStyle={
    backgroundColor: "#FFC49B",
    padding:"5px",
    borderRadius:"12px",
    maxWidth:"250px"
}
const Chat = () => {
  const classes = useStyles();

  return (
      <div>
        <Grid container style={BackgroundStyle}>
        <Grid container component={Paper} className={classes.chatSection} style={Spacing}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Juan Portillo"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="SantiangoOrtiz">
                        <ListItemIcon>
                            <Avatar alt="Santiango Ortiz" src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Santiango Ortiz">Santiango Ortiz</ListItemText>
                    </ListItem>
                    <ListItem button key="EmmaHuerta">
                        <ListItemIcon>
                            <Avatar alt="Emma Huerta" src="https://material-ui.com/static/images/avatar/4.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Emma Huerta">Emma Huerta</ListItemText>
                    </ListItem>
                    <ListItem button key="RenatoAcosta">
                        <ListItemIcon>
                            <Avatar alt="Renato Acosta" src="https://material-ui.com/static/images/avatar/8.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Renato Acosta">Renato Acosta</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9} style={{ width: '100%' }}>
                <List >
                <ListItem button key="SantiangoOrtiz" >
                        <ListItemIcon>
                            <Avatar alt="Santiango Ortiz" src="https://material-ui.com/static/images/avatar/5.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Santiango Ortiz">Santiango Ortiz</ListItemText>
                    </ListItem>
                </List>
                <Divider/>
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
                    <ListItem key="3">
                            <Grid container justifyContent="flex-end">
                            <Box style={BoxMessageOneStyle}>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Si recibi la informacion."></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Box>
                            </Grid>
                    </ListItem>
                    <ListItem key="4">
                            <Grid container justifyContent="flex-end">
                            <Box style={BoxMessageOneStyle}>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="La contactare en el tiempo acordado."></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:31"></ListItemText>
                                </Grid>
                            </Box>
                            </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '10px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Escribe tu mensaje..." fullWidth />
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

export default Chat;