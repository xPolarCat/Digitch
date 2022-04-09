import React, { Fragment } from 'react'
import { FormControl, TextField, Button, Typography, Rating, Grid, Box} from '@mui/material'

export default function Review() {
  const [value, setValue] = React.useState(2);
  const textFieldStyle = {style: {color : 'white'} }

  return (
   <Fragment>
       <FormControl fullWidth>
        <TextField
          id="outlined-multiline-static"
          label="Escribe tu comentario aquí"
          fullWidth
          multiline
          rows={3}
          sx={{mb: 2}}
          InputLabelProps= {textFieldStyle}
          InputProps={textFieldStyle}
        />
        <Typography component="legend" style={{color: "white", textAlign: "center"}}>Califica el servicio</Typography>
        <Grid style={{float: "right"}}>
          <Box textAlign="center">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{mb: 2}}
          />
          </Box>
        </Grid>
        <Button variant="contained" style={{backgroundColor: "#001B2E"}}>Enviar</Button>
        </FormControl>
   </Fragment>
  )
}
