import React from 'react';
import { Card } from 'react-bootstrap';

const ServicesItem = ({ item }) => {
  return (
    <div className='col-md-4'>
      <Card className='text-center mt-3 border-0 shadow-none rounded-0 '>
        <video autoPlay loop muted className='d-block w-100' src={item?.video} alt='First slide'></video>
        <div className='p-2 m-2 card-title h5' id='AboutUsTitle'>
          {item?.title}
        </div>
        <p className='p-2 m-2 card-text' id='AboutUsPara'>
          {item?.subtitle}
        </p>
      </Card>
    </div>
  );
};

export default ServicesItem;
