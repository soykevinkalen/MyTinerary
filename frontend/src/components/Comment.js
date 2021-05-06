import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const Comment = (props) => {
    const [openPointer, setOpenPointer] = useState(false)
    return(
        <div key={props.comment._id}>
            <div className='d-flex w-100 justify-content-between'>
            <div className='usuario' style={{backgroundImage:`url('${props.comment.userId.userImage}')`}}></div>
            <h5>{props.comment.userId.firstName + " " + props.comment.userId.lastName }</h5>
            <MoreVertIcon className='deleteEdit' onClick={() => setOpenPointer(!openPointer)}/>
            {openPointer && (<div className='deleteEditContent'>
                <h6>Delete</h6>
                <h6>Edit</h6>
            </div>)}
            </div>
            <h5>{props.comment.comment}</h5>
        </div>
    )
}

export default Comment