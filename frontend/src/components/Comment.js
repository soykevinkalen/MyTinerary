import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
const Comment = (props) => {
    console.log(props)
    const [openPointer, setOpenPointer] = useState(false)
    const [close, setClose] = useState(false)

    const [view, setView] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')
    // if(!view){
    //     props.setViewItinerary(true)
    // }
    const edit = (comment) =>{
        setView(!view)
        setClose(!close)
        // props.setViewItinerary(false)
        setUpdatedComment(comment.comment)
        console.log(comment)        
    }
    const send = () => {
        console.log(props.comment)
        console.log(updatedComment)
        props.comment.comment = updatedComment
        console.log(props.comment)
        props.updateComment(props.comment)
        setView(!view)
        // props.setViewItinerary(true)

    }
    return(
        <div className='commentContent'>
            <div className='commentOne'>
            <div>
                <div className='picUser' style={{backgroundImage:`url('${props.comment.userId.userImage}')`}}></div>
                <h5>{props.comment.userId.firstName + " " + props.comment.userId.lastName }</h5>
            </div>
            {/* { 
            (props.user && props.comment.userId.email === props.user.email) ?  <MoreVertIcon className='deleteEdit' onClick={() => props.user ? setOpenPointer(!openPointer) : toast.error("You have to log in", {
                    position: toast.POSITION.TOP_CENTER
                  })}/> : null

            } */}
            {
                (props.user && props.comment.userId.email === props.user.email) ? 
                <>
                {close ? <CloseIcon className='closeIcon' onClick={()=>{setClose(!close);setView(!view)}}/> : 
                <div> 
                <EditIcon className='editIcon' onClick={()=>edit(props.comment)}/>
                <DeleteForeverIcon onClick={()=>props.deleteComment(props.comment)}/>
                </div>}
                </> : null
            }
            {/* <EditIcon onClick={()=>edit(props.comment)}/>
            <DeleteForeverIcon onClick={()=>props.deleteComment(props.comment)}/>

            {openPointer && (<div className='deleteEditContent'>
                <h6 onClick={()=>props.deleteComment(props.comment)}>Delete</h6>
                <h6 onClick={()=>edit(props.comment)}>Edit</h6>
            </div>)} */}
            </div>
            {!view && 
            <h5 className='comentario'>{props.comment.comment}</h5>}
            {view && (
                <div className='commentsEdit'>
                    <input type="text" className="inputComment" placeholder="Write your comment here"  onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment}/>
                    <button className="buttonComment" onClick={send}>Send</button>
                </div>
            )}
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