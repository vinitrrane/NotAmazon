import React from 'react';
import { Card, Carousel, Row } from 'react-bootstrap';
import { HeroData } from './HeroData';
import './Hero.css';

const Hero = () => {
  return (
    <Row className='hero p-2 m-2 justify-content-center'>
      <div className='p-2 m-2 col-lg-8'>
        <Carousel variant='dark' className='hero-carousel'>
          {HeroData?.map((item) => (
            <Carousel.Item interval={3000} className='mb-5' key={item?.id}>
              <Card className='rounded-0 m-2' style={{ backgroundColor: item?.backgroundColor }}>
                <video autoPlay loop muted className='d-block w-100' src={item?.video} alt='First slide'></video>
                <h2 className='p-2 m-2'>{item?.title}</h2>
                <h4 className='p-2 m-2'>{item?.subtitle}</h4>
                <button type='button' className='p-2 m-2 rounded-0 fw-bold shadow-sm btn btn-outline-dark'>
                  CHECK OUT !
                </button>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Row>
  );
};

export default Hero;
