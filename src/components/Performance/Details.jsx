import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Performance from ".";
import { DataContext } from "../../context/DataContext";

const Details = () => {
  const params = useParams();
  const context = useContext(DataContext);
  const [pr, setPr] = useState({});
  const [nextId,setNextId] =  useState(null)
  const [prevId,setPrevId] =  useState(null)
  const ref = useRef(null);
  useEffect(() => {
    const pr = context.performance.find((el) => el.id === params.id);
    const prIndex = context.performance.findIndex((el) => el.id === params.id);
    setPr(pr);
    const prev = context.performance[prIndex-1] || {};
    const next = context.performance[prIndex+1] || {};
    setPrevId(prev.id);
    setNextId(next.id);
    if (pr.type === "Youtube") {
      if (ref.current) {
        ref.current.innerHTML = pr.iframe;
      }
    }
  }, [setPr, pr, params.id, context.performance]);
  const showDiv = () => {
    return pr.type === "Youtube" ? (
      <div className="div_content" ref={ref}></div>
    ) : pr.type === "Video" ? (
      <video controls={true} src={pr.video} className="div_content"></video>
    ) : (
      <img className="div_content" src={pr.thumbnail} alt="" />
    );
  };
  return (
    <div className="back">
      <Performance />
      <div className="outer_div">
        <Link to="/performance" className="cover"></Link>
        {
          prevId ? <Link to={`/performance/${prevId}`}>
          <svg
            className="prev"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 492 492"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                />
              </g>
            </g>
          </svg>
        </Link> : ""
        }
        {
          nextId ? <Link to={`/performance/${nextId}`}>
          <svg
            className="next"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 451.846 451.847"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
              />
            </g>
          </svg>
        </Link> : ""
        }
        <div className="inner_div p-2">{showDiv()}</div>
      </div>
    </div>
  );
};

export default Details;
