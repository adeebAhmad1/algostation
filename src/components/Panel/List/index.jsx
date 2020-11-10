import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import Crumb from "../../utils/Crumb";
import firebase, { db, storage, storageRef } from "../../../config/Firebase"
const List = ({history}) => {
  const data = useContext(DataContext);
  const showTable = () =>
    data.performance.map((el, i) => {
      return (
        <tr>
          <th scope="row"> {i + 1} </th>
          <td style={{ width: `3%` }}>
            <img style={{ width: "100%" }} src={el.thumbnail} alt="" />
          </td>
          <td style={{ width: `45%` }}>
            {el.description.length > 50
              ? el.description.slice(0, 50) + "..."
              : el.description}
          </td>
          <td style={{ width: `10%` }}>{el.type}</td>
          <td style={{ width: `20%` }}>{el.iframe}</td>
          <td style={{ width: `15%` }}>{new Date(el.date).toLocaleDateString()}</td>
          <td style={{ width: `7%` }}><button onClick={()=>{
            db.collection("performance").doc(el.id).delete().then(()=>{
              if(el.type === "Video"){
                storage.refFromURL(el.video).delete()
              } else if(el.type === "Image"){
                storage.refFromURL(el.thumbnail).delete()
              }
            });
            
          }} className="btn btn-danger" style={{fontSize: `0.8rem`}}>Delete</button></td>
        </tr>
      );
    });
  return (
    <div>
      <Crumb name="Performance List" />
      <section className="py-5 height">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: `3%` }} scope="col">
                  #
                </th>
                <th scope="col">Thumbnail</th>
                <th scope="col" style={{ width: `45%` }}>
                  Description
                </th>
                <th style={{ width: `10%` }} scope="col">
                  Type
                </th>
                <th style={{ width: `20%` }} scope="col">
                  IFrame url
                </th>
                <th style={{ width: `15%` }} scope="col">
                  date
                </th>
                <th style={{ width: `7%` }} scope="col">
                  Button
                </th>
              </tr>
            </thead>
            <tbody>{showTable()}</tbody>
          </table>
          <Link to="/panel/add" className="btn btn-primary m-4">Add</Link>
          <button onClick={()=> firebase.auth().signOut().then(()=> history.push("/"))} className="btn btn-primary m-4">Logout</button>
        </div>
      </section>
    </div>
  );
};

export default List;
