import React from 'react';
import Grid from '@material-ui/core/Grid'
import Background from '../imgs/synp.JPG'
import './NewBook.css'

export const NewBook = props => (
    <div>

        <h2 style={{color: '#3d0c02'}}>Welcome to the Gardens of Edimum!</h2>
        <br />

        <Grid container spacing={24}>

            <Grid item md={7} style={{float: "left", zIndex:'10'}}>
                    <img style= {{width: '95%', padding: '5px', border:'10px double #220000'}} src={require("../imgs/63.JPG")} alt="Badass pic of new book" />
                    {/* </div> */}
                </Grid>
                <Grid item md={5} style={{backgroundImage: "url(" + Background + ")"}}>
                    <div align="left" style={{display: 'inline-block', fontWeight: 'bold', color: '#bfbeb4'}}>
                        <h3 style={{textAlign: 'center'}}>Synopsis</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                
            </Grid>
        </Grid>
    </div>
)