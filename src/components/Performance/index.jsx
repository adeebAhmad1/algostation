import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Crumb from "../utils/Crumb";
import Card from "./Card";
import image from "../../images/performance.jpg"
const Performance = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <Crumb name="Performance" url={{backgroundImage:`linear-gradient( to right bottom, var(--color-1-light), var(--color-2-light)), url(${image})`}} />
      <section className="height">
        <div className="container">
          <div className="row">
            {data.performance.map((data) => {
              return <Card {...data} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
