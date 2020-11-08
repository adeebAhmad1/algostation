import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer className="container-fluid bg-grey py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="logo-part">
                  <Link
                    className="navbar-brand nav-brand"
                    style={{color: "#fff"}}
                    to="/"
                  >
                    <img src={Logo} style={{maxWidth: `100%`}} alt=""/>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <h5> About Company</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ratione totam quidem deserunt enim commodi, tempora
                  fuga beatae aliquid consequatur.
                </p>
                <a
                  href="http://bit.ly/ABAlgoTrade"
                  className="learn-more"
                >
                  Sign Up
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 px-4">
                <h5>Help us</h5>
                <div className="row ">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <Link to="/"> Home</Link>{" "}
                      </li>
                      <li>
                        <Link to="/performance"> Performance</Link>{" "}
                      </li>
                      <li>
                        <Link to="/terms"> Terms & Conditions</Link>{" "}
                      </li>
                      <li>
                        <Link to="/setup"> Setup</Link>{" "}
                      </li>
                      <li>
                        <Link to="#faq"> FAQ's</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
