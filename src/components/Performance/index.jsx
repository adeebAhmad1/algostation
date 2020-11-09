import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Crumb from "../utils/Crumb";
import Card from "./Card";

const Performance = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <Crumb name="Performance" />
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
