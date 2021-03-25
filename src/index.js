import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/index.css'
import Home from './pages/Home'
import Precios from './pages/Precios'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Home} />
      <Route exact path='/reservaciones' component={Precios} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
