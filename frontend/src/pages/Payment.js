import React,{ Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Typography, Container}  from '@material-ui/core'
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useParams } from "react-router-dom";
import {Price_GetById} from "../services/Price"
import {Post_GetById} from "../services/Post"
import BackgroundImage from '../resources/lap.png';
import Modal from "@mui/material/Modal";
import { Purchase_Register } from "../services/Purchase";
import { useNavigate } from 'react-router';
import Cookie from 'cookie-universal';

const GridPayStyle = {
  backgroundColor: "rgb(0,27,46, 0.9)",
  maxHeight: "30vh",
  minHeight: "30vh",
  minWidth: "30vh",
  borderRadius: "10px",
  marginBottom: "0px",
};
const GridStyle = {
  backgroundColor: "rgb(0,27,46, 0.9)",
  minHeight: "55vh",
  minWidth: "30vh",
  borderRadius: "10px",
};
const BorderStyle = {
  borderBottom: "2px solid white",
  paddingTop: "20px"
};
const IconStyle = {
  width: "100px",
  color: "white",
};
const IconStyle2 = {
  color: "white",
};
const TextStyle = {
  color: "white",
  textAlign: "center",
};
const PaypalStyle = {
  color: "white",
  backgroundColor: "#294C60",
  marginTop: "-20px",
};
const theme = createTheme({
  spacing: 4,
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Spacing = { 
  margin: "50px" 
};
const ImagesStyle = {
  width: "150px",
  height: "80px",
  borderRadius: "10px",
};
const PaddingStyle = {
  padding: 10,
  width: '80%'
};
const buyButtonStyle = {
  align: "right",
  marginTop: "1vh",
  backgroundColor: "#294C60",
};
const background = {
  style: {
    backgroundColor: "#294C60",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
};


export default function Payment() {

  let navigate = useNavigate();
  const params = useParams();
  const [oPurchase, setPurchase] = useState({
    _user: "",
    _post: "",
    cost: 0
  })
  const [open, setOpen] = useState(false);

  const handleOpen = async() => {
    

    console.log("Purchase ", oPurchase);
    const obj = await Purchase_Register(oPurchase);
    console.log("Purchase out", obj)
    //if(obj != null)
     // setOpen(true);
     navigate('/');
  }
  const handleClose = () => setOpen(false);

  //Aqui guardaremos info del paquete
  const [price, setPrice]= useState([]);
  //Aqui guardaremos info del post
  const [post, setPost]= useState([]);
  const [total, setTotal] = useState();

 useEffect(()=>{
   async function fetchData(){
    
  //Tuve que convertir el objeto a string
  const myJSON = JSON.stringify(params.id);

  //Despues separarlo para que solo me quedara el numero y no exista un error
  const idFinal= myJSON.slice(2,26);
  //Me traigo la info de ese price con ese id
  const data= await Price_GetById(idFinal);
  setPrice(data);
  console.log(data);

  setTotal(data.price+40);
  //Me traigo la info de el post con ese paquete de precio
  const data2= await Post_GetById(data._post);
  setPost(data2);
  console.log("post", post)
  console.log("to",total)

  const cookies = Cookie();
  const cookieTemp = cookies.get('user_id'); 
  console.log("cookie ",cookieTemp)
  console.log("idFinal ",idFinal)
  console.log("Total ",total)

  
  setPurchase({
    _user : cookieTemp,
    _post: data._post,
    cost: (data.price+40)
  });

  console.log(oPurchase)

  }

  
   fetchData();

  }, []);


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      height='90vh'
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: "30px" }}
    >
    
      <Container style={{ paddingTop: "30px" }}>
        <Grid item xs={12} style={GridStyle}>
          <Container style={BorderStyle}>       
            <h1 style={TextStyle}>{post.name}</h1>
          </Container>
          <Container maxWidth="sm" style={BorderStyle}>
            <table>
              <tbody>
                <tr>
                  <td style={IconStyle2}>
                    <CheckCircleOutlineTwoToneIcon />
                  </td>
                  <td>
                    <p style={TextStyle}>{price.description}</p>
                  </td>
                </tr>
                <tr>
                  <td style={IconStyle2}>
                    <WorkIcon />
                  </td>
                  <td>
                    <p style={TextStyle}>{price.name}</p>
                  </td>
                  <td width="100px"></td>
                  <td>
                    <p style={TextStyle}>${price.price}.00 MXN</p>
                  </td>
                </tr>
                <tr>
                  <td style={IconStyle2}>
                    <AttachMoneyIcon />
                  </td>
                  <td>
                    <p style={TextStyle}>Cargos por servicio.</p>
                  </td>
                  <td width="100px"></td>
                  <td>
                    <p style={TextStyle}>$ 40.00 MXN</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
          <Container maxWidth="sm">
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <p style={TextStyle}>Total del pedido.</p>
                  </td>
                  <td width="100px"></td>
                  <td>
                    <p style={TextStyle}>${total} MXN</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>

          <Container style={{ paddingTop: "30px" , paddingBottom: "30px"}}>
            <Grid container>
              <Grid item xs={12}>
                <Container maxWidth="sm">
                  <Toolbar>
                    <CreditScoreIcon style={IconStyle} />
                    <Box sx={{ flexGrow: 0.3 }} />
                    <h1 style={TextStyle}>Opción de Pago</h1>
                  </Toolbar>
                </Container>
                <Box textAlign="center">
                  <p style={TextStyle}>
                    ¡Hola! Gracias por elegirnos, a continuacion realizaras el pago
                    mediante PayPal.
                  </p>
                  <p style={TextStyle}>
                    {" "}
                    Da click al boton, ingresa a tu cuenta y paga el monto acordado
                    en la informacion del servicio.
                  </p>
                </Box>
                <Box sx={{ flexGrow: 0.3, p: 2 }} />
                <Box textAlign="center">
                  <Button variant="contained" style={PaypalStyle} onClick={handleOpen} >
                    PAYPAL
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>


        </Grid>
      </Container>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¡Pago hecho!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Su pago ha sido exitoso
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
}
