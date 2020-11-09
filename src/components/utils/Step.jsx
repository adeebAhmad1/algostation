import React from "react";

const Step = ({ content, step, extra, bg, btn:link }) => {
  const style = {};
  const btn = {};
  btn["--btn"] = "#000"
  btn["--btn-color"] = "#fff"
  style["--bg"] = bg;
  return (
    <div className="step py-4 my-4">
      <div className="step_inner text-dark row">
        <div className="col-lg-3 position-relative">
          <div className="option d-flex justify-content-center align-items-center h-100">
            <div style={{ ...extra, ...style }} className="content">
              <div className="contant_inner">
                Step
                <h1 className="mb-0 p-1">{step}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 pr-3">
          <div className="row">
            <div className="col-lg-8 d-flex justify-content-start align-items-center">
              {content}
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              {link}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
