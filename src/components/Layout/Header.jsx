import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";

const Header = () => {
  const bg = {};
  bg["--bg"] = "#fff";
  const header = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  });
  const scrollHeader = () => {
    if (header.current) {
      if (window.scrollY > window.innerHeight / 1.5) {
        header.current.classList.add("scroll");
      }
      if (window.scrollY < window.innerHeight / 1.5) {
        header.current.classList.remove("scroll");
      }
    }
  };
  return (
    <header style={bg} ref={header}>
      <div className="header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <Link className="navbar-brand nav-brand" to="/">
                    <img src={Logo} style={{ maxWidth: `100%` }} alt="" />
                  </Link>
                </div>
                <div className="col-lg-10">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse justify-content-end navbar-collapse"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item d-flex justify-content-center align-items-center">
                        <NavLink
                          exact
                          activeClassName="active"
                          to="/"
                          className="nav-link text-white font-weight-bold"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item d-flex justify-content-center align-items-center">
                        <NavLink
                          exact
                          activeClassName="active"
                          to="/setup"
                          className="nav-link text-white font-weight-bold"
                        >
                          Setup
                        </NavLink>
                      </li>
                      <li className="nav-item d-flex justify-content-center align-items-center">
                        <NavLink
                          exact
                          activeClassName="active"
                          className="nav-link text-white font-weight-bold"
                          to="/performance"
                        >
                          Performance
                        </NavLink>
                      </li>
                      <li>
                        <a rel="noreferrer" target="_blank" href="https://bit.ly/TTronOffer" className="learn-more font-weight-bold">Sign Up</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
