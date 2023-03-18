import React from 'react';
import { Button, Form } from 'react-bootstrap';
const Search = () => {
  return (
    <>
      <Form className='d-flex'>
        <Form.Control type='search' placeholder='Search' className='me-2 p-2 rounded-0 border-0' aria-label='Search' />
        <Button variant='dark' className='rounded-0 p-2'>
          Search
        </Button>
      </Form>
    </>
  );
};

export default Search;
