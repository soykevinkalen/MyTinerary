import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import Carrousel from '../components/Carrousel'

export default class Home extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }
    state = {
        gruposDeCiudades:[
         [
          {title: 'London', src: '/assets/london.jpg'},
          {title: 'New York', src: '/assets/newyork.jpg'},
          {title: 'Paris', src: '/assets/paris.jpg'},
          {title: 'Dubai', src: '/assets/dubai.jpg'}
        ],
          [{title: 'Tokyo', src: '/assets/tokyo.jpg'},
          {title: 'Moscow', src: '/assets/moscow.jpg'},
          {title: 'Tauranga', src: '/assets/tauranga.jpg'},
          {title: 'Queenstown', src: '/assets/queenstown.jpg'}
        ],
          [{title: 'Los Angeles', src: '/assets/losAngeles.jpg'},
          {title: 'Madrid', src: '/assets/madrid.jpg'},
          {title: 'Rome', src: '/assets/rome.jpg'},
          {title: 'Barcelona', src: '/assets/barcelona.jpg'}          
        ]]
    }
    render(){
        return(
            <>
                <Header />
                <Hero gruposDeCiudades={this.state.gruposDeCiudades[1]}/>
                <CallToAction />
                <Carrousel gruposDeCiudades={this.state.gruposDeCiudades}/>
                <Footer />
            </>
        )
    }
}