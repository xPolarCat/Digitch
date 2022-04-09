import { Divider, Container, Card } from '@mui/material'
import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star';

export default function CardReview() {
    const textFieldStyle = {style: {color : 'white'} }
    const dividerStyle= {backgroundColor: 'white'}
  return (
    <Fragment>
 
        <Container style={{padding: "0px", marginBottom: "15px", backgroundColor: "#001B2E", padding: "15px", borderRadius: "10px"}}>
            <Typography variant="h6" style={{color: "white"}}>
                Mariana Solis
            </Typography>
            <Typography  style={{color: "white"}}>
                Clasificación: 4 <StarIcon style={{verticalAlign:"middle", color: "orange"}}/>
            </Typography>
            <Typography style={{color: "white"}}>
                Impresionante e increible. Es muy profesional y es muy facil hablar con el. Te hace saber como si fueras competente con la tecnologia. Esta desarolladora web supero mis expectativas.
            </Typography>
        </Container>
    </Fragment>
  )
}
