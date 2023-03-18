import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Row
        className='text-center justify-content-center p-5 m-auto mt-5'
        style={{ textDecoration: 'none', backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)' }}>
        <div className='footer-item p-2 m-2 col-md-3'>
          <Container>
            <Row>
              <div className='p-2 m-2 col'>
                <h4>LEAGEL</h4>
                <hr />
                <p>
                  <a href='#/privacypolicy'>PRIVACY POLICY</a>
                </p>
                <p>
                  <a href='#/privacypolicy'>COOKIE POLICY</a>
                </p>
                <p>
                  <a href='#/privacypolicy'>LEGAL NOTICE</a>
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <div className='footer-item p-2 m-2 col-md-3'>
          <Container>
            <Row>
              <div className='p-2 m-2 col'>
                <h4>FOLLOW US</h4>
                <hr />
                <p>
                  <a href='#/privacypolicy'>FACEBOOK</a>
                </p>
                <p>
                  <a href='#/privacypolicy'>INSTAGRAM</a>
                </p>
                <p>
                  <a href='#/privacypolicy'>TWITTER</a>
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <div className='footer-item p-2 m-2 col-md-3'>
          <Container>
            <Row>
              <div className='p-2 m-2 col'>
                <h4>LEAGEL</h4>
                <hr />
                <p>
                  <a href='#/privacypolicy'>PRIVACY POLICY</a>
                </p>
                <p>
                  <a href='#/privacypolicy'>CUSTOMER CARE</a>
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <hr />
        <div className='p-2 m-2 col-md-12'>
          <h6 style={{ color: 'rgb(236, 236, 236)' }}> © 2022, NOTAMAZON.COM</h6>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
