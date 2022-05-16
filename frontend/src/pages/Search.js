import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  TextField,
} from "@mui/material";
//import Subnavbar from '../Search/components/Subnavbar'
import CardServices from "../components/Search/CardServices";
import { AppBar, Grid, Pagination, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import {Post_GetByName} from "../services/Post"
import { useParams } from "react-router-dom";
import { Post_GetAll } from "../services/Post"; //Obtener todos los post que tenemos

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

export default function CreateService() {
  const classes = useStyles();
  const background = {
    style: {
      backgroundColor: "#294C60",
      backgroundSize: "cover",
      minHeight: "100vh",
      paddingLeft: "20px",
    },
  };
  const textFieldStyle = { style: { color: "white" } };

  // - States - SE USAN ESTADOS PARA OBTENER LA INFORMACIÓN
  //----------Search state-------
  const [search, setSearch] = useState({
    inputSearch: ""
  });

  const onChangeSearch=(event)=>{

    setSearch({
      ...search,
      inputSearch : event.target.value
    });
  }
  //----------Category state-------
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //----------Price state-------
  //----------Submit state-------
  const onSubmitSearch=(event)=>{
    event.preventDefault();
    console.log(search.inputSearch)

  }

 //Aqui guardaremos todos los post
  const [posts, setPosts]= useState([]);
  //------Obtenemos los post y los mostramos en la consola.
useEffect(()=>{
  async function fetchData(){
    const data= await Post_GetAll();
    setPosts(data);
  }

  fetchData();
}, []);

  return (
    <Grid spacing={0} style={background.style}>
      <div>
        <form onSubmit={onSubmitSearch}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <TextField
                  id="inputSearch"
                  name="inputSearch"
                  InputLabelProps={textFieldStyle}
                  InputProps={textFieldStyle}
                  autoComplete="false"
                  label="Buscar"
                  fullWidth
                  value={search.inputSearch}
                  onChange={onChangeSearch}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  style={{
                    maxWidth: "10vh",
                    minWidth: "1vh",
                    color: "white",
                    backgroundColor: "#001B2E",
                  }}
                  size="large"
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
      <div id="resultLegend">
        <Typography variant="h4" style={{ padding: "10px", color: "white" }}>
          Resultados para: Diseño
        </Typography>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>

      </div>
      <div id="cardsServicesLayout">
        <Grid
          container
          spacing={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* AQUI REALIZO UN CICLO PARA PONER TODOS LOS POST EXISTENTES*/}
          {posts.map((post, index)=>(
          <Grid item key={index}>
          <CardServices id={post._id}/>
          </Grid>
          ))};

        </Grid>
      </div>
      <div id="paginationServices">
        <Pagination
          count={10}
          shape="rounded"
          classes={{ ul: classes.ul }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "50px",
            paddingBottom: "20px",
          }}
        ></Pagination>
      </div>
    </Grid>
  );
}
