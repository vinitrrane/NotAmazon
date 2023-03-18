import React from 'react';
import BestDeals from './BestDeals/BestDeals';
import TopDeals from './TopDeals/TopDeals';
import './Deals.css';

const Deals = () => {
  return (
    <div className='deals'>
      <TopDeals />
      <BestDeals />
    </div>
  );
};

export default Deals;
