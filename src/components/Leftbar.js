import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import styled from '@emotion/styled';
import { theme } from '../theme';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CameraIcon from '@mui/icons-material/Camera';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsIcon from '@mui/icons-material/Collections';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const UserContainer = styled(Container, theme) (({
  ...theme.myContainer,
 
  
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    backgroundColor: "white",
    border: "1px solid lightgray",
    
    
  },
  height: "120vh",
}))

const LeftBox = styled(Box,theme) (({
  ...theme.myLeftBar,
  marginBottom: theme.spacing(6),//default setting
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(6), //override on medium and large screens
  },
  [theme.breakpoints.between('sm', "md")]: {
    display: "flex",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },

  "& > svg": {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down('md')]: {
      color: "white",
      alignItems: "center",
    },
  },
  
  }
))

const LeftTypography = styled(Typography) (({
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    display: "none",
  },
}))

const Leftbar = () => {
  return (
    <UserContainer>
      <LeftBox>
        <HomeIcon />
        <LeftTypography>
          Homepage
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <PersonIcon />
        <LeftTypography>
          Friends
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <ListIcon />
        <LeftTypography>
          Lists
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <CameraIcon />
        <LeftTypography>
          Camera
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <PlayCircleOutlineIcon />
        <LeftTypography>
          Videos
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <AppsIcon />
        <LeftTypography>
          Apps
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <CollectionsIcon />
        <LeftTypography>
          Collections
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <StorefrontIcon />
        <LeftTypography>
          Market Place
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <SettingsIcon />
        <LeftTypography>
          Settings
        </LeftTypography>
      </LeftBox>
      <LeftBox>
        <LogoutIcon />
        <LeftTypography>
          Logout
        </LeftTypography>
      </LeftBox>
    </UserContainer>
  )
}

export default Leftbar
