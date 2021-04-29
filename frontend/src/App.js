import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Itineraries from './components/Itineraries'
import Error from './components/Error'

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} /> 
          <Route path="/itineraries/:id" component={Itineraries} />  
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path='/error' component={Error} />
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App