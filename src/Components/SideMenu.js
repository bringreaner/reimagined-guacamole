import React from 'react';
import Button from '@material-ui/core/Button';

const sideMenuStyle = {
    textAlign: 'right',
    color: '#220000',
    marginRight: '5px'
}

export const SideMenu = props => (
    <div style={sideMenuStyle}>
        <p>Join my newsletter and get discounts</p>
        <Button variant="contained" color="primary">
        Subscribe
        </Button>

        <p>Want to read the next installment before it's released? Become a Beta Reader!</p>
        <Button variant="contained" color="primary">
        Apply
        </Button>

        <p>"Quote of Character" - Sol</p>

    </div>
)