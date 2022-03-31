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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35ch',
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
  const Categories={color:"#636363"}
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={ColorStyle}>
        <Toolbar>
          <img style={imageStyle}
          src="https://cdn.discordapp.com/attachments/930575800229576754/939289332777386004/digitch.whitelogosd.png"
          />
          <Search>
            <StyledInputBase
              placeholder="Buscar un servicio"
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
            <h6>VENDE TUS SERVICIOS</h6>
          </Box>
          <Box sx={{ flexGrow: .8 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <h6>INICIA SESIÓN</h6>
          </Box>
          <Box sx={{ flexGrow: .05 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" style={ColorStyle2}>Regístrate</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="static" style={ColorStyle3}>
        <Toolbar>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Gráficas y Diseño</Button>
          </Box>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Animación</Button>
          </Box>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Video</Button>
          </Box>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Programación</Button>
          </Box>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Producción Audiovisual</Button>
          </Box>
          <Box sx={{ flexGrow: .15 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="text" style={Categories}>Base de Datos</Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

