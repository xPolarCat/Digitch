import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import Cookie from 'cookie-universal';

const LoginStyle = {marginTop: '5px',marginBottom: "5px", marginLeft:"0px", marginRight:"10px", color: 'white', fontSize:"12.5px"};

const cookies = Cookie();
const user_id = cookies.get('user_id');

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFC49B",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height:"48px",
  width:"300px",
  borderBottomLeftRadius: "3px",
  borderTopLeftRadius: "3px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },

  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
//150px
  const imageStyle= { width:"12.5vw", marginTop: "12px"}

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  const ColorStyle= {backgroundColor:"#001B2E", }
  const ColorStyle2= {backgroundColor:"#294C60", width:"9vw", fontSize:"11px"}
  const ColorStyle3= {backgroundColor:"#ADB6C4", height:"55px"}
  const ColorStyle4= {color:"#EDEDED"}

//funciones para hover
function changeFontSize_login(e) {
    e.target.style.color = '#DBDBDB';
    e.target.style.textDecoration = 'none';

}

function returnFontSize_login(e) {
    e.target.style.color = '#FFFFFF';
  
}

  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" style={ColorStyle} >
        <Toolbar>
          <a href="/">
          <img style={imageStyle}
          src="https://cdn.discordapp.com/attachments/930575800229576754/939289332777386004/digitch.whitelogosd.png"
          />
          </a>
          
          <Box sx={{ flexGrow: .4 }} />
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <h6 style={ColorStyle4}>VENDE TUS SERVICIOS</h6>
          </Box> */}
          <Box sx={{ flexGrow: .8 }} />
          
          { user_id ?
          <IconButton 
              style = {{ marginRight: "10px"}}
              size="large"
              aria-label="Búsqueda"
              color="inherit"
              href="/search"
            >
                <SearchIcon />
          </IconButton>

          : ""
          }

          { user_id ? 
          <IconButton 
              style = {{marginRight: "10px"}}
              size="large"
              aria-label="Crear servicio"
              color="inherit"
              href="/createService"
            >
                <AddCircleIcon />
          </IconButton>
          : ""
          }

          {user_id ?
                    <Button href="/UserProfile">
                    <Avatar>
        
                    </Avatar>
                  </Button>
          : ""}

          {!user_id ?
          <Box sx={{ display:'flex'}}>
            
          <Link onMouseOver={changeFontSize_login} onMouseLeave={returnFontSize_login} href="/login" style={LoginStyle}>
                            Iniciar sesión
                    </Link>
          </Box>
          : "" }
          <Box sx={{ flexGrow: .05 }} />
          <Box sx={{ display: 'flex'}}>
          
          {!user_id ?
          <Button href="/register" variant="contained" style={ColorStyle2}>Regístrate</Button>
          : ""}
          
          {user_id ?
          <IconButton 
              style = {{marginRight: "10px"}}
              size="large"
              aria-label="Logout"
              color="inherit"
              href="/"
            >
                <LogoutIcon />
          </IconButton>
          : ""
          }

          </Box>
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

