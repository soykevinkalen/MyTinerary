import { useEffect, useState } from "react"
import axios from 'axios'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'


const SignUp = (props) => { 
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: '', userImage: '', country: ''})
    const [countries, setCountries] = useState([])
    const [eye, setEye] = useState(false)
    const [mistakes, setMistakes] = useState({firstName: '', lastName: '', email: '', password: '', userImage: '',country: ''})
// {firstName: 'firstName', error: 'Success'}, {lastName: 'lastName', error: 'Success'}, {email: 'email', error:'Success'}, {password: 'password', error: 'Success'}, {userImage: 'userImage', error: 'Success'},{country: 'country', error: 'Success'}
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then( response => {
            setCountries(response.data)})
        .catch(error => console.log(error))
    },[])
    const readInputUser = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
    }

    const sendValueUser = async (e = null, googleUser = null) => {
        setMistakes({firstName: '', lastName: '', email: '', password: '', userImage: '',country: ''})
        e && e.preventDefault()
        let userGen = e ? user : googleUser
        console.log(userGen)
        const response = await props.createUser(userGen)
        console.log(response)
        if(response){
            response.map(error => setMistakes((prevState) =>{ 
                return {...prevState, [error.context.label]: error.message}
             }))
        }
    }
    const responseGoogle = (response) => {
        console.log(response)
        const {givenName, familyName, email, googleId, imageUrl} = response.profileObj
        sendValueUser(null, {firstName: givenName, lastName: familyName , email, password: "a"+googleId, userImage: imageUrl, country: 'google'})
    }
    return(
        <>
            <Header /> 
            <div className="form">
                <FlightTakeoffIcon className='logoForm'/>
                <h1>Sign up!</h1>
                <form>
                    <input type="text" className="input" placeholder="Please, enter your first name"
                    onChange={readInputUser} value={user.firstName} name="firstName" />
                    {mistakes.firstName ? <h6>{mistakes.firstName}</h6> : null} 
                    <input type="text" className="input" placeholder="Please, enter your last name"
                    onChange={readInputUser} value={user.lastName} name="lastName" />
                    {mistakes.lastName ? <h6>{mistakes.lastName}</h6> : null} 
                    <input type="text" className="input" placeholder="Please, enter your email adress"
                    onChange={readInputUser} value={user.email} name="email" />
                    {mistakes.email ? <h6>{mistakes.email}</h6> : null} 
                    <div className="password">
                        <input type= {eye ? "text" : "password"} className="input" placeholder="Please, enter your password"
                        onChange={readInputUser} value={user.password} name="password" />
                        {eye ? <VisibilityOffOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)} /> : <VisibilityOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)}/>}
                    </div>
                        {mistakes.password ? <h6>{mistakes.password}</h6> : null} 
                    <input type="text" className="input" placeholder="Please, enter the URL of your picture"
                    onChange={readInputUser} value={user.userImage} name="userImage" />
                    {mistakes.userImage ? <h6>{mistakes.userImage}</h6> : null} 

                    <select onChange={readInputUser} name="country" className="input">
                        <option value='random'>Choose your country</option>
                        {countries.map(country => {
                            return <option key={country.name} value={country.name}>{country.name}</option>
                        })}
                    </select>
                    {mistakes.country ? <h6>{mistakes.country}</h6> : null} 
                    <button className="boton" onClick={sendValueUser}>Sign up!</button>
                    <GoogleLogin
                        clientId="974935643152-8625so4e5v3mclin608djtcmp27s608o.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
            <Footer />
        </>
    )
}

const mapDispatchToProps = {
    createUser: authActions.createUser
}

export default connect(null ,mapDispatchToProps)(SignUp)