import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({video,thumbnail,date,description,iframe,type,id}) => {
  const span = useRef(null)
  useEffect(()=>{
    if(span.current){
      span.current.innerHTML = iframe
    }
  },[iframe])
  return (
    <div className="col-lg-4">
      <div className="grid__item">
        <div className="card__item">
          {type === "Video" ? (
            <video className="card__img" src={video}></video>
          ) : type === "Youtube" ? (
            <div className="card__img" ref={span}></div>
          ) : (
            <img className="card__img" src={thumbnail} alt="Snowy Mountains" />
          )}
          <div className="card__content">
            
            <p className="card__text">{description}</p>
            <Link to={`/performance/${id}`} className="card__btn">
              View <span>&rarr;</span>
            </Link>
            <a href="https://bit.ly/TTronOffer" className="learn-more my-2 mr-0" style={{fontSize: `0.6rem`}}>SignUp to TT</a>
            <a href="https://bit.ly/ABAlgoTrade" className="learn-more my-2 mr-0 ml-1"  style={{fontSize: `0.6rem`}}>SignUp to Platform</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
