import React, {Component} from 'react'
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Footer from '../components/Footer'
import ReactLoading from 'react-loading'
import { connect } from "react-redux"
import citiesActions from '../redux/actions/citiesActions'
class Cities extends Component{

    componentDidMount(){
        this.props.getCities()
    }
    
    render(){
        console.log(this.props.cities)
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
       loading:  state.only.loading
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)