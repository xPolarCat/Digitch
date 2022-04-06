import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const ColorStyle={backgroundColor:"#FFEFD3"}
    const imageStyle= { width:"150px"}
  return (
    <Box sx={{ flexGrow: 1}} style={ColorStyle}>
        <Toolbar>
        <img
        src="https://cdn.discordapp.com/attachments/930575800229576754/939289097531441192/digitch.png"
        style={imageStyle}
        />
        <Box sx={{ flexGrow: .40 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <FacebookIcon/>
          </Box>
        <Box sx={{ flexGrow: .05 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TwitterIcon/>
          </Box>
          <Box sx={{ flexGrow: .05 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <InstagramIcon/>
          </Box>
          <Box sx={{ flexGrow: .4 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <h6> Digitch © 2022</h6>
          </Box>
        </Toolbar>
  </Box>
  )
}
