import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState } from "react"
import axios from 'axios'


const SignIn = () => {
    const [user, setUser] = useState({email: '', password: ''})
    const [eye, setEye] = useState(false)
    const readInputUser = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
    }
    const sendValueUser = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:4000/api/user/signin', user)
        console.log(response)
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

export default SignIn
