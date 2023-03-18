import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar
        variant='light'
        fixed='top'
        expand='xxl'
        className='p-2'
        style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand id='WebsiteName' className='p-2'>
              NOTAMAZON
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            style={{ border: 'none', boxShadow: 'none' }}
            placement='end'
            onClick={() => setShow(true)}
          />

          <Navbar.Offcanvas
            show={show}
            className='w-75'
            onHide={toggleOffCanvas}
            tabIndex='-1'
            id={`offcanvasNavbar-expand-lgs`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement='end'>
            <Offcanvas.Header
              className='justify-content-end'
              style={{ border: 'none', boxShadow: 'none' }}
              closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1'>
                <NavLink className='nav-link p-2 m-2 text-center' to='/' onClick={toggleOffCanvas}>
                  HOME
                </NavLink>
                <NavLink className='nav-link p-2 m-2 text-center' to='/categories' onClick={toggleOffCanvas}>
                  CATEGORIES
                </NavLink>
                <NavLink className='nav-link p-2 m-2 text-center' to='/AllProducts' onClick={toggleOffCanvas}>
                  ALL PRODUCTS
                </NavLink>
                <NavLink className='nav-link p-2 m-2 text-center' to='/cart' onClick={toggleOffCanvas}>
                  CART {'0'}
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
