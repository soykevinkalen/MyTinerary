const Slide = ({ciudad, clase}) =>{
    return(
        <div className={clase.carousel} style={{backgroundImage:`url(${ciudad.src})`}}>
            <h3 className={clase.estampa}>{ciudad.title}</h3>
        </div>
    )
}

export default Slide