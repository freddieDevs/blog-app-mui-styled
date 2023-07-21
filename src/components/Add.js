import {  Box, Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Alert, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { grey } from '@mui/material/colors';

const UserFab = styled(Fab,theme) (({
  color: theme.palette.primary.main,
  backgroundColor: grey[200],
  
  position: "fixed",
  bottom: 20,
  right: 20,
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent',
    
  }
  

}))

const UserContainer = styled(Container,theme) (({
  width: 500,
  height: 550,
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: "12px",
  padding: "20px",
  margin: "auto",
  [theme.breakpoints.down('sm')]: {
    width: "75vw",
    height: "50%vh",
    left: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  // [theme.breakpoints.between('md', 'sm')]: {
    
  //   height: "50vh",
    
  // }
}))

const UserTextField = styled(TextField,theme) (({
  width: "100%",
  marginBottom: "10px"
}))

const choice = [
  {
    value: "public",
    label: "Public",
  },
  {
    value: "private",
    label: "Private",
  },
  {
    value: "unlisted",
    label: "Unlisted",
  },
  
];

const CustomAlert = forwardRef(function CustomAlert(props,ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />
})

const Add = () => {
  // const [state, setState] = useState ({
  //   open: false,
  //   alert: false,
  // })
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  // const handleClose = () => setState(prevState =>({...prevState, open: false}))
  const [alert, setAlert] = useState(false);
  const handleAlertClose = (event,reason) => {
   if (reason === 'clickaway') {
    return;
   }
    setAlert(false);
    // setState(prevState =>({...prevState, open: false}))
  };
  return (
    <>
      <Tooltip
      title= "Add a post"
      aria-label='add'      
      onClick={()=> setOpen(true)}
      // onClick={() => setState(prevState =>({...prevState, open: true}))}
      >
        <UserFab >
          <AddIcon />
        </UserFab>
        
      </Tooltip>
      <Modal
      open={open}
      onClose={handleClose}
      >
       <UserContainer>
          <Box
          component="form"
          autoComplete='off'
          >
            <div>
              <UserTextField id='standard-basic' label="Title" variant='standard' size='small'/>
              <UserTextField
              id='outlined-multiline-fexible' 
              placeholder="Tell your story" 
              variant='filled' 
              multiline 
              size='small' 
              maxRows={7}/>
            </div>
            <div>
              
              <TextField
                id="filled-select-choice"
                select
                label="Visibility"
                defaultValue="public"
                helperText="Privacy"
                variant="filled"
              >
                {choice.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div style={{marginTop:"10px"}}>
              <FormLabel 
              component="legend"
              >
                Who can comment?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel 
                value="Everybody" control={<Radio size= "small" />} label="Everybody"
                />
                <FormControlLabel 
                value="My Friends" control={<Radio size= "small" />} label="My Friends"
                />
                <FormControlLabel 
                value="Nobody" control={<Radio size= "small" />} label="Nobody"
                />
                <FormControlLabel 
                value="Custom" control={<Radio size= "small" />} label="Custom (premium)" disabled
                />
              </RadioGroup>
            </div>
            <div style={{marginTop:"10px"}}>
              <Button variant='outlined' color="primary" size='small' style={{ marginRight: 20}}
              onClick={() => setAlert(true)}
              >
                Create
              </Button>
              <Button variant='outlined' color="secondary" size="small" onClick={handleClose}
              
              >
                Cancel
              </Button>
            </div>
          </Box>
      </UserContainer> 
      </Modal> 
      <Snackbar 
      open={alert}
      autoHideDuration={3000}
      onClose={handleAlertClose}
      >
        <CustomAlert severity='info'
        onClose={handleAlertClose}
        >
          Your story has been updated!
        </CustomAlert>
      </Snackbar>
    </>
  )
}

export default Add