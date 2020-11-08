import React from 'react';

const Steps = () => {
  const btn = {};
  btn["--btn"] = "#fff"
  btn["--btn-color"] = "#000"
  return (
    <section className="steps text-white py-5">
        <div className="container">
          <h1 className="text-center py-5">Setup Your First Algo Trading in 3 Simple Steps</h1>
          <div className="row mb-3">
            <div className="col-lg-8 col-md-8">
              <p style={{fontSize: "1.3rem"}}>
                <b><span style={{fontFamily: `Arial, Helvetica, sans-serif`,fontWeight: "900"}}>Step 1</span>: </b>Create a Platform
                <br />
                <span style={{fontSize: "0.8rem"}}>
                  TT is India #1 & U.S patent algo trading platform for retail traders and investors in India
                </span>
                <br/>
                <b className="text-primary" style={{fontSize: "0.9rem"}}>
                  Create now and get retail plan free for 1 month (promo valid till further notice)
                </b>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-center font-weight-bolder">
              <a href="https://bit.ly/TTronOffer" style={{...btn,fontSize: "1.3rem"}} className="learn-more">
                CREATE PLATFORM
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-8 col-md-8">
              <p style={{fontSize: "1.2rem"}}>
                <b><span style={{fontFamily: `Arial, Helvetica, sans-serif`,fontWeight: "900"}}>Step 2</span>: </b> Create a Terminal <br />
                <span style={{fontSize: "0.8rem"}}>
                  Algo Traders recommend AB Terminal – Provide free algo trading, low brokerage, high exposure margin in India
                </span> <br/>
                <span style={{fontSize: "0.8rem"}}>
                  Create now and get retail plan free for 1 month (promo valid till further notice)
                </span>
                <br />
                <b className="text-primary" style={{fontSize: "0.9rem"}}>Create now and get 10% discounts on brokerage charges lifetime (offer valid till 01-Jan-21)</b>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-center font-weight-bolder">
              <a href="http://bit.ly/ABAlgoTrade" style={{...btn,fontSize: "1.3rem"}} className="learn-more">
                CREATE TERMINAL
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p style={{fontSize: "1.3rem"}}>
                <b><span style={{fontFamily: `Arial, Helvetica, sans-serif`,fontWeight: "900"}}>Step 3</span>: </b> Go to Setup <br/>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Steps;