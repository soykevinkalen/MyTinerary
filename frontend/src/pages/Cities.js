import React, {Component} from 'react'
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Footer from '../components/Footer'
import ReactLoading from 'react-loading'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
class Cities extends Component{

    componentDidMount(){
        window.scrollTo(0,0)         
        this.props.getCities()
    }
    
    render(){
        return(
            <div>
                <Header />
                {this.props.loading ? <ReactLoading className='preloader' type={'cylon'} color={'white'} height={667} width={'100%'} />
                : <Buscador />} 
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       loading:  state.city.loading
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)