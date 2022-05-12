import React, { Fragment, useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Rating,
  Grid,
  Box,
} from "@mui/material";

export default function Review() {
  const [value, setValue] = React.useState(2);
  const textFieldStyle = { style: { color: "white" } };

    //----------Search state-------
    const [rate, setRate] = useState({
      rating: ""
    });
  
    const onChangeRate=(event)=>{
      setRate({
        ...rate,
        rating : event.target.value
      });
    }

    const onSubmitRate=(event)=>{
      event.preventDefault();
      console.log(rate.rating)
    }

  return (
    <Fragment>
      <form onSubmit={onSubmitRate}>
        <FormControl fullWidth>
          <TextField
            id="outlined-multiline-static"
            label="Escribe tu comentario aquí"
            fullWidth
            multiline
            rows={3}
            sx={{ mb: 2 }}
            InputLabelProps={textFieldStyle}
            InputProps={textFieldStyle}
            value={rate.rating}
            onChange={onChangeRate}
            required
          />
          <Typography
            component="legend"
            style={{ color: "white", textAlign: "center" }}
          >
            Califica el servicio
          </Typography>
          <Grid style={{ float: "right" }}>
            <Box textAlign="center">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ mb: 2 }}
              />
            </Box>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#001B2E" }}
          >
            Enviar
          </Button>
        </FormControl>
      </form>
    </Fragment>
  );
}
