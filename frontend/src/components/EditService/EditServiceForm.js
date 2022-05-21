import { Container, FormControl, FormLabel, TextField, Select, MenuItem, IconButton, Box, Button, Grid, Typography, Divider } from '@mui/material'
import React, { Fragment, useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import BackgroundImage from '../../resources/login-background.jpg';
import { Post_GetById } from '../../services/Post';
import { useParams } from 'react-router';
import { Price_GetById, Price_GetByPost, Price_Update, Price_GetByPostAll } from '../../services/Price';
import { Cat_GetAll, Cat_GetOne } from '../../services/Category';
import {Price_Register} from '../../services/Price';
import {Post_Update} from '../../services/Post';
import { useNavigate } from 'react-router';

export default function EditServiceForm() {
  let navigate = useNavigate();
  const textFieldStyle = { style: { color: "white" } };
  const styles = { helper: { color: "grey" } };
  const dividerStyle = { backgroundColor: "white" };
  const {id} = useParams();

  const [categoryServ, setCat] = useState({_id: ""});
  const [categories, setCats] = useState([]);

  useEffect (() =>{
    async function fetchData(){
      const dataPost = await Post_GetById(id);
      console.log("Consulta por ID: ", dataPost);
      setService(dataPost);
      setImage(dataPost.images);
      console.log(dataPost._category);
      const dataAllCategory = await Cat_GetAll() //trae todas las categorias
      setCats(dataAllCategory);

      const dataCategory = await Cat_GetOne(dataPost._category); //trae id
      console.log("trae gcat get one", dataCategory._id);
      setCat({_id: dataCategory._id});

      const dataPriceList = await Price_GetByPostAll(dataPost._id)
      console.log(dataPriceList)
      setPrice({
        _id: dataPriceList[0]._id,
        name: dataPriceList[0].name,
        description: dataPriceList[0].description,
        price: dataPriceList[0].price
      })
      setPrice2({
        _id: dataPriceList[1]._id,
        name: dataPriceList[1].name,
        description: dataPriceList[1].description,
        price: dataPriceList[1].price
      })
      setPrice3({
        _id: dataPriceList[2]._id,
        name: dataPriceList[2].name,
        description: dataPriceList[2].description,
        price: dataPriceList[2].price
      })
    }

    fetchData();
   }, []);

   console.log("se setea", categoryServ._id)

   const [image, setImage] = useState(null)

   const onImageChange = (event) => {
    console.log("selected file: ", event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      //setImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      setService({
        ...service,
        images: event.target.files[0],
      });
    }
  }



  const handleChange = (event) => {
    console.log("lo que se acaba de setear" , event.target.value);

    setCat(event.target.value);

    setService({
      ...service,
      _category: event.target.value,
    });
  };

  // - States - SE USAN ESTADOS PARA OBTENER LA INFORMACIÓN
  const [price, setPrice] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [price2, setPrice2] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [price3, setPrice3] = useState({
    name: "",
    price: "",
    description: "",
  });

  const onChangePrices = (event) => {
    const { name, value } = event.target;

    if (name === "price") {
      const re = new RegExp("^[0-9\b]+$");

      if (re.test(event.target.value)) {

        setPrice({
          ...price,
          [name]: value,
        });
      }else{
       
      }
    } else {
      setPrice({
        ...price,
        [name]: value,
      });
    }
  };
  const onChangePrices2 = (event) => {
    const { name, value } = event.target;

    if (name === "price") {
      const re = new RegExp("^[0-9\b]+$");

      if (re.test(event.target.value)) {

        setPrice2({
          ...price2,
          [name]: value,
        });
      }else{
       
      }
    } else {
      setPrice2({
        ...price2,
        [name]: value,
      });
    }
  };
  const onChangePrices3 = (event) => {
    const { name, value } = event.target;

    if (name === "price") {
      const re = new RegExp("^[0-9\b]+$");

      if (re.test(event.target.value)) {

        setPrice3({
          ...price3,
          [name]: value,
        });
      }else{
       
      }
    } else {
      setPrice3({
        ...price3,
        [name]: value,
      });
    }
  };
  const [service, setService] = useState({
    content:"",
    name: "",
    _category: "",
    _id: ""
  });
  /*const [service, setService] = useState({
    name: "",
    content: "",
    images: "0",
    user: 1,
    category: 1,
    created_at: new Date().toString(),
  });*/

  const onChangeTitulo = (event) => {
    setService({
      ...service,
      name: event.target.value,
    });
  };
  const onChangeDesc = (event) => {
    setService({
      ...service,
      content: event.target.value,
    });
  };
  //----------Submit state-------
  const onSubmitEditService = async (event) => {
    event.preventDefault();
   
    //service._user = '62819a5f9eb9bc87516154a9';
    service._category = categoryServ._id;
    console.log("post form ", service);
    const obj = await Post_Update(id, service);

    console.log("my object0:", obj);
  
  console.log("paquete 1", price);
  console.log("paquete 2", price2);
  console.log("paquete 3", price3); 
    
     
   await Price_Update(price._id, price);
   await Price_Update(price2._id, price2);
   await Price_Update(price3._id, price3);

   navigate('/search');

  };

  return (
        <Fragment>
          <Container>
            <form onSubmit={onSubmitEditService}>
              <Typography variant="h4" style={textFieldStyle.style} sx={{ my: 1 }}>
                Edición de servicio
              </Typography>
              <Divider style={dividerStyle} />
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel
                  id="labelTituloService"
                  style={textFieldStyle.style}
                  sx={{ my: 1 }}
                >
                  Título
                </FormLabel>
                <TextField
                  id="inputTitulo"
                  name="inputTitulo"
                  InputLabelProps={textFieldStyle}
                  InputProps={textFieldStyle}
                  autoComplete="off"
                  required
                  value={service.name}
                  onChange={onChangeTitulo}
                />
              </FormControl>
              {/* <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel id="labelTituloService" style={textFieldStyle.style}>
                  {" "}
                  Categoría
                </FormLabel>
                <Box sx={{ display: "flex" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="inputSelect"
                    name="inputSelect"
                    value={categoryServ.name}
                    onChange={handleChange}
                    sx={{ flexGrow: 1, color: "#ffffff" }}
                    required
                  >
                     {categories.map((cat, index)=>(
                    <MenuItem key={index} value={cat._id}>{cat.name}</MenuItem>
                    ))}
                  </Select>
                </Box>
              </FormControl> */}
              <FormControl fullWidth sx={{ my: 1 }}>
                <FormLabel id="labelTituloService" style={textFieldStyle.style}>
                  Descripción del servicio
                </FormLabel>
                <TextField
                  id="inputDesc"
                  name="inputDesc"
                  multiline
                  rows={3}
                  helperText={service.content.length < 50 ? "Se necesitan 50 caracteres mínimos": ""}
                  FormHelperTextProps={{ style: styles.helper }}
                  InputLabelProps={textFieldStyle}
                  InputProps={textFieldStyle}
                  autoComplete="off"
                  onChange={onChangeDesc}
                  value={service.content}
                  required
                />
              </FormControl>

              <Typography
                variant="h5"
                style={textFieldStyle.style}
                sx={{ my: 1 }}
                textAlign="center"
              >
                Paquetes de precios
              </Typography>
              <Divider style={{ backgroundColor: "white" }} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelNomb1"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Nombre paquete 1
                      </FormLabel>
                      <TextField
                        id="inputNombP1"
                        name="name"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices}
                        required
                        value={price.name}
                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Descripcion paquete 1
                      </FormLabel>
                      <TextField
                        id="inputDescP1"
                        name="description"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices}
                        required
                        value={price.description}

                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Precio paquete 1
                      </FormLabel>
                      <TextField
                        id="inputPrecioP1"
                        name="price"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices}
                        required
                        value={price.price}

                      />
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Nombre paquete 2
                      </FormLabel>
                      <TextField
                        id="inputNombP2"
                        name="name"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices2}
                        required
                        value={price2.name}

                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Descripcion paquete 2
                      </FormLabel>
                      <TextField
                        id="inputDescP2"
                        name="description"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        required
                        onChange={onChangePrices2}
                        value={price2.description}

                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Precio paquete 2
                      </FormLabel>
                      <TextField
                        id="inputPrecioP2"
                        name="price"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        required
                        onChange={onChangePrices2}
                        value={price2.price}

                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Nombre paquete 3
                      </FormLabel>
                      <TextField
                        id="inputNombP3"
                        name="name"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices3}
                        required
                        value={price3.name}

                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Descripcion paquete 3
                      </FormLabel>
                      <TextField
                        id="inputDescP3"
                        name="description"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        onChange={onChangePrices3}
                        required
                        value={price3.description}

                      />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <FormLabel
                        id="labelTituloService"
                        style={textFieldStyle.style}
                        sx={{ my: 1 }}
                      >
                        Precio paquete 3
                      </FormLabel>
                      <TextField
                        id="inputPrecioP3"
                        name="price"
                        InputLabelProps={textFieldStyle}
                        InputProps={textFieldStyle}
                        autoComplete="off"
                        required
                        onChange={onChangePrices3}
                        value={price3.price}

                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
              <Grid container fullWidth>
              <FormControl style={{display: "flex", margin: "auto" }}>
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
              </FormControl>
              </Grid>
              <Grid item fullWidth sx={{my:1}} >
                <img style={{display: "flex", margin: "auto" }} width="250px" src={image}/>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  my: 1,
                  backgroundColor: "#294C60",
                  color: "#ffffff",
                  float: "right",
                  marginTop: "10px"
                }}
                endIcon={<SendIcon />}
                fullWidth
                type="Submit"
              >
                Enviar
              </Button>
            </form>
          </Container>
        </Fragment>

  );
}