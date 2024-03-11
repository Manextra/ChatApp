import React from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material'
import { gray } from '../../Constants/Color'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon} from "@mui/icons-material" 
// import gray from '@mui/material/colors'


const Header = () => {
  const handleMobile = () =>{
    console.log("Mobile");
  };
  const openSearchbar=()=>{
    console.log("search bar");
  }
  const openNewGRP=()=>{
    console.log("new grp opened");
  }
  return (
   <>
   <Box sx={{flexGrow:1}} height={"4rem"}>
      <AppBar position='static' sx={{bgcolor:gray}}>
       
       <Toolbar>
       <Box sx={{display:{xs:"block",sm:"none"}}}>
        <IconButton color='inherit' onClick={handleMobile}>
          <MenuIcon/>
        </IconButton>
       </Box>
        <Typography variant ="h6" sx={{display:{xs:"block",sm:"block"}}}>LOMLER</Typography>
<Box sx={{flexGrow:"1"}}/>
  <Box>
  <IconButton color='inherit' size='large' onClick={openSearchbar}>
          <SearchIcon/>
        </IconButton>
        <IconButton color='inherit' size='large' onClick={openNewGRP}>
          <AddIcon/>
        </IconButton>
  </Box>
       </Toolbar>

        </AppBar>
   </Box>
   </>
  )
}

export default Header