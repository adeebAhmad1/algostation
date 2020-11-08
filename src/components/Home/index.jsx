import React from 'react';
import Active from './Active';
import Faq from './Faq';
import Info from './Info';
import Steps from './Steps';
import Why from './Why';

const Home = () => {
  return (
    <main>
      <Info />
      <Steps />
      <Why />
      <Faq />
      <Active />
    </main>
  );
};

export default Home;