import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home';

const App = (props) => (
  <Router>
	  <Route path='/' component={Home} />
  </Router>
)

export default App