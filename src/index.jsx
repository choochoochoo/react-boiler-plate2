import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './__data__/store.js'
import {
    Fines,
    Vehicles
} from './components'

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Vehicles}/>
                <Route exact path='/fines' component={Fines}/>
                <Route exact path='/vehicles' component={Vehicles}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)
