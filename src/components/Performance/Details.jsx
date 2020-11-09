import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Performance from '.';
import { DataContext } from '../../context/DataContext';

const Details = () => {
  const params = useParams();
  const context = useContext(DataContext);
  const [pr,setPr] = useState({});
  const ref = useRef(null)
  useEffect(()=>{
    const pr = context.performance.find(el=> el.id === params.id);
    setPr(pr);
    if(pr.type === "Youtube"){
      if(ref.current){
        ref.current.innerHTML = pr.iframe
      }
    }
  },[setPr,pr,params.id,context.performance]);
  const showDiv = ()=>{
    return pr.type === "Youtube" ? <div className="div_content" ref={ref}></div> : pr.type === "Video" ? <video controls={true} src={pr.video} className="div_content"></video> : <img className="div_content" src={pr.thumbnail} alt=""/>
  }
  return (
    <div className="back">
      <Performance />
      <div className="outer_div">
        <Link to="/performance" className="cover"></Link>
      <div className="inner_div p-2">
        {showDiv()}
      </div>
    </div>
    </div>
  );
};

export default Details;