import React from 'react';

import Navbar from './components/Navbar';
import { Grid } from '@mui/material';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import styled from '@emotion/styled';
import { theme } from './theme';
import Add from './components/Add';


// const UserBox = styled(Box, theme) (({
//   ...theme.myUserBox
// }))
// const UserButton = styled(Button, theme) (({  
//   ...theme.myButton   
// }))

const RightGrid = styled(Grid,theme) (({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const App = () => {
  return (
    <div>
      <Navbar />  
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <RightGrid item sm={3} xs={0}>
          <Rightbar />
        </RightGrid> 
      </Grid>
      <Add />
    </div>    
      
  )
  
};

export default App;
