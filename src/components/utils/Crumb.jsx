import React from 'react';

const Crumb = ({name,url}) => {
  return (
    <section style={{...url}} className="detail d-flex justify-content-center align-items-center">
      <h1 className="text-white" style={{fontFamily: "Audiowide",fontSize: "3rem"}}>{name}</h1>
    </section>
  );
};

export default Crumb;