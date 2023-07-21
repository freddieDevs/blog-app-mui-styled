
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../theme';
import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CancelIcon from '@mui/icons-material/Cancel';

const UserToolbar= styled(Toolbar, theme) (({  
  ...theme.myToolbar   
}))

const UserBox = styled(Box,theme) (({
  ...theme.mySearchbar
}))

const UserInputBase = styled(InputBase,theme) (({
  ...theme.myInputBase
}))

const IconBox = styled(Box,theme) (({
  ...theme.myIcons
}))

const IconBadge = styled(Badge,theme) (({
  ...theme.myBadges
}))


const Navbar = () => {

  const [searchBoxVisible, setSearchBoxvisible] = useState(false);  
  return (
    

    
    <AppBar position='fixed'>
      <UserToolbar>
        <Typography 
        variant="h6"
        sx={{display:{xs: 'none', sm: "block"}}}
        >
          _frexie devs
        </Typography>
        <Typography 
        variant="h6"
        sx={{display:{xs: 'block', sm:"none"}}}
        >
          _frexie 
        </Typography>
        <UserBox
        sx={{display:{sm: 'flex', xs: searchBoxVisible ? "flex": "none"}, width:{xs: "60%"}}}                
        >
          <SearchIcon 
          
          /> 
          <UserInputBase placeholder='Search...'/>
          <CancelIcon
            onClick={()=> setSearchBoxvisible((prevVisible) => !prevVisible)}
            sx={{display:{sm: 'none', xs: searchBoxVisible ? "flex": "none"}}} 
          />
        </UserBox>
        <IconBox
        
        >
          <SearchIcon 
          sx={{display:{xs: searchBoxVisible ? "none": "flex", sm: "none"}}}
          onClick={()=> setSearchBoxvisible((prevVisible) => !prevVisible)}                   
          /> 
          <IconBadge
          badgeContent={4}
          color= "secondary"
          sx={{display:{sm: 'flex', xs: searchBoxVisible ? "none": "flex"}}} 
          >
            <MailIcon />
          </IconBadge>
          <IconBadge
          badgeContent={9}
          color= "secondary"
          sx={{display:{sm: 'flex', xs: searchBoxVisible ? "none": "flex"}}} 
          >
            <NotificationsIcon />
          </IconBadge>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </IconBox>
      </UserToolbar>
    </AppBar>
    
  )
}

export default Navbar