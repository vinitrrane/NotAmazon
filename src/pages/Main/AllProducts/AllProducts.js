import React, { useState } from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';
import Product from '../../../components/Product/Product';
import Search from '../../../components/Search/Search';
import useFetch from '../../../hooks/useFetch';
import './AllProducts.css';

const AllProducts = () => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [page, setPage] = useState(1);
  const productsPages = [...Array(Math.ceil(products.length / 6))];
  const pageHandler = (selectedPage) => {
    if (selectedPage < 1 || selectedPage > productsPages.length) {
    } else {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      <Container>
        <h1 className='text-center p-2 m-2'>ALL PRODUCTS</h1>
        <Row>
          <Search />
        </Row>
        <br />
        <Row>
          {error ? (
            <p className='text-center'>ERROR!</p>
          ) : loading ? (
            <p className='text-center'>LOADING...</p>
          ) : (
            products.slice(page * 6 - 6, page * 6).map((product) => (
              <div className='p-2 col-md-6 col-lg-4' key={product.id}>
                <Product product={product} />
              </div>
            ))
          )}
        </Row>
        <Row className='m-2'>
          {products.length != 0 ? (
            <Pagination className='justify-content-center p-0'>
              <Pagination.First onClick={() => pageHandler(1)} />

              <Pagination.Prev onClick={() => pageHandler(page - 1)} />
              {productsPages.map((_, index) => (
                <Pagination.Item key={index} onClick={() => pageHandler(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => pageHandler(productsPages.length)} />
              <Pagination.Last onClick={() => pageHandler(productsPages.length)} />
            </Pagination>
          ) : null}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
