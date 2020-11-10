import React, { useState } from "react";
import "./add.css";
import { db, storage } from "../../../config/Firebase";
import Crumb from "../../utils/Crumb";
import Loader from "./Loader";

const Add = ({ history }) => {
  const [description, setDesc] = useState("");
  const [type, setType] = useState("");
  const [iframe, setIframe] = useState("");
  const [start, setStart] = useState(false);
  const [file, setFile] = useState(null);
  const options = ["Youtube", "Image", "Video"];
  const onSubmit = (e) => {
    setStart(true);
    e.preventDefault();
    const obj = { description, type };
    obj["date"] = Date.now();
    if (type === "Youtube") obj["iframe"] = iframe;
    if(type !== "Youtube"){
      storage
      .ref(`/${file.name}`)
      .put(file)
      .then(() => {
        storage
          .ref(`/${file.name}`)
          .getDownloadURL()
          .then((thumbnail) => {
            if (type === "Image") obj["thumbnail"] = thumbnail;
            else if (type === "Video") obj["video"] = thumbnail;
            db.collection("performance")
              .add(obj)
              .then(() => {
                history.push("/panel/list");
                setFile(null);
                setStart(false);
                setIframe("");
                setDesc("");
              });
          });
      });
    } else{
      db.collection("performance").add(obj).then(() => {
        history.push("/panel/list");
        setFile(null);
        setStart(false);
        setIframe("");
        setDesc("");
      });
    }
  };
  return (
    <div>
      <Crumb name="Add Performance" />
      <section id="form-section" className="form-section">
        <div className="container">
          <Loader show={start} />
          <div className="row">
            <div className="book w-100">
              <div className="form-book">
                <form onSubmit={onSubmit} action="" className="form">
                  <div className="u-center-text u-margin-bottom-1">
                    <h2 className="heading-secondary">Add Performance</h2>
                  </div>
                  <div className="form-group">
                    <textarea
                      onChange={(e) => setDesc(e.target.value)}
                      className="form-input"
                      placeholder="Description"
                      required
                      id="email"
                    ></textarea>
                    <label htmlFor="email" className="form-label">
                      Description
                    </label>
                  </div>
                  <div className="form-group">
                    <select
                      onChange={(e) =>
                        setType(e.target.selectedOptions[0].innerHTML)
                      }
                      className="form-input"
                      defaultValue="a"
                      required
                      id="password"
                    >
                      <option value="a" disabled>
                        Seclect Value
                      </option>
                      {options.map((el) => (
                        <option value={el}>{el}</option>
                      ))}
                    </select>
                    <label htmlFor="password" className="form-label">
                      Type
                    </label>
                  </div>
                  {type === "Youtube" ? (
                    <div className="form-group">
                      <textarea
                        className="form-input"
                        onChange={(e) => setIframe(e.target.value)}
                        placeholder="Enter Iframe Tag"
                        required
                        id="iframe"
                      ></textarea>
                      <label htmlFor="iframe" className="form-label">
                        Enter Iframe Tag
                      </label>
                    </div>
                  ) : (
                    ""
                  )}
                  {type === "Image" || type === "Video" ? (
                    <div className="form-group">
                      {type === "Video" ? (
                        <input
                          className="form-input"
                          onChange={(e) => setFile(e.target.files[0])}
                          accept="video/*"
                          placeholder="Upload Thumbnail"
                          id="thumb"
                          type="file"
                        />
                      ) : (
                        <input
                          className="form-input"
                          onChange={(e) => setFile(e.target.files[0])}
                          placeholder="Upload Thumbnail"
                          id="thumb"
                          type="file"
                          accept="image/*"
                        />
                      )}
                      <label className="form-label" htmlFor="thumb">
                        {type === "Video" ? "Video" : "Image"}
                      </label>
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <div className="login">
                      {start ? (
                        <button disabled={true} className="btn btn-primary">
                          Login
                        </button>
                      ) : (
                        <button className="btn btn-primary">Login</button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;
