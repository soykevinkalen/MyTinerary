import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import Carrousel from '../components/Carrousel'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Hero />
                <CallToAction />
                <Carrousel />
                <Footer />
            </div>
        )
    }
}