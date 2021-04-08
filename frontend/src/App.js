import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cities" component={Cities} />          
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App