import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { install, ThemeProvider } from '@material-ui/styles';
import theme from '../themes/simple'
import { BrowserRouter} from "react-router-dom";
install();


const CommonLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
          {children}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default CommonLayout