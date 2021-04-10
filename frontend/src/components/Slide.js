const Slide = ({ciudad, clase}) =>{
    return(
        <div className={clase} style={{backgroundImage:`url(${ciudad.src})`}}>
            <h3>{ciudad.title}</h3>
        </div>
    )
}

export default Slide