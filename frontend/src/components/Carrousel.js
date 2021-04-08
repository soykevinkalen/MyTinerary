import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import Carousel from 'react-bootstrap/Carousel'
import Slides from './Slides';

class Carrousel extends Component {
    state = {
      items:[
       [
        {title: 'London', src: '/assets/london.jpg'},
        {title: 'New York', src: '/assets/newyork.png'},
        {title: 'Paris', src: '/assets/paris.jpg'},
        {title: 'Moscow', src: '/assets/moscow.jpg'}],
        [{title: 'Tokyo', src: '/assets/tokyo.jpg'},
        {title: 'Dubai', src: '/assets/dubai.jpg'},
        {title: 'Singapore', src: '/assets/singapore.jpg'},
        {title: 'Barcelona', src: '/assets/barcelona.jpg'}],
        [{title: 'Los Angeles', src: '/assets/losAngeles.jpg'},
        {title: 'Madrid', src: '/assets/madrid.jpg'},
        {title: 'Rome', src: '/assets/rome.jpg'},
        {title: 'Queenstown', src: '/assets/queenstown.jpg'}
      ]]
    }
    
    render () {
      const { items } = this.state;
      
      return (
        <div className='containerCarrousel bg-dark' >
            <h2>Popular MYtineraries</h2>
            <Carousel enableAutoPlay={true}>
                {
                   items.map((item, id) => {
                        return (
                            <Slides item={item} key={id} />
                        )
                  })
                }
            </Carousel>
        </div>
      )
    }
  }

export default Carrousel