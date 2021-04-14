import React, { useEffect, useState } from 'react'

const Itineraries = (props) => {
    const [idCity, setIdCity] = useState(null)
    useEffect(() =>{
        setIdCity(props.match.params.id)
    }, [])
    return (
        <div>
            <h1>{idCity}</h1>
        </div>
    )
}

export default Itineraries