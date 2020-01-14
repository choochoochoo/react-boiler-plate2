import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
    Fines,
    Vehicles
} from './components'

render(
    <Router>
        <Switch>
            <Route exact path='/' component={Vehicles}/>
            <Route exact path='/fines' component={Fines}/>
            <Route exact path='/vehicles' component={Vehicles}/>
        </Switch>
    </Router>,
    document.getElementById('root')
)
