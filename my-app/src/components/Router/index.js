import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../containers/Home';
import About from '../../containers/About';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
                {/* <Route path="/contact" component={}/> */}
            </Switch>
        )
    }
}
