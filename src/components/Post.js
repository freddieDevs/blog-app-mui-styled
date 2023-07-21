
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import styled from '@emotion/styled'

const UserButton = styled(Button, theme) (({
  color: theme.palette.primary.main,
  size: "small",
}))

const UserCard = styled(Card, theme) (({
  marginBottom: theme.spacing(.5), 
}))

const UserCardMedia = styled(CardMedia,theme) (({
  height: "140",
  [theme.breakpoints.up('sm')]: {
    height: "250",
  },
  
}))
const Post = () => {
  return (
    <UserCard >
      <CardActionArea>
        <UserCardMedia 
          component="img"
          alt="green iguana"
          
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first Post
          </Typography>
          <Typography variant="body">
            gkkjdhfhhjakhfhrynfcnvbmcksjjhhfhajalajahhgdgfhjaka
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <UserButton>share</UserButton>
        <UserButton>Learn More</UserButton>
      </CardActions>
    </UserCard>
  )
}

export default Post

