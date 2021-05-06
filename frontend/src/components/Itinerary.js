import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import authActions from '../redux/actions/authActions'
import Comment from './Comment'
import { connect } from "react-redux"

const Itinerary = (props) =>{
    console.log(props.itinerary)
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [hashtag, setHashtag] = useState('')
    const [itinerariesCoincidencies, setItinerariesCoincidencies] = useState([])
    const [itineraries, setItineraries] = useState([])
    const [activities, setActivities] = useState([])
    const [likes, setLikes] = useState(props.itinerary.usersLiked)
    const [newComments, setNewComments] = useState(null)
    const [allComments, setAllComments] = useState(props.itinerary.comments)
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
    const like = async (itineraryId) => {
        console.log("entro")
        let response = await props.likes(props.user, props.itinerary)
        console.log(response)
        setLikes(response.usersLiked)
        
        // if(!response.success){
            
        //     response = await props.deslike(props.user, itineraryId)
        //     console.log(response)
        // }
        // setLikes(response.respuesta.usersLiked)
        // console.log(response)
        // const response = await props.idUser(props.user)
        // const itinerary = props.itinerariesByCity.find(itinerary => itinerary._id === itineraryId)
        // if(itinerary.usersLiked.indexOf(response.data.respuesta) !== -1){
        //     itinerary.usersLiked = itinerary.usersLiked.filter(id => response.data.respuesta !== id)
        //     itinerary.likes = itinerary.likes - 1
        //     setLikes("heart")
        // }else{
        //     itinerary.likes = itinerary.likes + 1
        //     itinerary.usersLiked = [...itinerary.usersLiked, response.data.respuesta]
        //     setLikes("heartRed")
        // }
        
        // props.putItinerary(itineraryId, itinerary)
    }
    const readInput = (e) => {
        if(e.target.value) setNewComments(e.target.value)        
    }
    const sendValues = async (itineraryId) => {
        // const response = await props.idUser(props.user)
        // const itinerary = props.itinerariesByCity.find(itinerary => itinerary._id === itineraryId)
        // const comment = {userId: response.data.respuesta, comment: newComments}
        // itinerary.comments = []
        // props.putItinerary(itineraryId, itinerary)

        const itinerary = await props.putComments(props.user,itineraryId, newComments)
        console.log(itinerary.comments)
        setAllComments(itinerary.comments)
    }
    // const comentarioNuevo = await Itinerary.findOneAndUpdate({ _id: idItinerari }, { $push: { comments: { userId: populate(idUsuario), comment: mensaje } } }, { new: true })
    return(
            
        <div className='itineraryContent'>
                
            <h3>{props.itinerary.title}</h3>
            <div className='userImage' style={{backgroundImage:`url('${props.itinerary.authorImage}')`}}></div>
            <h5>{props.itinerary.authorName}</h5>
            <div className='valoration'>
                <div><FavoriteIcon onClick={() => like(props.itinerary._id) }/> {props.itinerary.usersLiked.length} </div>
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
                    {
                        allComments.map(comment => {
                            return(
                                <Comment comment={comment}/>
                                // <div key={comment._id}>
                                //     <div className='d-flex w-100 justify-content-between'>
                                //     <div className='usuario' style={{backgroundImage:`url('${comment.userId.userImage}')`}}></div>
                                //     <h5>{comment.userId.firstName + " " + comment.userId.lastName }</h5>
                                //     <MoreVertIcon className='deleteEdit' onClick={() => setOpenPointer(!openPointer)}/>
                                //     {openPointer && (<div className='deleteEditContent'>
                                //         <h6>Delete</h6>
                                //         <h6>Edit</h6>
                                //     </div>)}
                                //     </div>
                                //     <h5>{comment.comment}</h5>
                                // </div>
                            )
                        })
                    }
                    <input type="text" className="input" placeholder="Comments..." onChange={readInput}/>
                    <button className="boton" onClick={() => sendValues(props.itinerary._id)}>Send</button>
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
    getActivitiesByItinerary : activitiesActions.getActivitiesByItinerary,
    putItinerary: itinerariesActions.putItinerary,
    idUser: authActions.idUser,
    putComments: itinerariesActions.putComments,
    likes: itinerariesActions.likes,
    deslike: itinerariesActions.deslike
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)