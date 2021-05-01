import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState } from "react"
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignIn = (props) => {
    const [user, setUser] = useState({email: '', password: ''})
    const [eye, setEye] = useState(false)
    const readInputUser = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
    }
    // const sendValueUser = (e) => {
    //     e.preventDefault()
    //     props.logInUser(user)
    // }

    const sendValueUser = async (e = null, googleUser = null) => {
        e && e.preventDefault()
        let userGen = e ? user : googleUser
        console.log(userGen)
        const response = await props.logInUser(userGen)

        if(response){
            toast.error(response)
        }
        // setUser([
        //   ...user,
        //   response.data.respuesta
        // ])
        // setUser({firstName: '', lastName: '', email: '', password: '', userImage: '', country: ''})
    }
    const responseGoogle = (response) => {
        console.log(response)
        if(response.profileObj.email){
            sendValueUser(null, {email: response.profileObj.email, password: 'a'+response.profileObj.googleId})
        }
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
                    <GoogleLogin
                        clientId="974935643152-8625so4e5v3mclin608djtcmp27s608o.apps.googleusercontent.com"
                        buttonText="Sign in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
                <ToastContainer />
            </div>
            <Footer />
        </>
    )
}

const mapDispatchToProps = {
    logInUser: authActions.logInUser 
}

export default connect(null ,mapDispatchToProps)(SignIn)
