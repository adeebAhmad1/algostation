import React from 'react';
import Step from '../utils/Step';

const Steps = () => {
  const btn = {};
  btn["--btn"] = "#000"
  btn["--btn-color"] = "#fff"
  return (
    <section className="steps py-5">
        <div className="container">
          <h1 className="text-center py-5">Setup Your First Algo Trading in 3 Simple Steps</h1>
          <div className="row mb-3">
            <Step step="01" bg="linear-gradient(to right, #e53935, #e35d5b)" extra={{padding: `1rem 2.5rem`}} content={<p style={{fontSize: '1.3rem'}}><b>Create a Platform</b><br /><span style={{fontSize: '0.8rem'}}>TT is India #1 &amp; U.S patent algo trading platform for retail traders and investors in India</span> <br/> <b className="text-primary" style={{fontSize: '0.9rem'}}>Create now and get retail plan free for 1 month (promo valid till further notice)</b></p>} />
            <Step step="02" bg="linear-gradient(to right, #fc00ff, #00dbde)" extra={{padding: `1rem 2.5rem`}} content={<p style={{fontSize: "1.3rem"}}><b>Create a Terminal</b><br /><span style={{fontSize: "0.8rem"}}>Algo Traders recommend AB Terminal – Provide free algo trading, low brokerage, high exposure margin in India</span><br /><b className="text-primary" style={{fontSize: "0.9rem"}}>Create now and get 10% discounts on brokerage charges lifetime (offer valid till 01-Jan-21)</b></p>} />
            <Step step="03" bg="linear-gradient(to right, #7b4397, #dc2430)" content={<p className="w-100" style={{fontSize: "1.2rem"}}>
              <b>Go To Setup</b><br/>
              <a href="http://bit.ly/ABAlgoTrade" style={{...btn,fontSize: "1.1rem"}} className="learn-more">
                CREATE TERMINAL
              </a>
              <a href="https://bit.ly/TTronOffer" style={{...btn,fontSize: "1.1rem"}} className="learn-more">
                CREATE PLATFORM
              </a>
              </p>} />
          </div>
        </div>
      </section>
  );
};

export default Steps;