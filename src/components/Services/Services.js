import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ServicesData } from './ServicesData';
import ServicesItem from './ServicesItem';
import './Services.css';
const Services = () => {
  return (
    <Container className='services'>
      <h1 id='ServicesTitle' className='m-2 p-2 text-center mt-5'>
        OUR SERVICES
      </h1>
      <Row className='justify-content-center p-2'>
        {ServicesData.map((item) => (
          <ServicesItem key={item?.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
