import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import Post from './Post'

const UserContainer = styled(Container, theme) (({
  ...theme.myContainer,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
  },
}))
const Feed = () => {
  return (
    <UserContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      
    </UserContainer>
  )
}

export default Feed