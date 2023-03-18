import React from 'react';
import './NotFound.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Container>
        <div className='not-found d-flex flex-column justify-content-center align-items-center'>
          <h1>404</h1>
          <h4>PAGE NOT FOUND</h4>
          <p>
            <NavLink className='nav-link p-2 m-2' to='/'>
              GO BACK TO HOME
            </NavLink>
          </p>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
