import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import styled from '@emotion/styled'

const UserContainer = styled(Container, theme) (({
  ...theme.myContainer
}))

const UserTypography = styled(Typography, theme) (({
  fontSize: "18px",
  fontWeight: 500,
  color: theme.palette.primary.light,

}))

const UserLink = styled(Link,theme) (({
  marginRight: theme.spacing(4),
  fontSize: "16px",
}))
const Rightbar = () => {
  return (
    <UserContainer>
      <UserTypography gutterBottom>
        Online friends
      </UserTypography>
      <AvatarGroup max={4} style={{marginBottom: "20px"}}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <UserTypography gutterBottom>
        Gallery
      </UserTypography>
      <ImageList
        rowHeight={100} cols={2} style={{marginBottom: 20}}
      >
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format' alt='breakfast'/>
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt='burger'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format' alt='camera'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt='honey'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format' alt='red-mushroom'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format' alt='basketball'/>
        </ImageListItem>
      </ImageList>
      <UserTypography gutterBottom>
        Categories
      </UserTypography>
      <UserLink href="#" variant='body2' >
        Sport
      </UserLink>
      <UserLink href="#" variant='body2' >
        Food
      </UserLink>
      <Divider flexItem style={{marginBottom: 10, border: "none"}}/>
      <UserLink href="#" variant='body2' >
        Movies
      </UserLink>
      <UserLink href="#" variant='body2' >
        Science
      </UserLink>
      <Divider flexItem style={{marginBottom: 10, border: "none" }}/>
      <UserLink href="#" variant='body2' >
        Music
      </UserLink>
      <UserLink href="#" variant='body2' >
        Life
      </UserLink>
    </UserContainer>
  )
}

export default Rightbar