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

const LoginStyle = {margin: '5px', color: 'white'};

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

  const imageStyle= { width:"150px"}

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

  const ColorStyle= {backgroundColor:"#001B2E"}
  const ColorStyle2= {backgroundColor:"#294C60"}
  const ColorStyle3= {backgroundColor:"#ADB6C4", height:"55px"}
  const ColorStyle4= {color:"#EDEDED"}
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={ColorStyle}>
        <Toolbar>
          <img style={imageStyle}
          src="https://cdn.discordapp.com/attachments/930575800229576754/939289332777386004/digitch.whitelogosd.png"
          />
          <Search>
            <StyledInputBase
              placeholder="Busca un servicio"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <SearchIcon/>
            </IconButton>
          </Search>
          <Box sx={{ flexGrow: .4 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <h6 style={ColorStyle4}>VENDE TUS SERVICIOS</h6>
          </Box>
          <Box sx={{ flexGrow: .8 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link href="/login" style={LoginStyle}>
                            Inicia Sesion
                    </Link>
          </Box>
          <Box sx={{ flexGrow: .05 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button href="/register" variant="contained" style={ColorStyle2}>Regístrate</Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

