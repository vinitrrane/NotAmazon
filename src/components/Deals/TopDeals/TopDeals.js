import React from 'react';
import { Row } from 'react-bootstrap';
import TopDealsItem from './TopDealsItem';

const TopDeals = () => {
  return (
    <Row className='top-deals p-2 m-2 justify-content-center'>
      <TopDealsItem category={'electronics'} title={'electronics'} />
      <TopDealsItem category={'jewelery'} title={'jewelery'} />
      <TopDealsItem category={"men's%20clothing"} title={"men's clothing"} />
      <TopDealsItem category={"women's%20clothing"} title={"women's clothing"} />
    </Row>
  );
};

export default TopDeals;
