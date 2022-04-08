import React, { Fragment } from 'react'
import { FormControl, TextField, Button} from '@mui/material'

export default function Review() {
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
        <Button variant="contained" style={{backgroundColor: "#001B2E"}}>Enviar</Button>
        </FormControl>
   </Fragment>
  )
}
