import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const navStyle= {
    backgroundColor: '#220000',
    color: '#fff',
}

export class NavBar extends React.Component {
    state = {
        value: 0,
    };
      
    handleChange = (event, value) => {
        event.preventDefault();
        this.setState({ value });
        console.log(value)
    };
      
    render() {      
        return (
            <div>
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor={"secondary"}
                        // textColor="secondary"
                        centered
                        style={navStyle}
                    >
                        <Tab label="Home" href='/' />
                        <Tab label="About" href='/about'/>
                        <Tab label="Books" />
                        <Tab label="Reviews" />
                    </Tabs>
                </Paper> 
            </div>
        )
    }
} 