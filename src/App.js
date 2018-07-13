import React, { Component } from 'react';
import { TopBanner, NavBar, Footer, SideMenu } from './Components/index';
import Grid from '@material-ui/core/Grid'
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Main from './Main'
import createHistory from "history/createBrowserHistory"

const history = createHistory()

// Get the current location.
const location = history.location

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: { 
        primary: {
            // light: '#6b352c',
            main: '#3d0c02',
            // dark: '#220000',
            // contrastText: '#fff',
          },
          secondary: {
            // light: '#ffffff',
            main: '#f2f0e6',
            // dark: '#bfbeb4',
            // contrastText: '#000',
          },
          
        },
          
  })

    console.log(this.props)
    return (
      <MuiThemeProvider theme={theme}>

          <TopBanner />
          <NavBar history={history}/>

          <Grid container spacing={24}>
            <Grid item md={10}>
              <Main />
            </Grid>
            <Grid item md={2} style={{alignContent: 'right'}}>
                <SideMenu />
            </Grid>
            
          </Grid>
          <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;