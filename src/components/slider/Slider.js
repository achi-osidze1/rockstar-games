import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
            <Carousel>
              <Carousel.Item className='carousel'>
                  <div className='slider-text'>
                    <h5>Grand Theft Auto Online</h5>
                    <h3>Los Santos Drug Wars Now Available</h3>
                  </div>
                <img
                className="d-block w-50"
                id='img'
                src="https://videos-rockstargames-com.akamaized.net/screencaps/12277/_global/1920.jpg"
                alt="First slide"/>
              </Carousel.Item>
                <Carousel.Item className='carousel'>
                  <div className='carousel-text'>
                    <div className='slider-text'>
                      <h5>Grand Theft Auto Online</h5>
                      <h3>The Criminal Enterprises Now Available</h3>
                    </div>
                  </div>
                  <img
                  className="d-block w-50"
                  id='img'
                  src="https://videos-rockstargames-com.akamaized.net/screencaps/12263/_global/1920.jpg"
                  alt="Second slide"/>
                </Carousel.Item>
                  <Carousel.Item className='carousel'>
                    <div className='carousel-text'>
                      <div className='slider-text'>
                        <h5>Grand Theft Auto Online</h5>
                        <h3 className='h3'>Get The New BF Weevil Custom From Benny's</h3>
                      </div>
                    </div>
                    <img
                    className="d-block w-50"
                    id='img'
                    src="https://videos-rockstargames-com.akamaized.net/screencaps/12274/_global/1920.jpg"
                    alt="Third slide"/>
                  </Carousel.Item>
            </Carousel>
    );
  }
  export default Slider;