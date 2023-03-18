import React from 'react';
import Hero from '../../../components/Hero/Hero';
import Deals from '../../../components/Deals/Deals';
import Services from '../../../components/Services/Services';

const Home = () => {
  return (
    <div className='home' style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
      <Hero />
      <Deals />
      <Services />
    </div>
  );
};

export default Home;
