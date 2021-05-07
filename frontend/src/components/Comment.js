import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { connect } from "react-redux"
import itinerariesActions from '../redux/actions/itinerariesActions'

const Comment = (props) => {
    const [openPointer, setOpenPointer] = useState(false)
    const [view, setView] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')
    // const [render, setRender] = useState('')
    // const deleteComment = async () =>{
    //     console.log(props)
    //     const response = await props.deleteComment(props.user, props.comment, props.itinerary)
    //     console.log(response)
    //     // props.render(response)
    //     // setRender(!render)
    // }
    // props.comment
    const edit = (comment) =>{
        setView(!view)
        props.setViewItinerary(false)
        setUpdatedComment(comment.comment)
        console.log(comment)
    }
    const send = () => {
        // console.log(props)
        // props.updateComment(updatedComment)
        console.log(props.comment)
        console.log(updatedComment)
        props.comment.comment = updatedComment
        console.log(props.comment)
        props.updateComment(props.comment)
        setView(!view)
        props.setViewItinerary(true)

    }
    return(
        <div>
            <div className='d-flex w-100 justify-content-between'>
            
            <div className='usuario' style={{backgroundImage:`url('${props.comment.userId.userImage}')`}}></div>
            <h5>{props.comment.userId.firstName + " " + props.comment.userId.lastName }</h5>
            <MoreVertIcon className='deleteEdit' onClick={() => setOpenPointer(!openPointer)}/>
            
            {openPointer && (<div className='deleteEditContent'>
                <h6 onClick={()=>props.deleteComment(props.comment)}>Delete</h6>
                <h6 onClick={()=>edit(props.comment)}>Edit</h6>
            </div>)}
            </div>
            {!view && 
            <h5>{props.comment.comment}</h5>}
            {view && (
                <div className='comments'>
                    {/* <div className='d-flex w-100 justify-content-between'>
                    <div className='usuario' style={{backgroundImage:`url('${props.comment.userId.userImage}')`}}></div>
                    <h5>{props.comment.userId.firstName + " " + props.comment.userId.lastName }</h5>
                    <MoreVertIcon className='deleteEdit' onClick={() => setOpenPointer(!openPointer)}/>
                    </div> */}
                    <input type="text" className="input" placeholder="Write your comment here"  onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment}/>
                    <button className="boton" onClick={send}>Send</button>
                </div>

            )

            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.auth.userLogged,
        // itinerariesByCity: state.itinerary.itinerariesByCity
    }
}
const mapDispatchToProps = {
    
    // deleteComment: itinerariesActions.deleteComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)