import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Comment from './Comment'
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify'

const Itinerary = (props) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [hashtag, setHashtag] = useState('')
    const [itinerariesCoincidencies, setItinerariesCoincidencies] = useState([])
    const [itineraries, setItineraries] = useState([])
    const [activities, setActivities] = useState([])
    const [likes, setLikes] = useState(false)
    const [newComments, setNewComments] = useState('')
    const [allComments, setAllComments] = useState(props.itinerary.comments)
    const [viewItinerary, setViewItinerary] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:4000/api/itineraries')
        .then(response => {
            setItineraries(response.data.respuesta)})
            .catch( error => console.log(error))
        },[])
    useEffect(()=>{
        if(props.user){
            if(props.itinerary.usersLiked.indexOf(props.user.email) !== -1){
                setLikes(true)
            }else{
                setLikes(false)            
            }
        }
    },[props])
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
    const like = async () => {
        if(props.user){
            setLoading(false)
            let response = await props.likes(props.user, props.itinerary)
            setLikes(!likes)
            setLoading(true)
        }else{
            toast.error("You have to log in", {
                position: toast.POSITION.TOP_CENTER
              });
        }
    }
    const readInput = (e) => {
        if(e.target.value) setNewComments(e.target.value)   
           
    }
    const sendValues = async (itineraryId) => {
        if(props.user){
            setLoading(false)
            if(newComments && newComments.trim() !== ""){
                const itinerary = await props.putComments(props.user,itineraryId, newComments)
                setAllComments(itinerary.comments)
                setNewComments('')
                setLoading(true)
            }
        }else{
            toast.error("You have to log in", {
                position: toast.POSITION.TOP_CENTER
              });
        }
    }
    const deleteComment = async (comment) =>{
        const response = await props.deleteComment(props.user, comment, props.itinerary)
        setAllComments(response.comments)
    }

    const updateComment = async (comment) =>{
        const response = await props.updateComment(props.user, comment, props.itinerary)
        setAllComments(response.comments)        
    }
    
    return(
            
        <div className='itineraryContent'>
            <h3>{props.itinerary.title}</h3>
            <div className='userImage' style={{backgroundImage:`url('${props.itinerary.authorImage}')`}}></div>
            <h5>{props.itinerary.authorName}</h5>
            <div className='valoration'>
                <div><FavoriteIcon className='curser' style={{color:`${likes ? 'red' : 'white' }`}} onClick={loading ? like : null}/> {props.itinerary.usersLiked.length} </div>
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
                                        <div><FavoriteIcon/> {itinerary.usersLiked.length} </div>
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
                    <h3>Comments</h3>
                    <div className='divComments'>
                        {allComments.length ? 
                            allComments.map(comment => {
                                return(
                                    <Comment key={comment._id} setViewItinerary={setViewItinerary} comment={comment} itinerary={props.itinerary} deleteComment={deleteComment} updateComment={updateComment}/>
                                )
                            })
                            : <div className='sinComentarios'>
                                <h2>Be the first to comment</h2>
                            </div> 
                        }
                    </div>
                {viewItinerary && <div className='sendContent'>     
                    <input type="text" value={newComments} className="inputComment" placeholder={props.user ? "Write your comment here": "You have to log in"} onChange={readInput} disabled={!props.user && true}/>
                    <button className="buttonComment" onClick={loading ? () => sendValues(props.itinerary._id) : null}>Send</button>
                    </div>}
                </div>
            </div>)}
            <button className="butonIsOpen" onClick={() => view(props.itinerary._id)}>{isOpen ? 'View Less' : 'View More'}</button>
            <ToastContainer />
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
    putComments: itinerariesActions.putComments,
    likes: itinerariesActions.likes,
    deleteComment: itinerariesActions.deleteComment,
    updateComment: itinerariesActions.updateComment    
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)