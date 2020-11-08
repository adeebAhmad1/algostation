import React from 'react';

const Step = ({content,step,extra,bg}) => {
  const style = {};
  style["--bg"] = bg
  return (
    <div className="step py-4 my-4">
      <div className="step_inner text-dark row">
        <div className="col-lg-3 position-relative">
          <div className="option d-flex justify-content-start align-items-center h-100">
            <div style={{...extra,...style}} className="content">
              <div className="contant_inner">
                Step
                <h1 className="mb-0 p-1">{step}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex justify-content-center align-items-center pr-5">{content}</div>
      </div>
    </div>
  );
};

export default Step;