import React from 'react'
// import Slide from './Slide'
// import Slide from "./Slide";
import { v4 as uuidv4 } from 'uuid';


const Slides = ({item}) => {
    return (
        <div className="slideCarrousel">
            {
                item.map(foto =>{
                    return(
                        <div key={uuidv4()} className='slideCity' style={{backgroundImage:`url(${foto.src})`}}>
                            <h3>{foto.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slides