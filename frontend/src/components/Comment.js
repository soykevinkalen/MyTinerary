import React, { useState } from 'react'
import { connect } from "react-redux"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
const Comment = (props) => {
    const [close, setClose] = useState(false)

    const [view, setView] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const edit = (comment) =>{
        setView(!view)
        setClose(!close)
        setUpdatedComment(comment.comment)
    }
    const send = () => {
        props.comment.comment = updatedComment
        props.updateComment(props.comment)
        setView(!view)
        setClose(!close)
    }
    return(
        <div className='commentContent'>
            <div className='commentOne'>
            <div>
                <div className='picUser' style={{backgroundImage:`url('${props.comment.userId.userImage}')`}}></div>
                <h5>{props.comment.userId.firstName + " " + props.comment.userId.lastName }</h5>
            </div>

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
    }
}

export default connect(mapStateToProps, null)(Comment)