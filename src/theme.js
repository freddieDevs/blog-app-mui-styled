
import { createTheme } from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";


export const theme = createTheme ({
  
 
  palette: {
    primary: {
      main: blue[500],
      light: blue[300]
    },

    secondary: {
      main: red[600],
    },

    otherColor: {
      main: "#999",
    }
    
  },

  myButton: {
    backgroundColor: green[600],
    color: "white",
    borderRadius: "8px",
  },

  myUserBox: {
    display: "flex",
    width: "100%",
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: grey[300],
    color: 'text.primary',
    borderRadius: "2px",
    padding:"3",
    margin: '5px'
  },

  myToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  mySearchbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: blue[400],
    "&:hover": {
      backgroundColor:  blue[600],
    },
    borderRadius: "4px",
    width: "40%"
  },

  myInputBase: {
    color: "white",
    marginLeft: "5px"
  },
  
  myIcons: {
    display: "flex",
    alignItems: "center",
    
  },

  myBadges: {
    marginRight: "10px",
  },

  myContainer: {
    paddingTop: "100px",
    position: "sticky",
    top: "0",
  },

  myLeftBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
    cursor: "pointer",
    color: grey[700],
  },
});




// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//     orientation: {
//       portrait: '@media (orientation: portrait)',
//       landscape: '@media (orientation: landscape)',
//     },
//   },
// });

// const useStyles = styled((theme) => ({
//   // styles for mobile devices in portrait orientation
//   mobilePortrait: {
//     [theme.breakpoints.only('xs')]: {
//       // your styles here
//     },
//     [theme.breakpoints.up('sm')]: {
//       // your styles here
//     },
//     [theme.breakpoints.up('md')]: {
//       // your styles here
//     },
//     [theme.breakpoints.up('lg')]: {
//       // your styles here
//     },
//     [theme.breakpoints.up('xl')]: {
//       // your styles here
//     },
//   },
// }));
