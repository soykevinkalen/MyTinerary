import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState } from "react"
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'



const SignIn = (props) => {
    const [user, setUser] = useState({email: '', password: ''})
    const [eye, setEye] = useState(false)
    const readInputUser = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
    }
    const sendValueUser = (e) => {
        e.preventDefault()
        props.logInUser(user)
    }

    return(
        <>
            <Header /> 
            <div className="form">
                <FlightTakeoffIcon className='logoForm'/>
                <h1>Sign in!</h1>
                <form>
                    <input type="text" className="input" placeholder="Please, enter your email adress"
                    onChange={readInputUser} value={user.email} name="email" />
                
                    <div className="password">
                        <input type= {eye ? "text" : "password"} className="input" placeholder="Please, enter your password"
                        onChange={readInputUser} value={user.password} name="password" />
                        {eye ? <VisibilityOffOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)} /> : <VisibilityOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)}/>}
                    </div>
                    <button className="boton" onClick={sendValueUser}>Sign in!</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

const mapDispatchToProps = {
    logInUser: authActions.logInUser 
}

export default connect(null ,mapDispatchToProps)(SignIn)
