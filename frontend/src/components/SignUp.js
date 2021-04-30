import { useEffect, useState } from "react"
import axios from 'axios'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'

const SignUp = (props) => { 
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: '', userImage: '', country: ''})
    const [countries, setCountries] = useState([])
    const [eye, setEye] = useState(false)

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

    const sendValueUser = async (e) => {
        e.preventDefault()
        const response = await props.createUser(user)
        console.log(response)
        // setUser([
        //   ...user,
        //   response.data.respuesta
        // ])
        // setUser({firstName: '', lastName: '', email: '', password: '', userImage: '', country: ''})
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
                    <input type="text" className="input" placeholder="Please, enter your last name"
                    onChange={readInputUser} value={user.lastName} name="lastName" />
                    <input type="text" className="input" placeholder="Please, enter your email adress"
                    onChange={readInputUser} value={user.email} name="email" />
                    <div className="password">
                        <input type= {eye ? "text" : "password"} className="input" placeholder="Please, enter your password"
                        onChange={readInputUser} value={user.password} name="password" />
                        {eye ? <VisibilityOffOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)} /> : <VisibilityOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)}/>}
                    </div>
                    <input type="text" className="input" placeholder="Please, enter the URL of your picture"
                    onChange={readInputUser} value={user.userImage} name="userImage" />
                    <select onChange={readInputUser} name="country" className="input">
                        <option value='random'>Choose your country</option>
                        {countries.map(country => {
                            return <option key={country.name} value={country.name}>{country.name}</option>
                        })}
                    </select>
                    <button className="boton" onClick={sendValueUser}>Sign up!</button>
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