import React from 'react';
import { Carousel } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import Product from '../../Product/Product';

const TopDealsItem = ({ category, title }) => {
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}?limit=5`);

  return (
    <div className='p-2 m-2 col-md-5' style={{ backgroundColor: 'white' }}>
      <h5 id='TopDealsHeading' className='text-center'>
        TOP 5 {title?.toUpperCase()} DEALS
      </h5>
      <Carousel variant='dark' className=''>
        {error ? (
          <p className='text-center'>ERROR!</p>
        ) : loading ? (
          <p className='text-center'>LOADING...</p>
        ) : (
          data?.map((product) => (
            <Carousel.Item interval={3000} key={product?.id}>
              <Product product={product} />
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default TopDealsItem;
