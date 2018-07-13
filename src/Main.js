import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './Components/HomePage/HomePage'
import { About } from './Components/About/About'

const Main = () => (
<Router>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
    </Switch> 
</Router>)

export default Main;
