import React, { useState } from 'react'
import { connect } from "react-redux"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import Swal from 'sweetalert2'

const Comment = (props) => {
    const [close, setClose] = useState(false)

    const [view, setView] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const edit = (comment) =>{
        setView(!view)
        setClose(!close)
        setUpdatedComment(comment.comment)
    }
    const enter = (e) =>{
        if(e.key === 'Enter'){
            send()  
        }
    }
    const send = () => {
        if(updatedComment.trim() !== ""){
            props.comment.comment = updatedComment
            props.updateComment(props.comment)
            setView(!view)
            setClose(!close)
        }
    }
    const erase = (comment) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                props.deleteComment(comment)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })
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
                <DeleteForeverIcon onClick={()=>erase(props.comment)}/>
                </div>}
                </> : null
            }

            </div>
            {!view && 
            <h5 className='comentario'>{props.comment.comment}</h5>}
            {view && (
                <div className='commentsEdit'>
                    <input onKeyDown={enter} type="text" className="inputComment" placeholder="Write your comment here"  onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment}/>
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