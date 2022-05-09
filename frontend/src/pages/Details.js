import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Info from './Info';
import Grid from '@mui/material/Grid';
import BackImage from '../images/fondo_UserProfile_.png'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Voy a crear el diseño de tu página web.',
  description:
    "Diseñaré una interfaz de usuario de sitio web impresionante, moderna y única.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '',
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container sx={{ backgroundColor : '#294C60',
    height: "100%", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
      <Container maxWidth="lg">
        <main >
          <MainFeaturedPost post={mainFeaturedPost} />
          <Info />
        </main>
      </Container>
      </Grid>
    </React.Fragment>
  );
}