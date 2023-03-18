import React from 'react';
import { Row } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import Product from '../../Product/Product';

const BestDeals = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products?limit=12');

  return (
    <>
      <h1 id='BestDealsHeading' className='text-center'>
        BEST DEALS OF THE DAY
      </h1>
      <Row className='p-2 m-2'>
        {error ? (
          <p className='text-center'>ERROR!</p>
        ) : loading ? (
          <p className='text-center'>LOADING...</p>
        ) : (
          data?.map((product) => (
            <div className='p-2 col-md-6 col-lg-4' key={product.id}>
              <Product product={product} error={error} loading={loading} />
            </div>
          ))
        )}
      </Row>
    </>
  );
};

export default BestDeals;
