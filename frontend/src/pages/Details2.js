import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Info from './Info';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'Voy a crear el diseño de tu pagina web.',
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
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Info />
        </main>
      </Container>
    </React.Fragment>
  );
}