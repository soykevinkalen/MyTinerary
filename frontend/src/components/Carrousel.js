import Carousel from 'react-elastic-carousel';
import Slides from './Slides';

const Carrousel = ({gruposDeCiudades}) => {

    return (
      <div className='containerCarrousel bg-dark' >
          <h2>Popular MYtineraries</h2>
          <Carousel enableAutoPlay={true} autoPlaySpeed={4000}>
              {
                  gruposDeCiudades.map((ciudades, id) => {
                      return (
                          <Slides ciudades={ciudades} key={id} />
                      )
                })
              }
          </Carousel>
      </div>
    )
  }
  

export default Carrousel