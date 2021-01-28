import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselComp() {
  return (
    <Carousel style={{
      width: '100%',
      height:'auto'
    }}>
      <Carousel.Item>
        <img
          className="slider d-block w-100"
          src="https://i.ytimg.com/vi/9j3F3AFUNxo/maxresdefault.jpg"
          alt="First slide"

        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider d-block w-100"
          src="https://i.ytimg.com/vi/Hx2qT9ccwo8/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider d-block w-100"
          src="https://i.ytimg.com/vi/b6Eh8Ua5Tws/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComp