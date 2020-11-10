import React from "react";

const Loader = ({show}) => {
  return (
    <div className={`loader_wrapper ${show ? "" : "collapse"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
