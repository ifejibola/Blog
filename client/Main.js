import 'babel-polyfill'
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from './store';
//Routes
import MainRouter from './MainRouter'

// hydrate(
ReactDOM.render(
    <Provider store={store}>
        <Router>
            {renderRoutes(MainRouter)}
        </Router>
    </Provider>,
    document.getElementById('root')
);