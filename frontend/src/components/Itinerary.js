import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import activitiesActions from '../redux/actions/activitiesActions'
import { connect } from "react-redux"


const Itinerary = (props) =>{

    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false);
    const [hashtag, setHashtag] = useState('')
    const [itinerariesCoincidencies, setItinerariesCoincidencies] = useState([])
    const [itineraries, setItineraries] = useState([])
    const [activities, setActivities] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/itineraries')
        .then(response => {
            setItineraries(response.data.respuesta)})
            .catch( error => console.log(error))
        },[])
    let coincidencies = []
    const getItinerariesHashtag = (e) =>{
        itineraries.map(itinerary =>{
            itinerary.hashtag.map(hashtag => {
                if(hashtag === e.target.value){
                    coincidencies = [...coincidencies, itinerary]
                }
                return null
            })
            return null
        })
        setItinerariesCoincidencies(coincidencies)
        setShow(true)
        setHashtag(e.target.value)
    }
    const view = async (id) => {
        setIsOpen(!isOpen)
        if(!isOpen){
            const activity = await props.getActivitiesByItinerary(id)
            setActivities(activity.data.respuesta)
        }
    }
    const like = () => {
        
        console.log(props.user)
        console.log(props.itinerariesByCity)

    }
    return(
            
        <div className='itineraryContent'>
                
            <h3>{props.itinerary.title}</h3>
            <div className='userImage' style={{backgroundImage:`url('${props.itinerary.authorImage}')`}}></div>
            <h5>{props.itinerary.authorName}</h5>
            <div className='valoration'>
                <div><FavoriteIcon onClick={like} className="heart"/> {props.itinerary.likes} </div>
                <div> <span>Price: </span>{[...Array(props.itinerary.price)].map((p,i) => <LocalAtmIcon className="diner" key={i}/>)}</div>
                <div><WatchLaterIcon className="watch"/> {props.itinerary.duration} <span>hours</span></div>
            </div>
            <div className='hashtag'>
                {
                    props.itinerary.hashtag.map(hashtag => <button value={hashtag} onClick={(e) =>getItinerariesHashtag(e)} key={hashtag}>#{hashtag}</button>)
                }
                <Modal
                show={show}
                backdrop="static"
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header className='modalContent' closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            #{hashtag}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalContent'>
                    {
                        itinerariesCoincidencies.map(itinerary =>{
                            return (
                                <div key={itinerary.title+'hashtag'} className='modalHashtag'>
                                    <h3>{itinerary.title}</h3>
                                    <div className='userImage' style={{backgroundImage:`url('${itinerary.authorImage}')`}}></div>
                                    <h5>{itinerary.authorName}</h5>
                                    <div className='valoration'>
                                        <div><FavoriteIcon className="heart"/> {itinerary.likes} </div>
                                        <div> <span>Price: </span>{[...Array(itinerary.price)].map((p,i) => <LocalAtmIcon className="diner" key={i}/>)}</div>
                                        <div><WatchLaterIcon className="watch"/> {itinerary.duration} <span>hours</span></div>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                    </Modal.Body>
                </Modal>
            </div>
            
            {isOpen && (<div className='under'>
                <div className='activitiesContent'>
                    <h3>Activities</h3>
                    {
                        activities.map(activity => {
                            return(
                            <div key={activity.title} className='activity' style={{backgroundImage:`url('${activity.image}')`}}>
                                <h6>{activity.title}</h6>
                            </div>)
                        })
                    }
                </div>
                <div className='comments'>

                </div>
            </div>)}
            <button className="butonIsOpen" onClick={() => view(props.itinerary._id)}>{isOpen ? 'View Less' : 'View More'}</button>
        </div>     
    )
}
const mapStateToProps = state => {
    return {
        user: state.auth.userLogged,
        itinerariesByCity: state.itinerary.itinerariesByCity

       
    }
}
const mapDispatchToProps = {
    getActivitiesByItinerary : activitiesActions.getActivitiesByItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)