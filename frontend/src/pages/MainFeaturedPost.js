import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@mui/icons-material/Star';


const TextStyle={
  color:"white"
}

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/06/108191-webassembly-pretende-ser-nuevo-estandar-programacion-web.jpg?itok=NvuuYPF-)`, opacity: 1}}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Grid container spacing={2}>
            <Toolbar>
            <Box
            sx={{ display: 'flex', alignItems: 'center',  width: 'fit-content', color: 'text.secondary', '& svg': {  m: 1.5, }, '& hr': {  mx: 0.5, },
            }}>
            <List>
                        <ListItem button key="RemySharp">
                            <ListItemIcon>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
                            </ListItemIcon>
                            <ListItemText style={TextStyle} primary="Juan Portillo"></ListItemText>
                        </ListItem>            
                        <Divider orientation="vertical" flexItem />
            </List>
            <Divider orientation="vertical" flexItem />
            <StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon sx={{color:"#FFC49B"}}/><StarIcon/>
            <p style={TextStyle}>4.0</p>
            </Box>
            </Toolbar>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};