import React from 'react';
import Item from '../utils/Item';

const Faq = () => {
  return (
    <div>
      <section id="faq" className="faq py-5">
        <h1 className="py-5 text-center font-weight-bold">
          Frequently Asked Questions
        </h1>
        <div className="container faq_container">
          <Item question="Can I run multiple algos in the same account? Will there be conflicts if they trade same contract?" answer="You can run as many algos as you want in the same account (assuming you have the capital haha). There will not be any clashes or issues because each deployment on TT is independent from others and tracks its own trades."/>
          <Item question="What is the minimum capital required based on your experience?" answer="In my opinion bare minimum would be 1L (like absolutely bare minimum), anything less than that is gambling not trading."/>
          <Item question="Which strategy is best? Which should I subscribe?" answer={<div className="row text-dark"><div className="col-lg-3"><div className="strange1"><div className="card-side-front"><div className="card_image" style={{height: "10rem"}}>&nbsp;</div><h1 className="card-heading">Penguin Cave // Source</h1><div className="card-details"><ul className="card-ul pl-0"><li className="card-li">ROI = 246%</li><li className="card-li">Drawdown = 6.5%</li><li className="card-li"> Min Capital = ₹ 25000 </li></ul></div></div></div></div><div className="col-lg-3"><div className="strange1"><div className="card-side-front"><div className="card_image" style={{height: "10rem"}}>&nbsp;</div><h1 className="card-heading">Smoking in Black // Source</h1><div className="card-details"><ul className="card-ul pl-0"><li className="card-li">ROI = 165%</li><li className="card-li">Drawdown = 5.81%</li><li className="card-li"> Min Capital = ₹ 25000 </li></ul></div></div></div></div><div className="col-lg-3"><div className="strange1"><div className="card-side-front"><div className="card_image" style={{height: "10rem"}}>&nbsp;</div><h1 className="card-heading">Intraday Profit Bot 1.O (Model A)</h1><div className="card-details"><ul className="card-ul pl-0"><li className="card-li">ROI = 228%</li><li className="card-li">Drawdown = 13.67%</li><li className="card-li"> Min Capital = ₹ 25000 </li></ul></div></div></div></div><div className="col-lg-3"><div className="strange1"><div className="card-side-front"><div className="card_image" style={{height: "10rem"}}>&nbsp;</div><h1 className="card-heading">Smart Disha Bank NIFTY - W.S</h1><div className="card-details"><ul className="card-ul pl-0"><li className="card-li">ROI = 339%</li><li className="card-li">Drawdown = 50.39%</li><li className="card-li"> Min Capital = ₹ 25000 </li></ul></div></div></div></div></div>}/>
        </div>
      </section>
    </div>
  );
};

export default Faq;