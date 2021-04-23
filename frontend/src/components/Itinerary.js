import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import WatchLaterIcon from '@material-ui/icons/WatchLater'

const Itinerary = ({itinerary}) =>{

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='itineraryContent'>
            <h3>{itinerary.title}</h3>
            <div className='userImage' style={{backgroundImage:`url('${itinerary.authorImage}')`}}></div>
            <h5>{itinerary.authorName}</h5>
            <div className='valoration'>
                <div><FavoriteIcon className="heart"/> {itinerary.likes} </div>
                <div> <span>Price: </span>{[...Array(itinerary.price)].map((p,i) => <LocalAtmIcon className="diner" key={i}/>)}</div>
                <div><WatchLaterIcon className="watch"/> {itinerary.duration} <span>hours</span></div>
            </div>
            <div className='hashtag'>
                {
                    itinerary.hashtag.map(hashtag => <p key={hashtag}>#{hashtag}</p>)
                }
            </div>
            
            {isOpen && (<div className='under'><h3>UNDER CONSTRUCTION</h3></div>)}
            <button className="butonIsOpen" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'View Less' : 'View More'}</button>
        </div>     
    )
}


export default Itinerary