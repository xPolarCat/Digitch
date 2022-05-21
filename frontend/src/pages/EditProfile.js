import React, { Component, Fragment, useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Switch,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonIcon from "@material-ui/icons/Person";
import BackgroundImage from "../resources/login-background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../resources/logo.png";
import Image from "mui-image";
import { useParams, useNavigate } from 'react-router';
import { User_GetOne, User_Update } from "../services/User";

//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
const EditProfile = () => {
  const {id} = useParams();
  let navigate = useNavigate();
  useEffect (() =>{
    async function fetchData(){
      const dataUser = await User_GetOne(id);
      console.log("Consulta por ID: ", dataUser);
      setUser(dataUser);
      setPass({confirmPassword: dataUser.password})
      setImage(dataUser.photo)
    }

    fetchData();
   }, []);


  //opacity: 0.7
  const backgroundStyle = {
    minHeight: "100vh",
    backgroundColor: "#282c34",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
  };
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    backgroundColor: "rgb(0, 27, 46, .95)",
    minWidth: "50vh",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "25px 0", backgroundColor: "#294C60" };
  const registerStyle = { margin: "5px" };
  const gridPaperStyle = { margin: "10px" };
  const loginTextStyle = { color: "white", textAlign: "center" };
  const textFieldStyle = { style: { color: "white" } };
  const switchStyle = { align: "right" };

  const [image, setImage] = useState(null);
  const [user, setUser] = useState({
    description: "",
    password: "",
    updated_at: new Date().toString(),
    photo: null
  });
  const [pass, setPass] = useState({confirmPassword: ""});

  const onChangeUser = (event) => {
    const {name, value} = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onChangePassword = (event) =>{
    setPass({
        ...pass,
        confirmPassword : event.target.value
    });
  }

  const onSubmitEdit= async (event)=>{
      if(user.password == pass.confirmPassword){
        event.preventDefault();
        console.log("Contraseñas correctas")
        console.log("info pa mandar", user)
        user.photo = image;
        const resp = await User_Update(id, user)
        console.log("info pa recibir",resp);

        navigate('/');
      }else{
        console.log("Contraseñas no correctas")

        event.preventDefault();
    }
  }
  const onImageChange = (event) => {
    console.log("selected file: ", event.target.files[0]);

    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setUser({
        ...user,
        photo: event.target.files[0],
      });
    }
  };
  return (
    // Los grids sirven para centrar mi login.
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={backgroundStyle}
    >
    <form onSubmit={onSubmitEdit}>
      <Grid style={gridPaperStyle} item xs={12}>
        <Paper elevation={10} style={paperStyle} sx={{ display: "flex" }}>
          <Grid align="center">
            <Image style={{ height: "50%", width: "50%" }} src={logo} />
            <h2 style={loginTextStyle}>Editar Perfil</h2>
          </Grid>

          <Grid container direction={"column"} spacing={5}>
            <br></br>
            <Grid container align="center" direction={"column"} spacing={2}>
              <Grid item>
                <img width="150px" src={image} />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ backgroundColor: "#294C60" }}
                >
                  Cambiar imagen
                  <input
                    type="file"
                    hidden
                    onChange={onImageChange}
                    accept="image/*"
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={textFieldStyle}
                label="Nueva contraseña"
                placeholder="Nueva contraseña"
                type="password"
                fullWidth
                required
                onChange={onChangeUser}
                value={user.password}
                name="password"
                id="password"

              />
            </Grid>
            <Grid item>
              <TextField
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={textFieldStyle}
                label="Confirmar contraseña"
                placeholder="Confirma tu contraseña"
                type="password"
                name= "confirmPassword"
                id= "confirmPassword"
                fullWidth
                required
                value={pass.confirmPassword}
                onChange={onChangePassword}
              />
            </Grid>
            <Grid item>
              <TextField
                multiline
                minRows={3}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={textFieldStyle}
                label="Descripción"
                placeholder="Descríbete"
                type="text"
                fullWidth
                required
                value={user.description}
                onChange={onChangeUser}
                name="description"
                id="description"

              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Editar
          </Button>
          {user.password != pass.confirmPassword || pass.confirmPassword == null ? (
          <div id="Error"style={{textAlign:"center", color: "red"}}>
              Las contraseñas no coinciden
          </div> ) : ""}
        </Paper>
      </Grid>
      </form>
    </Grid>
  );
};

export default EditProfile;
