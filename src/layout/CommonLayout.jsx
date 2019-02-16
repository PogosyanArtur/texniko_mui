import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { BrowserRouter as Router } from "react-router-dom";


const simpleTheme = createMuiTheme({
  palette: {
    primary: { main: "#2e375F" }, // Purple and green play nicely together.
    secondary: { main: deepOrange[500] }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
  props: {
    // Name of the component ⚛️
    MuiTab: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});



const CommonLayout = ({ children }) => {
  return (
    <MuiThemeProvider theme={simpleTheme}>
      <CssBaseline />
      <Router>
          {children}
      </Router>
    </MuiThemeProvider>
  )
}

export default CommonLayout