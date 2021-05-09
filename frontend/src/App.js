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

import {connect} from "react-redux"
import authActions from './redux/actions/authActions'

class App extends React.Component {
  render(){
    if (!this.props.userLogged && localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userForced = {
        token: localStorage.getItem('token'),
        ...userData
      }

      this.props.logInForced(userForced)
    }

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

const mapStateToProps = state =>{
  return{
    userLogged: state.userLogged
  }
}

const mapDispatchToProps = {
  logInForced : authActions.logInForced
}

export default connect(mapStateToProps,mapDispatchToProps)(App)