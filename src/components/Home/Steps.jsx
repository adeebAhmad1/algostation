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
            <Step step="01" btn={
              <a rel="noreferrer" target="_blank" href="https://bit.ly/TTronOffer" style={{...btn,fontSize: "1.1rem"}} className="learn-more">
              SIGNUP PLATFORM
            </a>
            } bg="linear-gradient(to right, #e53935, #e35d5b)" content={<p style={{fontSize: '1.2rem'}}><b>Create a Platform</b><br /><span style={{fontSize: '0.8rem'}}>TT is India #1 &amp; U.S patent algo trading platform for retail traders and investors in India</span> <br/> <b className="text-primary" style={{fontSize: '0.65rem'}}>Create now and get retail plan free for 1 month (promo valid till further notice)</b></p>} />
            <Step step="02" btn={<a rel="noreferrer" target="_blank" href="http://bit.ly/ABAlgoTrade" style={{...btn,fontSize: "1.1rem"}} className="learn-more">
                SIGNUP TERMINAL
              </a>} bg="linear-gradient(to right, #fc00ff, #00dbde)" content={<p style={{fontSize: "1.2rem"}}><b>Create a Terminal</b><br /><span style={{fontSize: "0.8rem"}}>Algo Traders recommend AB Terminal – Provide free algo trading, low brokerage, high exposure margin in India</span><br /><b className="text-primary" style={{fontSize: "0.65rem"}}>Create now and Get Rs.3000 worth trade store products free!</b></p>} />
            <Step btn={<a className="learn-more" style={{...btn,fontSize: "1.1rem"}} href="https://www.algostation.in/setup">Setup Platform</a> } step="03" bg="linear-gradient(to right, #7b4397, #dc2430)" content={<p className="w-100" style={{fontSize: "1.2rem"}}>
              <b>Go To Setup</b><br/>
              <span style={{fontSize: "0.8rem"}}>Complete setup in 5minutes and start your first algo trade</span>
              </p>} />
          </div>
        </div>
      </section>
  );
};

export default Steps;