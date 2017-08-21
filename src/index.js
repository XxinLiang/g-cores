import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'normalize.css'
import './index.css'
import App from './Routes/App/main'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
    <Router>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('root'))
registerServiceWorker()
