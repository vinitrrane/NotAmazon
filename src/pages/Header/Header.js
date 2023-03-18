import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
  return (
    <div className='header'>
      <Container className='mb-5'>
        <Row>
          <Col md={12} className='p-2'>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
