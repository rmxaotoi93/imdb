import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
export class Caro extends Component {
    render() {
        return (
            <div>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://xemphimplus.net/wp-content/uploads/2020/04/ban-gai-lau-duoi.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://xemphimplus.net/wp-content/uploads/2020/04/phap-su-mu-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://xemphimplus.net/wp-content/uploads/2020/04/rugal.gif"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default Caro
