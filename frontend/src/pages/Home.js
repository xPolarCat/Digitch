import React,  {Fragment}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import backgroundVideo from '../resources/HeroVideo.mp4';
import {Grid} from '@material-ui/core';
import Image from 'mui-image';
import logo from '../resources/logo.png';
import webIcon from '../resources/web.png';
import servicesIcon from '../resources/services.png';
import workIcon from '../resources/work.png';
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: '100vh',
		position: 'relative',
		'& video': {
			objectFit: 'cover',
		},
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	title: {
		paddingBottom: theme.spacing(4),
	},
}));

const Home = () => {
	const classes = useStyles();
    const btnstyle={backgroundColor: 'rgb(41, 76, 96, .8)'}
    const boxesStyle = {color: 'white', 
        backgroundColor: 'rgb(41, 76, 96, .6)', 
        marginTop: '6vh',
        marginLeft: '15px',
        textAlign: 'center', 
        borderRadius: '15px', 
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '1px solid black',
		textAlign: 'center',
        minHeight: '30vh'
}
    const secondSectionStyle = { justifyContent: 'center', minHeight: '50vh',  backgroundSize: 'cover'}

    const thirdSectionStyle = { marginTop: '5vh'}

	const textStyle = {margin: '2vh', textAlign: 'justify', textJustify: 'inter-word'}

	return (
        <Fragment>
		<section className={classes.root}>
			<ReactPlayer
				url={backgroundVideo}
				playing
				loop
				muted
				width="100%"
				height="100%"
			/>
			<div className={classes.overlay}>
				<Box
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					color="#fff"
				>
					<Typography variant="h3" component="h1" className={classes.title}>
                        <Image  sx={{ boxShadow: 2 }} src={logo} />
					</Typography>
					<Button style={btnstyle} color="primary" variant="contained" size="large">
						Descubre más
					</Button>
				</Box>
			</div>
		</section>
	<Grid  style = {
		{
			backgroundColor: '#001B2E'
		}
	} >

        {/* Acá puedes poner otra sección o como quieras */}
		<section  >
     <Grid container spacing = {0} style={secondSectionStyle} >
       <Grid style={boxesStyle} xs={9} sm={3} >
        <Box
        component = "img"
        sx = {{width: 70,height: 70, marginTop: '1vh'}}
        alt = "Icono1"
        src = {webIcon} />
        <h3>Sitio web</h3>
           <h4 style={textStyle}>Somos una página web especializada en servicios freelancer de nivel internacional con un enfoque en tecnologías multimedia.</h4>
           </Grid>
           <Grid style={boxesStyle} xs={9} sm={3}>
        <Box
        component = 'img' 
        sx = {{width: 70, height: 70, marginTop: '1vh'}}
        alt='Icono2'
        src={servicesIcon}
        />
        <h3>Servicios</h3>
        <h4 style={textStyle}>Contrata a cualquiera de nuestros profesionales que más se acople a tus necesidades.</h4>
           </Grid>
           <Grid  style = {boxesStyle} xs={9} sm={3} >
        <Box
        component= 'img'
        sx = {{width: 70, height: 70, marginTop: '1vh'}}
        alt= 'Icono3'
        src= {workIcon}
        />
        <h3>Trabajo</h3>
        <h4 style={textStyle}>Regístrate como desarrollador freelancer en nuestra página y publica tu trabajo para que otros puedan contratarte.</h4>
           </Grid>
            
        </Grid>
       </section>

       <section style={thirdSectionStyle}>
        < Image src = 'https://cdn.discordapp.com/attachments/703461155401760819/961487114673979412/back_5_final_1.png' />
           
       </section>
    </Grid>
        </Fragment>
	);
};

export default Home;
